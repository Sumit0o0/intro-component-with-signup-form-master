const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAdd = document.getElementById("emailAdd");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const err = document.querySelectorAll("li span");
const label = document.querySelectorAll("li label");
const icon = document.querySelectorAll("li i");

/******************FOUCUS IN*********************/
firstName.addEventListener("focusin", () => {
  label[0].classList.add("hidden");
});

lastName.addEventListener("focusin", () => {
  label[1].classList.add("hidden");
});

emailAdd.addEventListener("focusin", () => {
  label[2].classList.add("hidden");
});

password.addEventListener("focusin", () => {
  label[3].classList.add("hidden");
});

/******************FOUCUS OUT*********************/
firstName.addEventListener("focusout", () => {
  if (firstName.value == "") {
    label[0].classList.remove("hidden");
    return false;
  }
  err[0].classList.remove("errorvisible");
  return true;
});

lastName.addEventListener("focusout", () => {
  if (lastName.value == "") {
    label[1].classList.remove("hidden");
    return false;
  }
  err[1].classList.remove("errorvisible");
  return true;
});
emailAdd.addEventListener("focusout", () => {
  if (emailAdd.value == "") {
    label[2].classList.remove("hidden");
    return false;
  }
  err[2].classList.remove("errorvisible");
  return true;
});
password.addEventListener("focusout", () => {
  if (password.value == "") {
    label[3].classList.remove("hidden");
    return false;
  }
  err[3].classList.remove("errorvisible");
  return true;
});

/******************VAILD FUNCTION*********************/
function validateform() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var passformat = /\w{7,14}$/;

  if (firstName.value == "") {
    err[0].classList.add("errorvisible");
    firstName.classList.add("errborder");
    label[0].classList.add("hidden");
    icon[0].classList.add("errorvisible");
    return false;
  } else {
    firstName.classList.remove("errborder");
    err[0].classList.remove("errorvisible");
    icon[0].classList.remove("errorvisible");
  }

  if (lastName.value == "") {
    err[1].classList.add("errorvisible");
    lastName.classList.add("errborder");
    label[1].classList.add("hidden");
    icon[1].classList.add("errorvisible");
    return false;
  } else {
    err[1].classList.remove("errorvisible");
    lastName.classList.remove("errborder");
    icon[1].classList.remove("errorvisible");
  }

  if (emailAdd.value == "") {
    err[2].classList.add("errorvisible");
    emailAdd.classList.add("errborder");
    err[2].textContent = "email cannot be empty";
    label[2].classList.add("hidden");
    icon[2].classList.add("errorvisible");
    return false;
  } else {
    err[2].classList.remove("errorvisible");
    emailAdd.classList.remove("errborder");
    icon[2].classList.remove("errorvisible");
  }

  if (emailAdd.value.match(mailformat)) {
    // return true;
    emailAdd.classList.remove("errborder");
  } else {
    err[2].classList.add("errorvisible");
    err[2].textContent = "Looks like this is not an email";
    emailAdd.classList.add("errborder");
    label[2].classList.add("hidden");
    icon[2].classList.add("errorvisible");
    return false;
  }

  if (password.value == "") {
    err[3].classList.add("errorvisible");
    err[3].textContent = "Password cannot be empty";
    password.classList.add("errborder");
    label[3].classList.add("hidden");
    icon[3].classList.add("errorvisible");
    return false;
  } else {
    err[3].classList.remove("errorvisible");
    password.classList.remove("errborder");
    icon[3].classList.remove("errorvisible");
  }

  if (password.value.match(passformat)) {
    password.classList.remove("errborder");
  } else {
    err[3].textContent = "Password Should be more than 8 character";
    err[3].classList.add("errorvisible");
    password.classList.add("errborder");
    label[3].classList.add("hidden");
    icon[3].classList.add("errorvisible");
    return false;
  }
  return true;
}
