function validateJoinForm() {
    const email = document.getElementById("studentEmail").value;
    const number = document.getElementById("studentNumber").value;
    const name = document.getElementById("studentName").value;
    const course = document.getElementById("course").value;
  
    if (!email.includes("@student.edu")) {
      alert("Please enter a valid student email.");
      return false;
    }
  
    if (number.length < 6) {
      alert("Student number must be at least 6 characters.");
      return false;
    }
  
    if (name === "" || course === "") {
      alert("Please fill out all fields.");
      return false;
    }
  
    alert("Thank you for joining Coders Guild!");
    return true;
  }
  

//BKG CAROSEL OF THE MAIN TRAVEL 
document.addEventListener('DOMContentLoaded', function () {
  let slides = document.querySelectorAll('.slides.fade');
  let slide_index = 0;

  function show_slides() {
      slides.forEach(function(slide) {
          slide.classList.remove('active');
      });

      slide_index++;
      if (slide_index >= slides.length) {
          slide_index = 0;
      }

      slides[slide_index].classList.add('active');
  }
  show_slides();
  setInterval(show_slides, 5000); 
});  