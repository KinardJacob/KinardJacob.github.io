document.querySelectorAll(".navbar").forEach((navbar) => {
	const toggleButton = navbar.querySelector(".nav-toggle");
	const navList = navbar.querySelector(".nav-list");

	if (!toggleButton || !navList) {
		return;
	}

	const setExpandedState = (isExpanded) => {
		toggleButton.setAttribute("aria-expanded", String(isExpanded));
	};

	setExpandedState(false);

	toggleButton.addEventListener("click", () => {
		const isOpen = navbar.classList.toggle("nav-open");
		setExpandedState(isOpen);
	});

	navList.querySelectorAll("a").forEach((navLink) => {
		navLink.addEventListener("click", () => {
			if (window.innerWidth <= 768) {
				navbar.classList.remove("nav-open");
				setExpandedState(false);
			}
		});
	});
});
