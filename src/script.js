const navbar = document.getElementById('navbar');
const toggleBtn = document.getElementById('toggleBtn');
let isVisible = true;

toggleBtn.addEventListener('click', () => {
  isVisible = !isVisible;
  navbar.classList.toggle('hidden', isVisible);

  if(isVisible == false){
    navbar.classList.remove('rounded-full');
    navbar.classList.add('rounded-lg');
    navbar.classList.add('mt-5');
  }
  //toggleBtn.textContent = isVisible ? 'Hide Navbar' : 'Show Navbar';
});

const scrollContainer = document.getElementById('scroll-container');
const scrollContainerTwo = document.getElementById('scroll-containerTwo');

function startAutoScroll() {
    let scrollAmount = 0;
    let scrollAmountTwo = 0;
    const speed = 2; // Adjust this value to control the scroll speed
    const speedTwo = 2;
    function scrollStep() {
        scrollContainer.scrollLeft += speed;
        scrollContainerTwo.scrollLeft += speedTwo;
        scrollAmount += speed;
        scrollAmountTwo +=speedTwo;

        // Reset scroll position when reaching the end
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth && scrollAmount >= scrollContainerTwo.scrollWidth - scrollContainerTwo.clientWidth) {
            scrollContainer.scrollLeft = 0;
            scrollContainerTwo.scrollLeft = 0;
            scrollAmount = 0;
            scrollAmountTwo = 0;
        }
        requestAnimationFrame(scrollStep);
    }

    requestAnimationFrame(scrollStep);
}



// Start auto-scrolling when the page loads
window.addEventListener('load', startAutoScroll);

    // Trigger the animation on window load
window.addEventListener('load', () => {
    const textElement = document.getElementById('animated-text');
        // Add transition class to slide it into view
    textElement.classList.add('translate-x-20', 'opacity-100');
});


const image = document.getElementById('image');
let hasSlidIn = false; // Track if the image is already slid in

// Listen to the wheel event
window.addEventListener('wheel', (event) => {
  if (event.deltaY > 0 && !hasSlidIn) {
    // Slide in the image when scrolling down
    image.classList.remove('hidden-slide');
    image.classList.add('slide-right');
    hasSlidIn = true;
  } else if (event.deltaY < 0 && hasSlidIn) {
    // Slide out the image when scrolling up
    image.classList.remove('slide-right');
    image.classList.add('hidden-slide');
    hasSlidIn = false;
  }
});