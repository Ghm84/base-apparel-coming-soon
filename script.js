
const emailInput = document.querySelector('.email');
const arrowIconContainer = document.querySelector('.arrow-icon-container');
const arrowIcon = document.querySelector('.arrow-icon');
const errorIcon = document.querySelector('.error-icon');
const successMessageClass = 'success-message';
const errorMessageClass = 'error-message';


function validateEmail(email) {
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  return emailRegex.test(email);

}

function showError() {
    
  emailInput.classList.add('error'); 
  errorIcon.style.display = 'block'; 

  if (!document.querySelector(`.${errorMessageClass}`)) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Please provide a valid email';
    errorMessage.classList.add(errorMessageClass);
    errorMessage.style.color = 'hsl(0, 74%, 55%)'; 
    errorMessage.style.marginTop = '0.5rem'; 
    emailInput.parentNode.appendChild(errorMessage);
  }

  emailInput.focus(); 

}


function removeErrorState() {

  emailInput.classList.remove('error'); 
  errorIcon.style.display = 'none'; 

  const errorMessage = document.querySelector(`.${errorMessageClass}`);
 
  if (errorMessage) {
    errorMessage.remove();
  }

}


function showSuccessMessage() {
  const existingMessage = document.querySelector(`.${successMessageClass}`);
  if (existingMessage) {
    existingMessage.remove();
  }

 
  const successMessage = document.createElement('p');
  successMessage.textContent = '';
  successMessage.classList.add(successMessageClass);
  successMessage.style.color = 'hsl(0, 36%, 70%)'; 
  successMessage.style.marginTop = '0.5rem'; // Espaciado
  emailInput.parentNode.appendChild(successMessage);

  
  setTimeout(() => {
    successMessage.remove();
  }, 3000); 

}


arrowIcon.addEventListener('click', () => {
  const emailValue = emailInput.value.trim(); 
  
  if (validateEmail(emailValue)) {
    
    removeErrorState(); 
    showSuccessMessage(); 
    emailInput.value = ''; 

    
    arrowIconContainer.style.transform = 'translateX(2rem)';
    arrowIconContainer.style.transition = 'transform 0.5s ease';

    setTimeout(() => {
      arrowIconContainer.style.transform = 'translateX(0)';
    }, 1000); 

  } else {
    
    showError(); 

  }

});


emailInput.addEventListener('input', () => {
  
  if (emailInput.classList.contains('error')) {
    removeErrorState();
  }

});






























