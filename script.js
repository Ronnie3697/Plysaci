document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('reveal-button');
  var contentToggle = document.getElementById('content-toggle');
  var content = document.getElementById('content');
  var colorInterval;

  function changeButtonColor() {
    button.style.backgroundColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  function stopColorChange() {
    clearInterval(colorInterval);
  }

  function growButton() {
    button.style.transform = 'scale(50)';
    button.style.opacity = '0';
    setTimeout(function () {
      contentToggle.style.display = 'none';
      content.style.display = 'block';
    }, 1000);
  }

  // Start changing the button color on page load
  colorInterval = setInterval(changeButtonColor, 500);

  // Stop color change and grow button when clicked
  button.addEventListener('click', function () {
    stopColorChange();
    growButton();
  });
});
