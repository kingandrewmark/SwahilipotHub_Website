export const nextUtility = {
  stickyNav() {
    const header = document.getElementById("header-sticky");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        header?.classList.add("sticky"); // Use optional chaining to avoid errors
      } else {
        header?.classList.remove("sticky");
      }
    });
  },

  scrollAnimation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },

  preloader() {
    console.log("Preloader function is running...");
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = "none"; // Hide preloader after loading
      }, 2000); // Adjust timing as needed
    }
  }
};
