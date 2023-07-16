//skills section

const skillsIcons = document.querySelectorAll('.skill-logo');
console.log(skillsIcons);

skillsIcons.forEach((element) => {
  element.style.transform = 'translateY(-300px)';
});

var i = 1; //  set your counter to 1

function myLoop() {
  //  create a loop function
  setTimeout(function () {
    //  call a 3s setTimeout when the loop is called
    console.log('hello'); //  your code here
    i++; //  increment the counter
    if (i < 10) {
      //  if the counter < 10, call the loop function
      myLoop(); //  ..  again which will trigger another
    } //  ..  setTimeout()
  }, 3000);
}

myLoop();
