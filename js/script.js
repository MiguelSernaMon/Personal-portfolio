//skills section

const skillsIcons = document.querySelectorAll('.skill-logo');

// Random number for random animation in skills section
let i = Math.floor(Math.random() * 6);
//Function who calls itself to loop the animations infinetely
function myLoop(animationDirection) {
  setTimeout(function () {
    let auxiliar = i;
    console.log(i);
    if (animationDirection > 0) {
      skillsIcons[i].style.transform = `translateY(-40px)`;
    } else if (animationDirection < 0) {
      skillsIcons[i].style.transform = `translateY(0px)`;
      do {
        i = Math.floor(Math.random() * 6);
      } while (i === auxiliar);
    }
    animationDirection *= -1;
    myLoop(animationDirection); //  recalls the animation function
  }, 1000);
}
myLoop(1);
//----------------------------------------------
