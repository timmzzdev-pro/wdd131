// LOGIN
function login() {
  const password = document.getElementById("password").value;

  if (password === "admin123") {
    document.getElementById("adminPanel").style.display = "block";
  } else {
    alert("Wrong password");
  }
}

// SAVE ANNOUNCEMENT
function saveAnnouncement() {
  const message = document.getElementById("announcementInput").value;

  localStorage.setItem("announcement", message);
  alert("Saved!");
}

// DISPLAY ANNOUNCEMENT
function displayAnnouncement() {
  const msg = localStorage.getItem("announcement");

  if (msg) {
    document.getElementById("announcementBox").innerHTML = `
      <p>${msg}</p>
    `;
  }
}

document.addEventListener("DOMContentLoaded", displayAnnouncement);