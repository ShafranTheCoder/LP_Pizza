let menuButton = document.getElementById('menuButton');
let smallMenuIcon = document.getElementById('menu-small-icon');
let largeMenuIcon = document.getElementById('menu-large-icon');
let mobileMenu = document.getElementById('mobileMenu');

/*JQuery */
// if ($(window).width() < 980) {
//   $(mobileMenu).hide();
// }
if ($(window).width() >= 640) {
  $('.fa-chevron-right').addClass('fa-2x');
}

menuButton.addEventListener('click', (event) => {
  if ($(mobileMenu).hasClass('opened')) {

    $(smallMenuIcon).removeClass('fa-times');
    $(smallMenuIcon).addClass('fa-bars')

    $(largeMenuIcon).removeClass('fa-times fa-2x');
    $(largeMenuIcon).addClass('fa-bars fa-2x')

    $(mobileMenu).slideToggle("slow");
    $(mobileMenu).removeClass('opened')
  } else {
    $(smallMenuIcon).removeClass('fa-bars');
    $(smallMenuIcon).addClass('fa-times')

    $(largeMenuIcon).removeClass('fa-bars fa-2x');
    $(largeMenuIcon).addClass('fa-times fa-2x')

    $(mobileMenu).slideToggle("slow");
    $(mobileMenu).addClass('opened')
  }

})