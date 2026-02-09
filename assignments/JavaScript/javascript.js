// Geometry - Show triangle on click
// AI-Generated Code
// Citation: Toggle class functionality using classList.toggle()
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
const column = document.querySelector('.column');
const triangle = document.getElementById('triangle');

column.addEventListener('click', () => {
    triangle.classList.toggle('hidden');
});

// Date Picker - Display selected date
const datePicker = document.getElementById('datePicker');
const dateDisplay = document.getElementById('dateDisplay');

datePicker.addEventListener('change', (event) => {
    const selectedDate = new Date(event.target.value);
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    const year = selectedDate.getFullYear();
    
    const formattedDate = `${month}/${day}/${year}`;
    dateDisplay.textContent = `You picked the date: ${formattedDate}`;
});

// Frame Image - Add border on click
const sunImage = document.getElementById('sunImage');

sunImage.addEventListener('click', () => {
    sunImage.classList.toggle('framed');
});
