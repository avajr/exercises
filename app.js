const firstNameInput = document.querySelector("#first-name");
const firstNameValitation = document.querySelector(".first-name-validation");
const form = document.querySelector("form");
const greeting = document.querySelector("#greeting");
const generateBtn = document.querySelector("#generateBtn");
const numbersContainer = document.querySelector("#numbers");
const counterContainer = document.querySelector("#counter");
const btn1 = document.querySelector("#counter__add-1");
const btn2 = document.querySelector("#counter__add-2");
const btn3 = document.querySelector("#counter__add-3");
const resetBtn = document.querySelector("#counter__reset");

// Exercise number 1
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstName = firstNameInput.value;
  let isValid = firstName.length >= 3;

  firstNameValitation.innerHTML = "";

  if (!isValid) {
    firstNameValitation.style.color = "red";
    firstNameValitation.classList.remove("valid-feedback");
    firstNameValitation.classList.add("invalid-feedback");
    firstNameValitation.innerHTML = "Name must contain more than 3 letters!";
  } else {
    firstNameValitation.style.color = "green";
    firstNameValitation.classList.remove("invalid-feedback");
    firstNameValitation.classList.add("valid-feedback");
    firstNameValitation.innerHTML = `Good!`;
    greeting.innerHTML = `Hello, ${firstName}!`;
  }
});

// Exercise number 2
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let i = 1;

  let intervalID = setInterval(() => {
    if (i % 2 === 0) {
      numbersContainer.innerHTML += `<span class="bg-success p-2 m-2 text-center fw-semibold text-white">${i}</span>`;
    } else {
      numbersContainer.innerHTML += `<span class="bg-warning p-2 m-2 text-center fw-semibold text-white">${i}</span>`;
    }

    i++;

    if (i > 100) {
      console.log(i);
      clearInterval(intervalID);
    }
  }, 50);
});

// Exercise number 3
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  let count = Number(counterContainer.textContent);
  counterContainer.textContent = count + 1;
});
btn2.addEventListener("click", (e) => {
  e.preventDefault();
  let count = Number(counterContainer.textContent);
  counterContainer.textContent = count + 2;
});
btn3.addEventListener("click", (e) => {
  e.preventDefault();
  let count = Number(counterContainer.textContent);
  counterContainer.textContent = count + 3;
});
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  counterContainer.textContent = 0;
});
