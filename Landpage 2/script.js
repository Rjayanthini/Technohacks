// Add an event listener to trigger the animation when the section is scrolled into view
const animatedList = document.querySelectorAll('.animated-list li');

function checkSlide() {
  animatedList.forEach((item) => {
    const slideInAt = (window.scrollY + window.innerHeight) - item.clientHeight / 2;
    const itemBottom = item.offsetTop + item.clientHeight;

    const isHalfShown = slideInAt > item.offsetTop;
    const isNotScrolledPast = window.scrollY < itemBottom;

    if (isHalfShown && isNotScrolledPast) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkSlide);

// Trigger the initial check when the page loads
window.addEventListener('DOMContentLoaded', checkSlide);
