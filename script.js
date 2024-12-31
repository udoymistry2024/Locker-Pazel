let correctPassword = "87654321";
let enteredPassword = "";
let attemptCount = 0;

function enterKey(key) {
  if (attemptCount >= 3) {
    document.getElementById("message").innerText = "লকার ব্লক হয়েছে!";
    return;
  }
  enteredPassword += key;
  document.getElementById("passwordInput").value = enteredPassword;

  if (enteredPassword.length === 8) {
    checkPassword();
  }
}

function checkPassword() {
  if (enteredPassword === correctPassword) {
    document.getElementById("message").innerText = "লকারটি ওপেন হয়েছে! কনগ্রাচুলেশনস!";
    enteredPassword = "";
  } else {
    attemptCount++;
    if (attemptCount < 3) {
      document.getElementById("message").innerText = `ভুল পাসওয়ার্ড! ${3 - attemptCount} attempts বাকি আছে।`;
    } else {
      document.getElementById("message").innerText = "লকার ব্লক হয়েছে!";
    }
    enteredPassword = "";
    document.getElementById("passwordInput").value = "";
  }
}

function backspace() {
  enteredPassword = enteredPassword.slice(0, -1);
  document.getElementById("passwordInput").value = enteredPassword;
}

function clearInput() {
  enteredPassword = "";
  document.getElementById("passwordInput").value = "";
  document.getElementById("message").innerText = "";
}

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownMenu");
  if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
}