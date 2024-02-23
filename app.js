const shopNowButton = document.getElementById('shopNow');

const modal = document.querySelector('.modal');

shopNowButton.addEventListener('click', function() {
    modal.style.display = 'block';
});


const closeButton = document.querySelector('.btn-close');
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

const subscribeForm = document.getElementById('form');

subscribeForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailInput = this.querySelector('input[type="email"]').value;

    if (validateEmail(emailInput)) {
        alert('Спасибо за подписку!');
        this.reset();
    } else {
        alert('Пожалуйста, введите корректный email адрес.');
    }
});
    
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}