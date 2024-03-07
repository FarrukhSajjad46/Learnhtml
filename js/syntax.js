const scrollableDiv = document.getElementById('scrollableDiv');

scrollableDiv.addEventListener('mouseenter', function() {
    this.style.overflowY = 'scroll';
});

scrollableDiv.addEventListener('mouseleave', function() {
    this.style.overflowY = 'hidden';
});

//for code editor
function runCode() {
    var code = document.getElementById('code').value;
    var resultWindow = window.open();
    resultWindow.document.write(code);
    resultWindow.document.close();
  }