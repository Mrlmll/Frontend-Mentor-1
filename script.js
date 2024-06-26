const emailTextEl = document.querySelector('.email-p-color');
const emailInputEl = document.querySelector('.js-email-input');
const signInEl = document.querySelector('.js-container');
const successEl = document.querySelector('.js-container-success')



function checkValidEmail(){
  const input = document.querySelector('.js-email-input').value;
  if (input.includes('@') && input.includes('.')) {
    ifEmailCorrect();
  } else {
    ifEmailFalse();
  }
}

function ifEmailCorrect () {
  emailTextEl.classList.add("email-p-error");
  emailInputEl.classList.remove("email-input-error");
  emailInputEl.classList.add("email-input");
  signInEl.classList.add('container-hidden');
  signInEl.classList.remove('container');
  successEl.classList.add('container-success')
  successEl.classList.remove('container-success-hidden')

};
function ifEmailFalse () {
  emailTextEl.classList.remove("email-p-error");
  emailInputEl.classList.add("email-input-error");
  emailInputEl.classList.remove("email-input");
};

const button = document.querySelector('.button');
button.addEventListener('click', () => {
  checkValidEmail();
})
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter')  {
    checkValidEmail();
  }
})
