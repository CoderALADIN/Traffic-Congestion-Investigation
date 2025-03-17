document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("responseMessage").textContent = "Message sent successfully!";
});
