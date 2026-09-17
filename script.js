const form = document.getElementById('form');
const newsletterSection = document.querySelector('.c-newsletter');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const inputGroup = emailInput.closest('.input-group');
const submitButton = form.querySelector('button[type="submit"]');
const successSection = document.querySelector('.c-success');
const dismissButton = document.getElementById('dismiss-button');

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function setErrorState(isError) {
  if (!inputGroup) return;

  inputGroup.classList.toggle('has-error', isError);
  emailInput.setAttribute('aria-invalid', String(isError));

  if (isError) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }
}

emailInput.addEventListener('input', () => {
  if (emailInput.value.trim() === '') {
    return;
  }

  if (isValidEmail(emailInput.value)) {
    setErrorState(false);
  }
});

emailInput.addEventListener('blur', () => {
  if (emailInput.value.trim() === '') {
    setErrorState(true);
    return;
  }

  if (!isValidEmail(emailInput.value)) {
    setErrorState(true);
    return;
  }

  setErrorState(false);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!isValidEmail(emailInput.value)) {
    setErrorState(true);
    return;
  }

  setErrorState(false);
});

submitButton.addEventListener('click', () => {
  if (!isValidEmail(emailInput.value)) {
    setErrorState(true);
    return;
  }
    setErrorState(false);
    successSection.style.display = 'grid';
    newsletterSection.style.display = 'none';
    document.getElementById('user-email').textContent = emailInput.value;
});

dismissButton.addEventListener('click', () => {
  successSection.style.display = 'none';
  newsletterSection.style.display = '';
  form.reset();
  setErrorState(false);
});