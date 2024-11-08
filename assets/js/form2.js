let nameEl = document.getElementById("nameId");
let nameErrorText = document.getElementById("nameTextId");

let employeeIdEl = document.getElementById("employeeId");
let employeeErrorText = document.getElementById("employeeTextId");

let dateIdEl = document.getElementById("dateId");
let dateErrorText = document.getElementById("dateTextId");

let maleIdEl = document.getElementById("maleId");
let genderErrorText = document.getElementById("genderTextId");
let femaleIdEl = document.getElementById("femaleId");

let computer1El = document.getElementById("computer1");
let computerErrorText = document.getElementById("computerTextId");
let computer2El = document.getElementById("computer2");

let hyderabad1El = document.getElementById("hyderabad1");
let locationErrorText = document.getElementById("locationTextId");
let hyderabad2El = document.getElementById("hyderabad2");

let rangeEl = document.getElementById("range");
let rangeErrorText = document.getElementById("rangeTextId");

let workEl = document.getElementById("work");
let workErrorText = document.getElementById("workTextId");

let keyNumText = document.getElementById("keyNum");

let anchorEl2 = document.getElementById("anchorId2");
let buttonEl2 = document.getElementById("buttonId2");

let personDetails = {
  name: "",
  employeeId: "",
  joiningDate: "",
  gender: "",
  computer: "",
  location: "",
  range: "",
  work: "",
};

let errorTextArray = [
  nameErrorText,
  employeeErrorText,
  dateErrorText,
  genderErrorText,
  computerErrorText,
  locationErrorText,
  rangeErrorText,
  workErrorText,
];

function checkingResult2() {
  let counter = 0;
  for (let x in personDetails) {
    if (personDetails[x] === "") {
      errorTextArray[counter].textContent = "Required*";
      counter = counter + 1;
    }
  }
  if (counter === 0) {
    anchorEl2.href = "response.html";
  }
}

let keyNumArray = [];

function itemsInArray() {
  keyNumArray.splice(0, keyNumArray.length);
  for (let x in personDetails) {
    if (personDetails[x] !== "") {
      keyNumArray.push(x);
    }
  }
  keyNumText.textContent = keyNumArray.length;
  console.log(keyNumText);
}

employeeIdEl.addEventListener("blur", (event) => {
  if (event.target.value === "") {
    employeeErrorText.textContent = "Required*";
  } else {
    employeeErrorText.textContent = "";
  }

  personDetails.employeeId = event.target.value;
  itemsInArray();
  console.log(keyNumArray);
});

nameEl.addEventListener("blur", (event) => {
  if (event.target.value === "") {
    nameErrorText.textContent = "Required*";
  } else {
    nameErrorText.textContent = "";
  }

  personDetails.name = event.target.value;
  itemsInArray();
  console.log(keyNumArray);
});

dateIdEl.addEventListener("blur", (event) => {
  if (event.target.value === "") {
    dateErrorText.textContent = "Required*";
  } else {
    dateErrorText.textContent = "";
  }

  personDetails.joiningDate = event.target.value;
  itemsInArray();
  console.log(keyNumArray);
});

maleIdEl.addEventListener("change", (event) => {
  personDetails.gender = event.target.value;
  itemsInArray();
  console.log(keyNumArray);
  console.log(event.target.value);
});

femaleIdEl.addEventListener("change", (event) => {
  personDetails.gender = event.target.value;
  itemsInArray();
  console.log(keyNumArray);
  console.log(event.target.value);
});

computer1El.addEventListener("change", (event) => {
  personDetails.computer = event.target.value;
  itemsInArray();
  console.log(keyNumArray);
  console.log(event.target.value);
});

computer2El.addEventListener("change", (event) => {
  personDetails.computer = event.target.value;
  itemsInArray();
  console.log(keyNumArray);
  console.log(event.target.value);
});

hyderabad1El.addEventListener("change", (event) => {
  personDetails.location = event.target.value;
  itemsInArray();
  console.log(keyNumArray);
  console.log(event.target.value);
});

hyderabad2El.addEventListener("change", (event) => {
  personDetails.location = event.target.value;
  itemsInArray();
  console.log(keyNumArray);
  console.log(event.target.value);
});

rangeEl.addEventListener("change", (event) => {
  personDetails.range = event.target.value;
  itemsInArray();
  console.log(keyNumArray);
  console.log(event.target.value);
});

workEl.addEventListener("change", (event) => {
  personDetails.work = event.target.value;
  itemsInArray();
  console.log(keyNumArray);
  console.log(event.target.value);
});

buttonEl2.addEventListener("click", checkingResult2);
