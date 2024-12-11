const images = [
    "i1.jpg",
    "i2.jpg",
    "i3.avif",
    "i4.jpg",
    "i5.jpg",
  ];
  
  let currentIndex = 0;
  const sliderImage = document.getElementById("slider-image");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  
  // Display the first image when the page loads
  sliderImage.src = images[currentIndex];
  
  // Navigate to the previous image
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });
  
  // Navigate to the next image
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });
  
  // Update the image in the slider
  function updateSlider() {
    sliderImage.src = images[currentIndex];
  }
  
  // Automatic Slideshow
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  }, 3000);
  