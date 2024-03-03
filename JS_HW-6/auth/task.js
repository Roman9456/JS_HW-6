const signinForm = document.getElementById('signin__form');
const welcomeBlock = document.getElementById('welcome');
const user_id = document.getElementById('user_id');

signinForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const loginInput = document.getElementsByName('login')[0];
  const passwordInput = document.getElementsByName('password')[0];
  const login = loginInput.value;
  const password = passwordInput.value;
  const formData = { login, password };

  fetch('https://students.netoservices.ru/nestjs-backend/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem('user_id', data.user_id);

        welcomeBlock.classList.add('welcome_active');
        user_id.textContent = data.user_id;

        signinForm.reset();
      } else {
        alert('Неверный логин/пароль');

        signinForm.reset();
      }
    })
    .catch(error => {
      alert('Произошла ошибка при отправке запроса');
      console.log(error);
    });
});

window.addEventListener('load', function() {
  const savedUserId = localStorage.getItem('user_id');
  if (savedUserId) {
    welcomeBlock.classList.add('welcome_active');
    user_id.textContent = savedUserId;
  }
});

const signoutBtn = document.getElementById('signout__btn');

signoutBtn.addEventListener('click', function() {
  welcomeBlock.classList.remove('welcome_active');

  localStorage.removeItem('user_id');

  signinForm.reset();
});
