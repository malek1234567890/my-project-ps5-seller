const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
  
    console.log("Nom:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    
    contactForm.reset();
});

const btn = document.getElementById("btn")

btn.addEventListener("click" , function() {
    window.location.href = "reservation.html";
});





