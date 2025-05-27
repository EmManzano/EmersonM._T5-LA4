    function signup(e) {
      e.preventDefault();
      const username = document.getElementById("newUsername").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("newPassword").value.trim();

      // Placeholder for future validation or saving logic
      if (username && email && password) {
        // Save or send data here
        alert("Account created successfully!");
        window.location.href = "login.html";
      } else {
        alert("Please fill in all fields.");
      }
    }