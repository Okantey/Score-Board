// home functionalities
let homeCount = document.getElementById("home-score");
let homeCountValue = 0;
const resetHome = document.getElementById("reset-home");


const homeOne = () => {
  console.log("Add one to home score")
  let homeValueOne = homeCountValue += 1;
  console.log(homeValueOne)
  homeCount.innerText = homeValueOne;
}
const homeTwo = () => {
  console.log("Add two to home score")
  let homeValueTwo = homeCountValue += 2;
  console.log(homeValueTwo)
  homeCount.innerText = homeValueTwo;
}

const homeThree = () => {
  console.log("Add three to home score")
  let homeValueThree = homeCountValue += 3;
  console.log(homeValueThree)
  homeCount.innerText = homeValueThree;
}
// reset scores for home side

resetHome.addEventListener('click', function() {
  homeCount.innerText  = 0;
  homeCountValue = 0;
  homeValueOne = 0;
  homeValueTwo= 0;
  homeValueThree = 0;
})

// away functionalities
let awayCount = document.getElementById("away-score");
let awayCountValue = 0;
const resetAway = document.getElementById("reset-away");


const awayOne = () => {
  console.log("Add one to away score")
  let awayValueOne = awayCountValue += 1;
  console.log(awayValueOne)
  awayCount.innerText = awayValueOne;
}
const awayTwo = () => {
  console.log("Add two to away score")
  let awayValueTwo = awayCountValue += 2;
  console.log(awayValueTwo)
  awayCount.innerText = awayValueTwo;
}

const awayThree = () => {
  console.log("Add three to away score")
  let awayValueThree = awayCountValue += 3;
  console.log(awayValueThree)
  awayCount.innerText = awayValueThree;
}

// reset scores for away side
resetAway.addEventListener('click', function() {
  awayCount.innerText  = 0;
  awayCountValue = 0;
  awayValueOne = 0;
  awayValueTwo = 0;
  awayValueThree = 0;
})
