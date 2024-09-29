// Sign Up Form Submission with Email Validation
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

       
        const emailRegex = /^\S+@\S+\.\S+$/;

        
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;  
        }

       
        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));
 
       
        alert('Sign up successful! You can now login.');
        window.location.href = 'index.html';
    });
}

 
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        
        const user = JSON.parse(localStorage.getItem('user'));

     
        if (user && user.email === email && user.password === password) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('loggedInUser', user.name);
            window.location.href = 'home.html';
        } else {
            alert('Invalid email or password.');
        }
    });
}

 
const welcomeName = document.getElementById('welcomeName');
if (welcomeName) {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        welcomeName.textContent = loggedInUser;
    } else {
        window.location.href = 'index.html';   
    }
}

 
const logoutButton = document.getElementById('logout');
if (logoutButton) {
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('loggedInUser');
        window.location.href = 'index.html';
    });
}
