document.addEventListener("DOMContentLoaded", function() {
  const starsContainers = document.querySelectorAll(".stars");

  starsContainers.forEach((starsContainer) => {
    const stars = starsContainer.querySelectorAll("i");

    stars.forEach((star) => {
      star.addEventListener("click", function() {
        rateStar(this, starsContainer);
      });

      star.addEventListener("mouseover", function() {
        hoverStar(this, stars);
      });

      star.addEventListener("mouseout", function() {
        resetStars(stars);
      });
    });
  });

  function rateStar(clickedStar, starsContainer) {
    const value = clickedStar.getAttribute("data-value");
    alert(`You rated ${starsContainer.id} ${value} stars`);
  }

  function hoverStar(hoveredStar, stars) {
    const value = hoveredStar.getAttribute("data-value");
    resetStars(stars);

    for (let i = 0; i < value; i++) {
      stars[i].classList.add("fas");
      stars[i].classList.remove("far");
    }
  }

  function resetStars(stars) {
    stars.forEach((star) => {
      star.classList.remove("fas");
      star.classList.add("far");
    });
  }
});


function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
   section.scrollIntoView({ behavior: 'smooth' });
  }
 }
