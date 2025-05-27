    function sendMessage() {
      const input = document.getElementById('chatInput');
      const message = input.value.trim();
      if (message) {
        const chatBox = document.getElementById('chatMessages');

        // Simulate user message
        const msgDiv = document.createElement('div');
        msgDiv.className = 'message you';
        msgDiv.textContent = message;
        chatBox.appendChild(msgDiv);

        // Simulate a reply after 1 second
        setTimeout(() => {
          const replyDiv = document.createElement('div');
          replyDiv.className = 'message other';
          replyDiv.textContent = "Echo: " + message;
          chatBox.appendChild(replyDiv);
          chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);

        input.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    }


  document.getElementById('logoutBtn').addEventListener('click', function () {
    // You can also clear user session or localStorage here if needed
    // localStorage.removeItem('username'); // optional
    window.location.href = 'login.html';
  });
