window.onload = function () {
  const inputBackground = document.getElementById('background-color-input');
  const inputColor = document.getElementById('font-color-input');
  const inputFontSize = document.getElementById('font-size-input');
  const inputLineSpace = document.getElementById('line-space-input');
  const inputFontFamily = document.getElementById('font-family-input');
  
  function changeBackgroundColor() {
    inputBackground.addEventListener('input', function(event) {
      document.body.style.backgroundColor = event.target.value;
    })
  }
  changeBackgroundColor();

  function changeFontColor() {
    inputColor.addEventListener('input', function(event) {
      document.body.style.color = event.target.value;
    })
  }
  changeFontColor();

  function changeFontSize() {
    inputFontSize.addEventListener('input', function(event) {
      document.querySelector('.news').style.fontSize = event.target.value;
    })
  }
  changeFontSize();

  function changeLineSpace() {
    inputLineSpace.addEventListener('input', function(event) {
      document.querySelector('.news').style.lineHeight = event.target.value;
    })
  }
  changeLineSpace();

  function changeFontFamily() {
    inputFontFamily.addEventListener('input', function(event) {
      document.body.style.fontFamily = event.target.value;
    })
  }
  changeFontFamily();
}
