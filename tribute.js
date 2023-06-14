document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  const imageContainer = document.querySelector(".image-container");
  
  window.addEventListener("scroll", () => {
    if (isElementInViewport(imageContainer)) {
      imageContainer.classList.add("active");
    }
  });
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }   
  
  
  const slides = document.querySelectorAll("#quotes .slide");
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }
  
  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }
  
  function startSlideshow() {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust the timing as desired)
  }
  
  startSlideshow();
  
  const scrollToTopButton = document.getElementById("scrollToTopButton");
  
  // Show or hide the button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
  
  // Scroll to top when the button is clicked
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });