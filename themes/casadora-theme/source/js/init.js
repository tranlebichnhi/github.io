(function () {
   const menuIcon = document.querySelector(".header-menu");
   const iconClosesidebar = document.querySelector(".sidebar-close");
   const sidebar = document.querySelector(".sidebar");
   const menuOverplay = document.querySelector(".menu-overlay");
   menuIcon.addEventListener("click", () => {
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
