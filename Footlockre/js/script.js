// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});




function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var passwordcheck = document.getElementById("passwordcheck").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var dob = new Date(document.getElementById("dob").value);
  var female = document.getElementById("female").checked;
  var male = document.getElementById("male").checked;
  var nationality = document.getElementById("nationality").value;
  var checkbox = document.getElementById("checkbox").checked;

  // Validasi kosong
  if (username == "") {
    alert("Username cannot be empty");
  }

  // Validasi password -> panjangnya minimal 8, harus ada karakter dan angka
  else if (!checkPassword(password)) {
    alert("Password must be at least 8 characters and is alphanumeric");
  }
  // Validasi password check
  else if (passwordcheck != password) {
    alert("Password check must be the same as password");
  }
  // Validasi email -> akhirnya harus @gmail.com
  else if (!email.endsWith("@gmail.com")) {
    alert("Email must end with @gmail.com");
  }
  // Validasi phone -> harus dimulai dari 0
  else if (phone.charAt(0) != 0) {
    alert("Phone number must start with '0'");
  }
  // Validasi tahun -> harus < 2024
  else if (dob.getFullYear() > 2023) {
    alert(dob.getFullYear() + " is an invalid year");
  }
  // Validasi radio button
  else if (!male && !female) {
    alert("Gender cannot be empty");
  }
  // Validasi dropdown
  else if (nationality == "empty") {
    alert("Nationality cannot be empty");
  }
  // Validasi checkbox
  else if (!checkbox) {
    alert("Terms and conditions must be agreed to");
  } else {
    alert("Form submitted successfully");
  }
}

function checkPassword(password) {
  if (password.length < 8) {
    return false;
  }
  // Buat cek apakah udah ada angka
  var isNum = false;
  // Buat cek apakah ada karakter
  var isAlpha = false;
  for (var i = 0; i < password.length; i++) {
    //NaN -> Not a Number
    if (isNaN(password[i])) {
      isAlpha = true;
    } else {
      isNum = true;
    }
  }

  if (isAlpha == true && isNum == true) {
    return true;
  } else {
    return false;
  }
}