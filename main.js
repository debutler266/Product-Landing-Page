function imgSlider(anything) {
  document.querySelector('.coke').src = anything; //Targetting the .coke class //
}
function changeBgColor(color){
  const section = document.querySelector('section');
  section.style.background = color;
};

function menuToggle(){
  const toggleMenu = document.querySelector('.toggleMenu');
  const menunavigation = document.querySelector('.menunavigation');
  toggleMenu.classList.toggle('active');
  menunavigation.classList.toggle('active');
}
