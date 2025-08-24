const form = document.querySelector("form");
const results = document.querySelector(".js-bmi");
const category = document.querySelector(".js-category");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);

  // Validate input
  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please enter valid height";
    category.innerHTML = "";
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please enter valid weight";
    category.innerHTML = "";
    return;
  }

  // Calculate BMI
  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

  // Determine category
  let bmiCategory = "";
  if (bmi < 18.5) bmiCategory = "Underweight";
  else if (bmi >= 18.5 && bmi < 25) bmiCategory = "Normal";
  else if (bmi >= 25 && bmi < 30) bmiCategory = "Overweight";
  else bmiCategory = "Obese";

  // Show results
  results.innerHTML = bmi;
  category.innerHTML = bmiCategory;
});
