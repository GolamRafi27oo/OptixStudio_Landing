const toggleBtn = document.querySelector("#toggleBtn");
const navbar = document.querySelector("#navbar");
let isVisible = false;


//nav toggole start

toggleBtn.addEventListener("click", (event) => {
  event.stopImmediatePropagation();

  // Toggle visibility
  isVisible = !isVisible;
  navbar.classList.toggle("hidden", !isVisible);
  const navBg = document.querySelector("#navBg");
  if (isVisible) {
    navbar.classList.remove("rounded-full");
    navbar.classList.add("rounded-lg");
    navbar.classList.add("mt-5");
    navBg.classList.add("customHiddenNav");
  } else {
    navbar.classList.add("rounded-full");
    navbar.classList.remove("rounded-lg", "mt-5");
    navBg.classList.remove("customHiddenNav");
  }
});

// Hide navbar when clicking outside
document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !toggleBtn.contains(event.target)) {
    // Hide the navbar and reset the styling
    if (isVisible) {  // Only hide if the navbar is visible
      navbar.classList.add("hidden");
      navbar.classList.remove("rounded-lg", "mt-5");
      navbar.classList.add("rounded-full");
      navBg.classList.add("customHiddenNav");
      isVisible = false;
    }
  }
});
//nav toggole end


//nav link auto catching start
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
//nav link auto catching end


const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

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
  } else if (currentScrollY == 0) {
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

// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year to the element with the ID "currentYear"
document.getElementById('currentYear').textContent = currentYear;
