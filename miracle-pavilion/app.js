// LOGIN SYSTEM
function grantAccess() {
  const key = document.getElementById("adminKey").value;

  if (key === "timi8464") {
    document.getElementById("panel").classList.remove("hidden");
  } else {
    alert("Access Denied");
  }
}

// SAVE ANNOUNCEMENT
function publishAnnouncement() {
  const message = document.getElementById("announcementInput").value;

  const data = {
    text: message,
    date: new Date().toLocaleDateString()
  };

  localStorage.setItem("churchNotice", JSON.stringify(data));
}

// DISPLAY ANNOUNCEMENT
function loadAnnouncement() {
  const data = JSON.parse(localStorage.getItem("churchNotice"));

  if (data) {
    document.getElementById("announcementDisplay").innerHTML = `
      <h3>${data.text}</h3>
      <small>${data.date}</small>
    `;
  }
}

document.addEventListener("DOMContentLoaded", loadAnnouncement);

// SCROLL FUNCTION
function scrollToSection() {
  window.scrollTo({ top: 500, behavior: "smooth" });
}