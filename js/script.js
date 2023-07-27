//General stuff
const allBtns = document.querySelectorAll('.btn');

console.log(allBtns);
//Home Section

//Skills section

const skillsIcons = document.querySelectorAll('.skill-logo');

// Random number for random animation in skills section
let i = 0;
//Function who calls itself to loop the animations infinetely
function myLoop(animationDirection) {
  setTimeout(function () {
    // let auxiliar = i;
    if (animationDirection > 0) {
      // skillsIcons[i].style.transform = `translateY(-3px) scale(1.1)`;
      skillsIcons[i].style.transform = `translateY(-3px)`;
    } else if (animationDirection < 0) {
      // skillsIcons[i].style.transform = `translateY(0px) scale(1)`;
      skillsIcons[i].style.transform = `translateY(0px)`;
      // do {
      //   i = Math.floor(Math.random() * 6);
      // } while (i === auxiliar);
      i++;
    }
    animationDirection *= -1;
    if (i > 6) {
      i = 0;
      myLoop(1);
    } else {
      myLoop(animationDirection); //  recalls the animation function
    }
  }, 500);
}
myLoop(1);
//----------------------------------------------
