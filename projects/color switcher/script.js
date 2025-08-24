const colorButtons = document.querySelectorAll(".color-btn");

colorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const selectedColor = button.getAttribute("data-color");
    document.body.style.backgroundColor = selectedColor;
  });
});
