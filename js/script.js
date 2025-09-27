// Welcome message with user input
window.onload = function () {
  let name = prompt("Hi! What is your name?");
  if (name && name.trim() !== "") {
    document.getElementById("welcome-message").innerText = `Hi ${name}, Welcome to Our Website`;
  }
};

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();
  let output = document.getElementById("formOutput");

  // Validation
  if (name === "" || email === "" || phone === "" || message === "") {
    alert("All fields are required!");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }
  if (!/^[0-9]{10,15}$/.test(phone)) {
    alert("Phone number must be 10-15 digits!");
    return;
  }

  // Show result
  output.style.display = "block";
  output.innerHTML = `
    <h3>Form Submitted Successfully 🎉</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  // Reset form
  document.getElementById("contactForm").reset();
});
