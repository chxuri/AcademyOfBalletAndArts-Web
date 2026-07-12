emailjs.init({
    publicKey: "zIXVbYj6D0M8SospD",
});

const form = document.getElementById("contactForm");
const button = form.querySelector("button");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Show loading state
    button.disabled = true;
    button.textContent = "Sending...";
    status.textContent = "";

    emailjs.send(
        "AcademyOfBalletAndArts",
        "template_79klfyk",
        {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        }
    )

    .then(function () {

        status.textContent = "✓ Thank you! Your message has been sent.";
        form.reset();

    })

    .catch(function (error) {

        status.textContent = "Sorry, your message couldn't be sent. Please try again.";
        console.error(error);

    })

    .finally(function () {

        button.disabled = false;
        button.textContent = "Send Message";

    });

});