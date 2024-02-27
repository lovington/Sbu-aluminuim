
// form2.js
function sendMail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;
  const message = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs.send("service_tlnvj1m", "template_aihlnld", {
      from_name: name,
      reply_to: email,
      phone_number: phone,
      location: location,
      message: message
  }).then(function(response) {
      console.log("Email sent successfully:", response);
      alert("Email sent successfully!");
      
  }, function(error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
      
  });
}




  
  
  