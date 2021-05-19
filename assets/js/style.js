/*photo apropos*/
document.getElementById("tiagolino").addEventListener("mouseover", () => {
    document.getElementById("tiagolino").src="assets/img/SmallLogo.jpg"
});
document.getElementById("tiagolino").addEventListener("mouseout", () => {
    document.getElementById("tiagolino").src="assets/img/tiagolino.JPG"
});
/*Timeline*/
(function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();
  /*portefolio*/
 document.getElementById("hanoi").addEventListener("mouseover", () =>
 document.getElementById("hanoi").src="assets/img/hanoisuite.png"
);
document.getElementById("hanoi").addEventListener("mouseout", () =>
document.getElementById("hanoi").src="assets/img/hanoipresentation.png"
);
document.getElementById("assotiano").addEventListener("mouseover", () =>
document.getElementById("assotiano").src="assets/img/tianosuite.png"
);
document.getElementById("assotiano").addEventListener("mouseout", () =>
document.getElementById("assotiano").src="assets/img/assotiano.png"
);
 