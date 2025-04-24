// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('errorMessages').innerHTML = '';

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let errors = [];

    // Validation checks
    if (username.length < 3) {
        errors.push('Username must be at least 3 characters long.');
    }

    if (!validateEmail(email)) {
        errors.push('Please enter a valid email address.');
    }

    if (password.length < 6) {
        errors.push('Password must be at least 6 characters long.');
    }

    // Display errors or submit the form
    if (errors.length > 0) {
        document.getElementById('errorMessages').innerHTML = errors.join('<br>');
    } else {
        alert('Registration successful!');
        // Here you can submit the form or perform further actions
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}