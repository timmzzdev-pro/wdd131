let count = localStorage.getItem("reviewCount");

if (!count) {
    count = 0;
}

count++;
localStorage.setItem("reviewCount", count);

document.getElementById("counter").textContent = count;

// Last Modified
document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;