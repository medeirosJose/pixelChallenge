function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (event) {
    let hasError = false;

    document.querySelectorAll(".error-message").forEach((e) => e.remove());

    if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        showError(emailInput, "Por favor, insira um e-mail válido.");
        hasError = true;
    }

    if (passwordInput.value === "") {
        showError(passwordInput, "Por favor, preencha a senha.");
        hasError = true;
    } else if (passwordInput.value.length < 8) {
        showError(passwordInput, "A senha deve ter pelo menos 8 caracteres.");
        hasError = true;
    }

    if (hasError) {
        event.preventDefault(); 
    }
});

  function showError(inputElement, message) {
    const errorDiv = document.createElement("div");
    errorDiv.textContent = message;
    errorDiv.classList.add("error-message");
    errorDiv.style.color = "red";
    inputElement.insertAdjacentElement("afterend", errorDiv);
  }
});
