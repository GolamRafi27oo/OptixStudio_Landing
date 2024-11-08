const navbar = document.getElementById("navbar");
const toggleBtn = document.getElementById("toggleBtn");
let isVisible = true;

toggleBtn.addEventListener("click", () => {
  isVisible = !isVisible;
  navbar.classList.toggle("hidden", isVisible);

  if (isVisible == false) {
    navbar.classList.remove("rounded-full");
    navbar.classList.add("rounded-lg");
    navbar.classList.add("mt-5");
    navBg.classList.add("customHiddenNav");
  } else{
    navBg.classList.remove("customHiddenNav");
  }
  //toggleBtn.textContent = isVisible ? 'Hide Navbar' : 'Show Navbar';
});



// Function to handle smooth scroll when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default anchor click behavior

      // Scroll to the target section
      const targetId = this.getAttribute('href').substring(1); // Get section ID from href
      const targetSection = document.getElementById(targetId);
      
      // Use scrollIntoView with smooth scrolling
      targetSection.scrollIntoView({
          behavior: 'smooth', // Smooth scroll
          block: 'start' // Scroll to the top of the section
      });
  });
});

// Function to handle setting the active link based on the current section in view
function setActiveNavLink() {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  let currentSection = null;

  // Loop through each section to find the one that's currently in view
  sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) { // The section is in the viewport
          currentSection = section.id;
      }
  });

  // Remove 'active' class from all links
  links.forEach(link => link.classList.remove('active'));

  // Add the 'active' class to the link corresponding to the current section
  if (currentSection) {
      const activeLink = document.querySelector(`a[href="#${currentSection}"]`);
      if (activeLink) {
          activeLink.classList.add('active');
      }
  }
}

// Run the functions on page load
window.addEventListener('load', setActiveNavLink); // Activate link on page load

// Run the function when the user scrolls
window.addEventListener('scroll', setActiveNavLink); // Update active link while scrolling




const scrollContainer = document.getElementById("scroll-container");
const scrollContainerTwo = document.getElementById("scroll-containerTwo");

function startAutoScroll() {
  let scrollAmount = 0;
  let scrollAmountTwo = 0;
  const speed = 2; // Adjust this value to control the scroll speed
  const speedTwo = 2;
  function scrollStep() {
    scrollContainer.scrollLeft += speed;
    scrollContainerTwo.scrollLeft += speedTwo;
    scrollAmount += speed;
    scrollAmountTwo += speedTwo;

    // Reset scroll position when reaching the end
    if (
      scrollAmount >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth &&
      scrollAmount >=
        scrollContainerTwo.scrollWidth - scrollContainerTwo.clientWidth
    ) {
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
window.addEventListener("load", startAutoScroll);

// Trigger the animation on window load
window.addEventListener("load", () => {
  const textElement = document.getElementById("animated-text");
  // Add transition class to slide it into view
  textElement.classList.add("translate-x-20", "opacity-100");
});

const image = document.getElementById("image");
//let hasSlidIn = false; // Track if the image is already slid in

let lastScrollY = window.scrollY;
let hasSlidIn = false;
let navBg = document.getElementById("navBg");
window.addEventListener("scroll", () => {
  let currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && !hasSlidIn) {
    // Slide in the image when scrolling down
    image.classList.remove("hidden-slide");
    image.classList.add("slide-right");
    navBg.classList.add("navAnimation");
    hasSlidIn = true;
  } else if (currentScrollY == 0 || currentScrollY < lastScrollY) {
    // Slide out the image when scrolling up
    image.classList.remove("slide-right");
    //image.classList.add("hidden-slide");
    navBg.classList.remove("navAnimation");
    hasSlidIn = false;
  }else{
    navBg.classList.add("navAnimation");
  }

  lastScrollY = currentScrollY;
});

document.querySelectorAll(".option").forEach((label) => {
  label.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent checkbox default behavior
    label.classList.toggle("bg-[#5540E3]"); // Toggle red background color
    label.classList.toggle("text-white"); // Optional: toggle text color to white for readability
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".cusAnime");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
});

function selectOnlyOne(checkbox) {
  // Get all checkboxes within the `cusAnime` class container
  const checkboxes = document.querySelectorAll(
    '.cusAnime input[type="checkbox"]'
  );

  // Uncheck all checkboxes
  checkboxes.forEach((cb) => (cb.checked = false));

  // Check the current checkbox
  checkbox.checked = true;
}

// Function to show the image on hover
const hoverListItems = document.querySelectorAll(".hover-li");

hoverListItems.forEach((item) => {
  const image = item.querySelector(".hover-image");

  item.addEventListener("mouseenter", () => {
    // Hide all images
    document
      .querySelectorAll(".hover-image")
      .forEach((img) => (img.style.display = "none"));

    // Show the image of the hovered item
    image.style.display = "inline-block";
  });

  item.addEventListener("mouseleave", () => {
    // Hide the image when mouse leaves
    image.style.display = "none";
  });
});
