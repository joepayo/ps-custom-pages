import yall from "yall-js";

document.addEventListener("DOMContentLoaded", () => {
  yall({
    events: {
      load: function(event) {
        if (
          !event.target.classList.contains("lazy") &&
          event.target.nodeName == "IMG"
        ) {
          event.target.classList.add("fade-in");
        }
      }
    }
  });
});
