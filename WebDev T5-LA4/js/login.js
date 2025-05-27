   function login(e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // Example static login logic
      if (username === "emer" && password === "123456") {
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid username or password!");
      }
    }