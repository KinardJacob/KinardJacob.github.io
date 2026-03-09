const jsonSources = [
    "packages.json",
    "../../packages.json",
    "../packages.json",
    "https://raw.githubusercontent.com/KinardJacob/KinardJacob.github.io/main/projects/project%207/packages.json"
];

const portfolioGrid = document.getElementById("portfolio-grid");
const portfolioError = document.getElementById("portfolio-error");

const createPortfolioCard = (item) => {
    const card = document.createElement("article");
    card.className = "portfolio-card";

    const image = document.createElement("img");
    image.src = encodeURI(item.image);
    image.alt = item.title;

    const content = document.createElement("div");
    content.className = "portfolio-card-content";

    const heading = document.createElement("h3");
    heading.textContent = item.title;

    const meta = document.createElement("p");
    meta.className = "portfolio-meta";
    meta.textContent = `${item.type} • ${item.duration} • ${item.location}`;

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("p");
    price.className = "portfolio-price";
    price.textContent = item.price;

    content.append(heading, meta, description, price);
    card.append(image, content);
    return card;
};

const loadPortfolioItems = async () => {
    if (!portfolioGrid || !portfolioError) {
        return;
    }

    portfolioGrid.textContent = "Loading sessions...";
    portfolioError.textContent = "";

    for (const source of jsonSources) {
        try {
            const response = await fetch(source);
            if (!response.ok) {
                continue;
            }

            const items = await response.json();
            portfolioGrid.innerHTML = "";

            items.forEach((item) => {
                portfolioGrid.append(createPortfolioCard(item));
            });

            return;
        } catch (error) {
            continue;
        }
    }

    portfolioGrid.textContent = "";
    portfolioError.textContent = "Could not load photography sessions right now.";
};

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

const showFormStatus = (message, type) => {
    if (!formStatus) {
        return;
    }

    formStatus.textContent = message;
    formStatus.classList.remove("status-success", "status-error");
    formStatus.classList.add(type === "success" ? "status-success" : "status-error");
};

const validateContactForm = (data) => {
    if (!data.name.trim()) {
        return "Please enter your name.";
    }

    if (!data.email.trim()) {
        return "Please enter your email.";
    }
 // I used an AI-generated basic email validation. its not perfect but sufficient for most cases
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
        return "Please use a valid email address.";
    }

    if (!data.session.trim()) {
        return "Please select a session type.";
    }

    if (!data.message.trim() || data.message.trim().length < 10) {
        return "Please include a message with at least 10 characters.";
    }

    return "";
};

const initializeContactForm = () => {
    if (!contactForm) {
        return;
    }

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            phone: contactForm.phone.value,
            session: contactForm.session.value,
            message: contactForm.message.value
        };

        const errorMessage = validateContactForm(formData);
        if (errorMessage) {
            showFormStatus(errorMessage, "error");
            return;
        }

        const submitButton = contactForm.querySelector("button[type='submit']");
        if (submitButton) {
            submitButton.disabled = true;
        }

        showFormStatus("Sending your message...", "success");

        try {
            const web3FormData = new FormData(contactForm);
            web3FormData.set("subject", `Photography inquiry: ${formData.session || "General"}`);

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: web3FormData,
                headers: {
                    Accept: "application/json"
                }
            });

            const result = await response.json();

            if (response.ok && result.success) {
                showFormStatus("Message sent successfully! I will get back to you soon.", "success");
                contactForm.reset();
            } else {
                showFormStatus(result.message || "Message failed to send. Please try again.", "error");
            }
        } catch (error) {
            showFormStatus("Network error. Please check your connection and try again.", "error");
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
            }
        }
    });
};

loadPortfolioItems();
initializeContactForm();
