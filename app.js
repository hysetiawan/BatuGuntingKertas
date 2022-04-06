// cache the dom (storing for future use)  
 // & reset everything to 0 value  
 let userScore = 0;  
 let computerScore = 0;  
 const userScore_span = document.getElementById('user-score');  
 const computerScore_span = document.getElementById('computer-score');  
 const scoreBoard_div = document.querySelector('.score-board');  
 const result_div = document.querySelector('.result');  
 const batu_div = document.getElementById('batu');  
 const kertas_div = document.getElementById('kertas');  
 const gunting_div = document.getElementById('gunting');  
 // set up the core function for the computer that will use math.random to loop through an array and return that value  
 function getComputerChoice() {  
  const choices = ['batu', 'kertas', 'gunting'];  
  const randomNumber = Math.floor(Math.random() * 3);  
  return choices[randomNumber];  
 }  
 // similar to convertcase but just takes lowercase and replaces with titlecase  
 function convertCase(anythingIwant) {  
  if (anythingIwant === 'kertas') return 'kertas';  
  if (anythingIwant === 'gunting') return 'gunting';  
  return 'batu';  
 }  
 // Winning Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter  
 function win(user, computer) {  
  userScore++;  
  // console.log('user score is ' + userScore + ' ' + user);  
  userScore_span.innerHTML = userScore;  
  const userName = ' (user)'.fontsize(3).sup();  
  const compName = ' (comp)'.fontsize(3).sup();  
  result_div.innerHTML = `<p>${convertCase(user)}${userName} melawan ${convertCase(computer)}${compName}. Kamu menang!</p>`;  
  const roundStatus = document.getElementById(user);  
  roundStatus.classList.add('winningStyles');  
  setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);  
 }  
 // Losing Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter  
 function loses(user, computer) {  
  computerScore++;  
  // console.log('computer score is ' + computerScore + ' ' + computer);  
  computerScore_span.innerHTML = computerScore;  
  const userName = ' (user)'.fontsize(3).sup();  
  const compName = ' (comp)'.fontsize(3).sup();  
  result_div.innerHTML = `<p>${convertCase(computer)}${compName} melawan ${convertCase(user)}${userName}. Kamu kalah!</p>`;  
  const roundStatus = document.getElementById(user);  
  roundStatus.classList.add('losingStyles');  
  setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);  
 }  
 // Draw Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter  
 function draw(user, computer) {  
      const userName = ' (user)'.fontsize(3).sup();  
  const compName = ' (comp)'.fontsize(3).sup();  
  result_div.innerHTML = `<p>Pilihan Kalian sama, coba lagi ${convertCase(user)}</p>`;  
  // "It was a draw! You both chose " + user + " " + computer; // old js  
  const roundStatus = document.getElementById(user);  
  roundStatus.classList.add('drawStyles');  
  setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);  
 }  
 // The core game functions that set up and determine the games actual logic aka kertas melawan batu etc  
 function game(userChoice) {  
  const computerChoice = getComputerChoice();  
  // console.log('Game function: user choice is = ' + userChoice);  
  // console.log('Game function: computer choice is = ' + computerChoice);  
  switch (userChoice + computerChoice) {  
   case 'kertasbatu':  
   case 'batugunting':  
   case 'guntingkertas':  
    win(userChoice, computerChoice);  
    // console.log("user wins");  
    break;  
   case 'batukertas':  
   case 'guntingbatu':  
   case 'kertasgunting':  
    loses(userChoice, computerChoice);  
    // console.log("computer wins");  
    break;  
   case 'batubatu':  
   case 'guntinggunting':  
   case 'kertaskertas':  
    draw(userChoice, computerChoice);  
    // console.log("draw");  
    break;  
  }  
 }  
 // ES5 style of writing this function  
 // function main() {  
 //  batu_div.addEventListener('click', function() {  
 //   game('batu');  
 //  });  
 //  kertas_div.addEventListener('click', function() {  
 //   game('kertas');  
 //  });  
 //  gunting_div.addEventListener('click', function() {  
 //   game('gunting');  
 //  });  
 // }  
 // ES6 style of writing this function  
 // This function creates and adds an eventlistener to the batu, kertas gunting html element and the passes the value of that element to the game function  
 function main() {  
  batu_div.addEventListener('click', () => game('batu'));  
  kertas_div.addEventListener('click', () => game('kertas'));  
  gunting_div.addEventListener('click', () => game('gunting'));  
 }  
 main();  