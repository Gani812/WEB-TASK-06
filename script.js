document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop form from submitting

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Get error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMsg = document.getElementById("successMsg");

    // Reset messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    // Email regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;

    // Validation
    if (name === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    }

    if (email === "") {
        emailError.textContent = "Email is required.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format.";
        valid = false;
    }

    if (message === "") {
        messageError.textContent = "Message cannot be empty.";
        valid = false;
    }

    // Success message
    if (valid) {
        successMsg.textContent = "Form submitted successfully!";
        document.getElementById("contactForm").reset();
    }
});
