const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "userName";
const savedUserName = localStorage.getItem(USERNAME_KEY);

function LoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreeting();
}

function paintGreeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove("hidden");
}

if (savedUserName === null) {
  loginForm.classList.remove("hidden");
} else {
  paintGreeting();
}
loginForm.addEventListener("submit", LoginSubmit);
