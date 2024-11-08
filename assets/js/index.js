let formEl = document.getElementById("formId");
let buttonEl = document.getElementById("buttonId");
let usernameEl = document.getElementById("userNameId");
let passwordEl = document.getElementById("passwordId");
let usernameText = document.getElementById("usernameTextId");
let passwordText = document.getElementById("passwordTextId");
let anchorEl = document.getElementById("anchorId");

let charArray = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "=",
  "-",
  "[",
  "]",
  "{",
  "}",
  "<",
  ">",
  "?",
  "/",
  "|",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
];

let resultObj = {
  usernameResult: "",
  passwordResult: "",
};

/* buttonEl.onclick = () => {
  if (usernameEl.value === "") {
    usernameText.textContent = "Required*";
  }
  if (passwordEl.value === "") {
    passwordText.textContent = "Required*";
  }
};*/

/*buttonEl.addEventListener("click", () => {
  if (usernameEl.value === "") {
    usernameText.textContent = "Required*";
  }
  if (passwordEl.value === "") {
    passwordText.textContent = "Required*";
  }
});*/

function checkingResult() {
  let { usernameResult, passwordResult } = resultObj;

  if (usernameEl.value === "") {
    usernameText.textContent = "Required*";
  }

  if (passwordEl.value === "") {
    passwordText.textContent = "Required*";
  }

  if (usernameResult && passwordResult) {
    anchorEl.href = "form2.html";
    usernameEl.value = "";
  }
}

usernameEl.addEventListener("blur", (event) => {
  if (event.target.value === "") {
    usernameText.textContent = "Required*";
  } else {
    usernameText.textContent = "";
  }
  let result_1 = charArray.includes(event.target.value[0]);
  resultObj.usernameResult = result_1;
  // checkingResult();
});

passwordEl.addEventListener("blur", (event) => {
  if (event.target.value === "") {
    passwordText.textContent = "Required*";
  } else {
    passwordText.textContent = "";
  }
  let result_2 = charArray.includes(event.target.value[0]);
  resultObj.passwordResult = result_2;
  // checkingResult();
});

buttonEl.addEventListener("click", checkingResult);
