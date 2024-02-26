const scrollableDiv = document.getElementById('scrollableDiv');

scrollableDiv.addEventListener('mouseenter', function() {
    this.style.overflowY = 'scroll';
});

scrollableDiv.addEventListener('mouseleave', function() {
    this.style.overflowY = 'hidden';
});
