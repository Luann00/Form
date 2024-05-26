let submitButton = document.querySelector('.section3 .container button');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  let pass1 = document.getElementById('password').value;
  let confirmPass = document.getElementById('confirmPassword').value;
  let formFields = document.querySelector('.formFields');

  if (pass1 !== confirmPass) {
    let errorText = document.createElement("p");
    errorText.textContent = "Passwords do not match";
    errorText.style.fontSize= "12px";
    errorText.style.color = "red";
    errorText.classList.add('error-message');
    password.appendChild(errorText);
    alert("Passwords do not match");
  } else {
    alert("Passwords match");
  }
});


