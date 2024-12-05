const principalBox = document.querySelector("#principal");
const periodBox = document.querySelector("#period");
const aprSlider = document.querySelector("#apr");
const aprText = document.querySelector("#aprText");
const yearsBox = document.querySelector("#years");
const interestOutput = document.querySelector("#accumulated");
const totalOutput = document.querySelector("#amount");

aprSlider.addEventListener("input", () => {
  aprText.textContent = aprSlider.value + "%";
  calculateTotal();
  calculateInterest();
});
principalBox.addEventListener("input", () => {
  calculateTotal();
  calculateInterest();
});
periodBox.addEventListener("input", () => {
  calculateTotal();
  calculateInterest();
});
yearsBox.addEventListener("input", () => {
  calculateTotal();
  calculateInterest();
});

function calculateTotal() {
  let total =
    principalBox.value *
    (1 + aprSlider.value / 100 / periodBox.value) **
      (periodBox.value * yearsBox.value);
  totalOutput.textContent = Math.round(total * 100) / 100;
}
function calculateInterest() {
  let interest =
    principalBox.value *
      (1 + aprSlider.value / 100 / periodBox.value) **
        (periodBox.value * yearsBox.value) -
    principalBox.value;
  interestOutput.textContent = Math.round(interest * 100) / 100;
}
