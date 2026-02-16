// Toggle menu on mobile
document.getElementById('menuToggle').addEventListener('click', function() {
    const menuItems = document.getElementById('menuItems');
    const menuArrow = document.getElementById('menuArrow');
    
    menuItems.classList.toggle('active');
    menuArrow.classList.toggle('up');
});

// Show exercise function
function showExercise(exerciseNum) {
    // Hide exercises
    document.getElementById('exercise1').classList.remove('visible');
    document.getElementById('exercise2').classList.remove('visible');
    
    // Show exercise
    if (exerciseNum === 1) {
        document.getElementById('exercise1').classList.add('visible');
        updateMessage(); 
    } else {
        document.getElementById('exercise2').classList.add('visible');
        updateCountdown(); 
    }
    
    // Close menu on mobile
    const menuItems = document.getElementById('menuItems');
    const menuArrow = document.getElementById('menuArrow');
    if (menuItems.classList.contains('active')) {
        menuItems.classList.remove('active');
        menuArrow.classList.remove('up');
    }
}

// Exercise 1
document.getElementById('minutesSlider').addEventListener('input', function() {
    const minutes = parseInt(this.value);
    document.getElementById('sliderValue').textContent = minutes + ' minute' + (minutes !== 1 ? 's' : '');
    updateMessage();
});

function updateMessage() {
    const minutes = parseInt(document.getElementById('minutesSlider').value);
    let message = '';

    if (minutes > 45) {
        message = '🥐 Grab your coffee and bagel. You have plenty of time.';
    } else if (minutes >= 30 && minutes <= 45) {
        message = '☕ Grab your coffee. No one will judge if you\'re 5 minutes late.';
    } else if (minutes >= 15 && minutes < 30) {
        message = '🏃 Start walking to class, you\'re going to be close.';
    } else {
        message = '🏃‍♂️ RUN! You\'re going to be late!';
    }

    document.getElementById('messageBox').innerHTML = message;
}

// Exercise 2
function updateCountdown() {
    const now = new Date();
    const classTime = new Date();
    classTime.setHours(8, 30, 0, 0); // Set class time to 8:30 AM

    let minutesUntilClass = Math.floor((classTime - now) / 60000); // Convert milliseconds to minutes

    let message = '';

    if (minutesUntilClass > 15) {
        message = '⏰ You have ' + minutesUntilClass + ' minutes until class. Better get going!';
    } else if (minutesUntilClass >= 10 && minutesUntilClass <= 15) {
        message = '⏱️ You have ' + minutesUntilClass + ' minutes until class. Get moving!';
    } else if (minutesUntilClass >= 5 && minutesUntilClass < 10) {
        message = '🏃 You have ' + minutesUntilClass + ' minutes until class. HURRY!';
    } else if (minutesUntilClass >= 0 && minutesUntilClass < 5) {
        message = '🏃‍♂️ You have ' + minutesUntilClass + ' minutes until class. RUN NOW!';
    } else if (minutesUntilClass >= -5 && minutesUntilClass < 0) {
        message = '😱 Class started ' + Math.abs(minutesUntilClass) + ' minute' + (Math.abs(minutesUntilClass) !== 1 ? 's' : '') + ' ago. You\'re late!';
    } else if (minutesUntilClass >= -15 && minutesUntilClass < -5) {
        message = '😩 Class started ' + Math.abs(minutesUntilClass) + ' minutes ago. Hurry and get there!';
    } else {
        message = '😤 You missed class! It started ' + Math.abs(minutesUntilClass) + ' minutes ago.';
    }

    document.getElementById('countdownBox').innerHTML = message;
}


document.addEventListener('DOMContentLoaded', function() {
    updateMessage();
    updateCountdown();
});
