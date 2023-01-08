const buttons = document.querySelectorAll('.faq-q');
document.addEventListener('DOMContentLoaded', function(){
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const answerElement = document.querySelector(target);
    
        if (answerElement.style.display === 'block') {
          answerElement.style.display = 'none';
        } else {
          answerElement.style.display = 'block';
        }
      });
    });

});