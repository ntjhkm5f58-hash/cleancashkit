const form = document.getElementById("newsletterForm");
const message = document.getElementById("formMessage");
const emailField = document.getElementById("email");
const yearSpan = document.getElementById("year");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!emailField.value || !emailField.checkValidity()) {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "#ff8ba7";
      emailField.focus();
      return;
    }

    message.textContent = "You're in! Watch your inbox for the next drop.";
    message.style.color = "#2cb67d";
    form.reset();
  });
}
