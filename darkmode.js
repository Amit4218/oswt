<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Auto Refresh with Dark/Light Mode</title>
  <style>
    /* Default light mode styles */
    body {
      background-color: white;
      color: black;
      transition: background-color 0.3s, color 0.3s;
    }

    /* Dark mode styles */
    .dark-mode {
      background-color: #333;
      color: white;
    }

    .mode-toggle {
      padding: 10px 20px;
      cursor: pointer;
      margin: 10px;
    }
  </style>
  <script>
    // Refresh the page every 5 seconds (5000 milliseconds)
    setTimeout(function() {
      location.reload();
    }, 5000);

    // Function to toggle between dark and light modes
    function toggleMode() {
      var body = document.body;

      // Toggle the 'dark-mode' class
      body.classList.toggle('dark-mode');
    }
  </script>
</head>
<body>
  <button class="mode-toggle" onclick="toggleMode()">Toggle Mode</button>
  <h1>Welcome!</h1>
  <p>This page will refresh every 5 seconds.</p>
</body>
</html>
