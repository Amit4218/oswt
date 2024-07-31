function validateForm(event) {
  event.preventDefault(); // Prevent the default form submission

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let contactNo = document.getElementById("contact-no").value;
  let comment = document.getElementById("comment").value;

  if (!name || !email || !address || !contactNo || !comment) {
    alert("All fields must be filled out");
    return false;
  }

  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (isNaN(contactNo) || contactNo.length < 5) {
    alert("Please enter a valid contact number with at least 5 digits");
    return false;
  }

  // Prepare form data as JSON
  const formData = {
    name: name,
    email: email,
    address: address,
    contactNo: contactNo,
    comment: comment,
  };

  // Submit form data using fetch
  fetch("/submit-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.text())
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error submitting the form");
    });

  return false; // Prevent default form submission
}

document.getElementById("contactForm").addEventListener("submit", validateForm);
