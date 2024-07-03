document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;
    const time  = document.getElementById('time').value;

    const total = value * (1 + fee)**time;

    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('calculate');
    const inputs = document.querySelectorAll('input[type="number"]');

   
    inputs.forEach(input => {
        input.addEventListener('keypress', function(event) {
          
            if (event.key === 'Enter') {
                event.preventDefault(); 
                button.click(); 
            }
        });
    });
});

// assets/js/theme.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-theme');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
