let tabs = document.querySelectorAll('.tab');
let tabSections = document.querySelectorAll('.tab-content');
let input = document.querySelector('#emailInput');
let form = document.querySelector('form');
let formGroup = document.querySelector('.form-group');
let menu = document.querySelector('.menu');
let error = document.querySelector('.error');
let pattern = /[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}/;


["click", "keypress"].forEach(eventTrigger => {
  tabs.forEach(tab => {
    tab.addEventListener(eventTrigger, e => {
      if(eventTrigger === "click" || e.keyCode == 13 ) {
        let targetSection = e.target.dataset.target;
        tabSections.forEach((section) => {
          section.classList.remove("active")
        });
        tabs.forEach((tab) => {
          tab.classList.remove("active")
        });
        document.querySelector(targetSection).classList.add("active");
        tab.classList.add("active")
      }
    })
  })
})

form.addEventListener("submit", (e) => {
  if (input.value === '') {
    e.preventDefault();
    formGroup.classList.add("invalid");
    error.textContent = "Please enter a valid email";
  }
  if (input.value !== '' && !pattern.test(input.value)) {
    e.preventDefault();
    formGroup.classList.add("invalid");
    error.textContent = "This doesn't look like an email";
  }
})

function toggleMenu() {
  document.body.classList.toggle('lock-scroll');
  menu.classList.toggle('hidden');
}