const btn = document.querySelector("h1");

function click() {
  btn.style.color = "red";
}
function MouseLeave() {
  btn.innerText = "Mouse is leave";
  btn.style.color = "blue";
}
function MouseOn() {
  btn.style.color = "brown";
  btn.innerText = "Mouse is on";
}

btn.addEventListener("click", click);
btn.addEventListener("mouseleave", MouseLeave);
btn.addEventListener("mouseenter", MouseOn);
