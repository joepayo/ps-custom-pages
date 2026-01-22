import "./images";

// Check the URL for a hash.
if (window.location.hash && document.querySelector(window.location.hash)) {
  // Open the detail.
  document.querySelector(window.location.hash).classList.add("open");
}

// Handling inline links to FAQs.
const allAnchors = document.querySelectorAll("a");
allAnchors.forEach((element) => {
  if (element.href) {
    element.addEventListener("click", (event) => {
      let scrollElement = document.querySelector("#" + event.target.href.split('#')[1]);
      scrollElement.classList.toggle("open");
      let id = scrollElement.getAttribute("id");
      if (id && scrollElement.getAttribute("open") == null) {
        window.history.pushState({}, "", "#" + id);
      }
      else {
        window.history.pushState({}, '', window.location.origin + window.location.pathname);
      }
    });
  }
});

// Handle smart hash for accordion linking,
const allFaqs = document.querySelectorAll(".faq");
allFaqs.forEach((element) => {
  element.addEventListener("click", (event) => {
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
const allToggles = document.querySelectorAll(".toggle");
allToggles.forEach((element) => {
  element.addEventListener("click", (event) => {
    element.parentNode.classList.toggle("open");
    // Toggle the button.
    element.parentElement.querySelectorAll(".toggle").forEach((child) => {
      child.classList.toggle("hidden");
    });
  });
});
