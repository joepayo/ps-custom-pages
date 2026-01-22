import "./images";

// Check the URL for a hash.
if (window.location.hash && document.querySelector(window.location.hash)) {
  // Open the detail.
  document.querySelector(window.location.hash).classList.add("open");
}

// Handle smart hash for accordion linking,
const allFaqs = Array.prototype.slice.call(document.querySelectorAll(".faq"));
allFaqs.forEach((element) => {
  element.querySelector(".question").addEventListener("click", (event) => {
    element.classList.toggle("open");
    let id = element.getAttribute("id");
    if (id && element.getAttribute("open") == null) {
      window.history.pushState({}, "", "#" + id);
    }
    else {
      window.history.pushState({}, '', window.location.origin + window.location.pathname);
    }
  });
});

// Accordion the box details.
const allToggles = Array.prototype.slice.call(document.querySelectorAll(".toggle"));
allToggles.forEach((element) => {
  element.addEventListener("click", (event) => {
    element.parentNode.classList.toggle("open");
    // Toggle the button.
    let children = Array.prototype.slice.call(element.parentElement.querySelectorAll(".toggle"));
    children.forEach((child) => {
      child.classList.toggle("hidden");
    });
  });
});
