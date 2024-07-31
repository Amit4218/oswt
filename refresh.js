<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Auto Refresh Page</title>
  <script>
    // Set the time (in milliseconds) for the page to refresh
    var refreshTime = 5000; // 5000 milliseconds = 5 seconds

    // Function to refresh the page
    function refreshPage() {
      window.location.reload();
    }

    // Set the timeout to call the refreshPage function
    setTimeout(refreshPage, refreshTime);
  </script>
</head>
<body>
  <h1>Auto Refresh Example</h1>
  <p>This page will refresh every 5 seconds.</p>
</body>
</html>
