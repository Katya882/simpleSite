let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('night-theme');
};
document.querySelector('.c-hamburger').addEventListener('click', function(e) { 
	e.preventDefault(); 
	this.classList.toggle('is-active');

	document.querySelector('.burger-menu_nav').classList.toggle('active');
});