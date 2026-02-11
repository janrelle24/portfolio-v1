document.addEventListener("DOMContentLoaded", function (){
    //initialize emailjs
    emailjs.init("cVAUJcUEAEaw5o9_W");

    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_t75qy53",   
            "template_jikoxf8",
            this
        )
        .then(function () {
            //show success message
            formMessage.textContent = "Message sent successfully, it direct to my email account! ";
            formMessage.classList.remove("error");
            formMessage.classList.add("success");

            form.reset();

            // Hide message after 4 seconds
            setTimeout(() => {
                formMessage.classList.remove("success");
                formMessage.textContent = "";
            }, 4000);
        })
        .catch(function (error) {
            // Show error message
            formMessage.textContent = "Failed to send message. Please try again.";
            formMessage.classList.remove("success");
            formMessage.classList.add("error");
            console.error("EmailJS error:", error);

            // Hide message after 4 seconds
            setTimeout(() => {
                formMessage.classList.remove("error");
                formMessage.textContent = "";
            }, 4000);
        });
    });
});


