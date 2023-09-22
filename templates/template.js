// Add your JavaScript code here


(function() {
    const carousels = document.querySelectorAll(".owl-carousel");
  
    for (let i = 0; i < carousels.length; i++) {
      const carousel = carousels[i];
      let isDragging = false;
      let startPosition = 0;
      let currentTranslate = 0;
      let prevTranslate = 0;
      let animationID = null;
  
      carousel.addEventListener("mousedown", dragStart);
      carousel.addEventListener("touchstart", dragStart);
  
      carousel.addEventListener("mousemove", drag);
      carousel.addEventListener("touchmove", drag);
  
      carousel.addEventListener("mouseup", dragEnd);
      carousel.addEventListener("touchend", dragEnd);
  
      carousel.addEventListener("mouseleave", dragEnd);
      carousel.addEventListener("touchcancel", dragEnd);
  
      function dragStart(e) {
        e.preventDefault();
        startPosition = getPositionX(e);
        isDragging = true;
  
        carousel.style.cursor = "grabbing";
  
        cancelAnimationFrame(animationID);
      }
  
      function getPositionX(e) {
        return e.type.includes("mouse") ? e.pageX : (e.touches[0]?.clientX || 0);
      }
  
      function drag(e) {
        if (isDragging) {
          const currentPosition = getPositionX(e);
          currentTranslate = prevTranslate + currentPosition - startPosition;
        }
      }
  
      function dragEnd() {
        isDragging = false;
  
        carousel.style.cursor = "grab";
  
        prevTranslate = currentTranslate;
  
        requestAnimationFrame(setCarouselPosition);
      }
  
      function setCarouselPosition() {
        carousel.style.transform = `translateX(${currentTranslate}px)`;
      }
    }
  })();
  