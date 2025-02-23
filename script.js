document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const hero = document.querySelector(".hero");
  
    // Calculate the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
    // Calculate the mouse position relative to the center
    const offsetX = (clientX - centerX) / centerX;
    const offsetY = (clientY - centerY) / centerY;
  
    // Apply parallax effect to the background
    gsap.to(".hero-background", {
      x: offsetX * 20,
      y: offsetY * 20,
      duration: 1,
      ease: "power2.out",
    });
  
    // Apply subtle movement to the content
    gsap.to(".hero-content", {
      x: offsetX * 10,
      y: offsetY * 10,
      duration: 1,
      ease: "power2.out",
    });
  });