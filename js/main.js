// showing the pointer
let pointer = document.querySelector(".pointerUp");
window.onscroll = function () {
  if (this.scrollY >= 700) {
    pointer.classList.add("show");
  } else {
    pointer.classList.remove("show");
  }
};

// show-menu-bar
$("#menu-bar").click(function () {
  $(".nav-links").toggleClass("show-menu-bar");
});
