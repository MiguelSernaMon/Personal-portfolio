const screenWidth = screen.width;
const screenHeight = screen.height;
console.log('HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');

//==========SHOW MENU================
const showMenu = (navId, toggleId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  console.log(nav);
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      console.log('clickkik');
      nav.classList.toggle('show');
      toggle.classList.toggle('bx-x');
    });
  }
};

showMenu('nav-menu', 'menu-icon');

console.log(screenWidth);
console.log(screenHeight);
