const menuBtn = document.getElementById("menuBtn");
      const closeBtn = document.getElementById("closeBtn");
      const mobileMenu = document.getElementById("mobileMenu");
      const overlay = document.getElementById("overlay");

      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("translate-x-full");
        overlay.classList.remove("opacity-0", "invisible");
      });

      function closeMenu() {
        mobileMenu.classList.add("translate-x-full");
        overlay.classList.add("opacity-0", "invisible");
      }

      closeBtn.addEventListener("click", closeMenu);
      overlay.addEventListener("click", closeMenu);
      
      const menuBtn = document.getElementById("menuBtn");
      const closeBtn = document.getElementById("closeBtn");
      const mobileMenu = document.getElementById("mobileMenu");
      const overlay = document.getElementById("overlay");

      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("translate-x-full");
        overlay.classList.remove("opacity-0", "invisible");
      });

      function closeMenu() {
        mobileMenu.classList.add("translate-x-full");
        overlay.classList.add("opacity-0", "invisible");
      }

      closeBtn.addEventListener("click", closeMenu);
      overlay.addEventListener("click", closeMenu);