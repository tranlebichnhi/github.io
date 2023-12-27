(function () {
   document.addEventListener("DOMContentLoaded", function () {
      var slideDonwElements = document.querySelectorAll(".go-down");
      var slideUpElements = document.querySelectorAll(".go-up");
      var slideRightElements = document.querySelectorAll(".go-right");
      var slideLeftElements = document.querySelectorAll(".go-left");
      var slideFadeElements = document.querySelectorAll(".fade");
      var windowHeight = window.innerHeight;
      function handleAnimationRun(block, type) {
         var blockOffset = block.offsetTop;
         var scrollPosition = window.scrollY;
         var elementPosition = blockOffset - scrollPosition;

         // Thực hiện animation khi phần tử nằm trong viewport
         if (elementPosition < windowHeight) {
            block.style.opacity = "1";
            type === "right" || type === "left"
               ? (block.style.transform = "translateX(0)")
               : type !== "fade"
               ? (block.style.transform = "translateY(0)")
               : null;
         } else {
            block.style.opacity = "0.5";
            type === "down"
               ? (block.style.transform = "translateY(-100%)")
               : type === "up"
               ? (block.style.transform = "translateY(200px)")
               : type === "right"
               ? (block.style.transform = "translateX(-300px)")
               : null;
         }
      }
      function handleAnimation() {
         slideDonwElements.forEach((item) => handleAnimationRun(item, "down"));
         slideUpElements.forEach((item) => handleAnimationRun(item, "up"));
         slideRightElements.forEach((item) =>
            handleAnimationRun(item, "right")
         );
         slideLeftElements.forEach((item) => handleAnimationRun(item, "left"));
         slideFadeElements.forEach((item) => handleAnimationRun(item, "fade"));
      }

      window.addEventListener("scroll", handleAnimation);
      window.addEventListener("resize", function () {
         windowHeight = window.innerHeight;
         handleAnimation();
      });

      // Kích hoạt animation khi trang tải lần đầu tiên
      handleAnimation();
   });

   const menuIcon = document.querySelector(".header-menu");
   const iconClosesidebar = document.querySelector(".sidebar-close");
   const sidebar = document.querySelector(".sidebar");
   const sidebarItems = document.querySelectorAll(".sidebar-item a");
   const menuOverplay = document.querySelector(".menu-overlay");

   sidebarItems.forEach(function (item) {
      console.log(location.pathname);
      if (item.getAttribute("href") === location.pathname)
         item.parentNode.classList.add("is-active");
   });

   menuIcon.addEventListener("click", (e) => {
      sidebar.classList.add("is-show");
      menuOverplay.classList.add("is-show");
      document.body.classList.add("is-disabled");
   });
   iconClosesidebar.addEventListener("click", handleClosedSidebar);
   menuOverplay.addEventListener("click", handleClosedSidebar);
   function handleClosedSidebar() {
      sidebar.classList.remove("is-show");
      menuOverplay.classList.remove("is-show");
      document.body.classList.remove("is-disabled");
   }
})();
