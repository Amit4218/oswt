const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Endpoint to handle form submission
app.post("/submit-form", (req, res) => {
  const formData = req.body;
  const loginformData = req.body;
  const filePath = path.join(__dirname, "formData.json", "loginformdata");

  // Read the existing data from the file
  fs.readFile(filePath, "utf8", (err, data) => {
    let existingData = [];

    if (err) {
      if (err.code === "ENOENT") {
        console.log(
          "formData.json does not exist. A new file will be created."
        );
      } else {
        console.error("Error reading file:", err);
        return res.status(500).send("Server error");
      }
    } else {
      try {
        existingData = JSON.parse(data);
      } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr);
        return res.status(500).send("Server error");
      }
    }

    // Append the new form data to the existing data
    existingData.push(formData);
    existingData.push(loginformData);

    // Write the updated data back to the file
    fs.writeFile(
      filePath,
      JSON.stringify(existingData, null, 2),
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing file:", writeErr);
          return res.status(500).send("Server error");
        } else {
          console.log("Form submission successful and data written to file.");
          return res.status(200).send("Form submission successful!");
        }
      }
    );

    fs.writeFile(
      filePath,
      JSON.stringify(existingData, null, 2),
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing file:", writeErr);
          return res.status(500).send("Server error");
        } else {
          console.log("Form submission successful and data written to file.");
          return res.status(200).send("Form submission successful!");
        }
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
