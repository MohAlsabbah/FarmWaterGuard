// Only run this if 'everywhere' button exists
const everywhereBtn = document.getElementById("everywhere");
if (everywhereBtn) {
  everywhereBtn.onclick = function () {
    window.location.href = "location.html";
  };
}

// Only run this if 'submitBtn' exists
const submitBtn = document.getElementById("submitBtn");
if (submitBtn) {
  submitBtn.onclick = function () {
    window.location.href = "main.html";
  };
}

const toMapBtn = document.getElementById("toMapBtn");
if (toMapBtn) {
  toMapBtn.onclick = function () {
    window.location.href = "map.html";
  };
}


const toLocationBtn = document.getElementById("toLocationBtn");
if (toLocationBtn) {
    toLocationBtn.onclick = function () {
    window.location.href = "location.html";
  };
}

// toggle on off imgs
const toggleImg = document.querySelector('.notification-toggle img');
let isOn = false;

toggleImg.onclick = function () {
  isOn = !isOn;
  toggleImg.src = isOn ? './img/on.png' : './img/off.png';
};
