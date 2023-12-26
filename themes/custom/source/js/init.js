(function () {
   // emailjs.init("MxVfwZgSgfZUFCLOR");

   // document.addEventListener("DOMContentLoaded", function () {
   // var goDownElements = document.querySelectorAll(".go-down");
   // goDownElements.forEach((item) => {
   //    item.style.opacity = "1";
   //    item.style.transform = "translateY(0)";
   // });
   // var goUpElements = document.querySelectorAll(".go-up");
   // goUpElements.forEach((item) => {
   //    item.style.opacity = "1";
   //    item.style.transform = "translateY(0)";
   // });

   // });
   document.addEventListener("DOMContentLoaded", function () {
      var slideDonwElements = document.querySelectorAll(".go-down");
      var slideUpElements = document.querySelectorAll(".go-up");
      var slideRightElements = document.querySelectorAll(".go-right");
      var slideFadeElements = document.querySelectorAll(".fade");
      var windowHeight = window.innerHeight;
      function handleAnimationRun(block, type) {
         var blockOffset = block.offsetTop;
         var scrollPosition = window.scrollY;
         var elementPosition = blockOffset - scrollPosition;

         // Thực hiện animation khi phần tử nằm trong viewport
         if (elementPosition < windowHeight) {
            block.style.opacity = "1";
            type === "right"
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
})();
