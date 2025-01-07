async function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting immediately
  
    let isValid = true;
  
    // Name validation
    const name = document.getElementById("name");
    const nameValue = name.value.trim();
    if (!/^[a-zA-Z\s]+$/.test(nameValue) || nameValue === "") {
      name.classList.add("is-invalid");
      isValid = false;
    } else {
      name.classList.remove("is-invalid");
    }
  
    // Email validation
    const email = document.getElementById("email");
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue) || emailValue === "") {
      email.classList.add("is-invalid");
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
    }
  
    // Message validation
    const msg = document.getElementById("msg");
    const msgValue = msg.value.trim();
    if (msgValue === "") {
      msg.classList.add("is-invalid");
      isValid = false;
    } else {
      msg.classList.remove("is-invalid");
    }
  
    // If all validations pass
    if (isValid) {
      const url = "https://api.sheetbest.com/sheets/5e4b21a1-9161-4850-934c-3275d19b39e8";
      const formData = {
        name: nameValue,
        email: emailValue,
        message: msgValue,
      };
  
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          alert("Form submitted successfully!");
          // Optionally reset the form after successful submission
          name.value = "";
          email.value = "";
          msg.value = "";
        } else {
          alert("Error submitting form.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form. Please try again.");
      }
    }
  }
  


  const downloadFile = () => {
    const link = document.createElement('a');
    link.download = 'M Sneha.pdf';
    link.href = 'https://drive.google.com/file/d/1Y5fMGM6VJkwRW-yRHHjprBVHFz-FtFgR/view?usp=sharing'; // Direct download link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  



  // Function to update active class based on scroll position or click
  function setActiveLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-a");

    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70; // Offset to account for fixed navbar
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  }

  // Event listener for scroll to update active link
  window.addEventListener("scroll", setActiveLink);

  // Optional: Event listener for clicks to handle smooth scroll
  document.querySelectorAll('.nav-a').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: targetSection.offsetTop - 60, // Adjust for fixed navbar
        behavior: 'smooth',
      });
    });
  });

