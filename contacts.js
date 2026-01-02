


const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    alert('Съобщението е изпратено успешнo');

    
    form.reset();
})