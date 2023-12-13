function updateCardNumber(value) {
  document.querySelector(".card-number").textContent = value;
}

function updateCardholderName(value) {
  document.querySelector(".card-owner").textContent = value;
}

function updateExpirationDate(value) {
  document.querySelector(".card-expiration").textContent = value;
}

function updateSubmitButtonState() {
  var cardNumber = document.getElementById("card-number").value.trim();
  var cardholderName = document.getElementById("cardholder-name").value.trim();
  var expirationDate = document.getElementById("expiration-date").value.trim();
  var cvv = document.getElementById("cvv").value.trim();

  var isCardNumberValid = cardNumber.length === 16; // deve ter no min e no max 16 caracteres
  var isCardholderNameValid = cardholderName.length > 0;
  var isExpirationDateValid = expirationDate.length > 0;
  var isCvvValid = cvv.length === 3; // cvv deve ter no min e no max 3 caracteres

  var isFormValid =
    isCardNumberValid &&
    isCardholderNameValid &&
    isExpirationDateValid &&
    isCvvValid;
  document.querySelector(".submit-button").disabled = !isFormValid;
}

// Attach the updateSubmitButtonState function to the oninput event for each input field
document.getElementById("card-number").oninput = updateSubmitButtonState;
document.getElementById("cardholder-name").oninput = updateSubmitButtonState;
document.getElementById("expiration-date").oninput = updateSubmitButtonState;
document.getElementById("cvv").oninput = updateSubmitButtonState;

// Initialize the button state on page load
document.addEventListener("DOMContentLoaded", updateSubmitButtonState);
