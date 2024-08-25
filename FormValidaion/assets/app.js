document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const usernamePattern = /^[a-zA-Z0-9]{5,12}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!usernamePattern.test(username)) {
        event.preventDefault();
        alert('Invalid username. Username must be 5-12 characters long and contain only letters and numbers.');
        return;
    }

    if (!emailPattern.test(email)) {
        event.preventDefault();
        alert('Invalid email address. Please enter a valid email (e.g., user@example.com).');
        return;
    }

    if (!passwordPattern.test(password)) {
        event.preventDefault();
        alert('Invalid password. Password must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter.');
        return;
    }

    alert('Form submitted successfully!');
});