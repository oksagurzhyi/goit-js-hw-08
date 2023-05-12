// import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const data = {
  email: '',
  message: '',
};
localStorage.setItem('feedback-form-state', JSON.stringify(data));

form.addEventListener('input', onFormInput);
function onFormInput(evt) {
  console.log(input.evt.target);
  input.evt.target = data.email;
  textarea.evt.target = data.message;
  console.log();
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
}
console.log(123);