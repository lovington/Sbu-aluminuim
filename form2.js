function sendMail() {
    let Name=document.getElementById("name").value;
    let Email=document.getElementById("email").value;
    let Message=document.getElementById("message").value;

    let Phone=document.getElementById("phone").value;
    let Location=document.getElementById("location").value;
  
    


    
    var emailError = document.getElementById("email-error");
  
    var params = {
      name: Name,
      email: Email,
      message: Message,
      phone: Phone,
      location: Location
    };
  if (Name==""||Email==""||Message==""||Phone==""||Location=="") {
  
   
  
      
  }
  
  else{
  
    const serviceID ="service_ljk8w2k";
    const templateID = "template_j6qlgyx";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          
          document.getElementById("phone").value = "";
          document.getElementById("location").value = "";

          alert("sucessfully sent")
          console.log(res);
          Swal.fire({
            icon: 'success',
            title: 'Thank you!',
            text: 'Your enquiry or suggestion will be reviewed!',
           
          })
  
      })
      .catch(err=>console.log(err));
    }
  
  
  
    if(!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      emailError.innerHTML = "Please enter a valid email";
      return false;
      
    }
    emailError.innerHTML = "";
    return true;
  
  }
  
// form2.js
// function sendMail() {
//   emailjs.send("service_ljk8w2k", "template_j6qlgyx", {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       phone: document.getElementById("phone").value,
//       location: document.getElementById("location").value, // Capture the selected location
//       message: document.getElementById("message").value
//   })
//   .then(function(response) {
//       console.log("Sent successfully: " + response.text);
//       alert("Email sent successfully!"); // Show an alert on success
//   }, function(error) {
//       console.log("Failed to send email: " + error.text);
//       alert("Failed to send email. Please try again."); // Show an alert on failure
//   });
// }




  
  
  