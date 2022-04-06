let userScore = 0;  
let computerScore = 0;  
const userScore_span = document.getElementById('user-score');  
const computerScore_span = document.getElementById('computer-score');  
const scoreBoard_div = document.querySelector('.score-board');  
const result_div = document.querySelector('.result');  
const batu_div = document.getElementById('batu');  
const kertas_div = document.getElementById('kertas');  
const gunting_div = document.getElementById('gunting');  

function getComputerChoice() {  
    const choices = ['batu', 'kertas', 'gunting'];  
    const randomNumber = Math.floor(Math.random() * 3);  
    return choices[randomNumber];  
}  

function convertCase(anythingIwant) {  
    if (anythingIwant === 'kertas') return 'kertas';  
    if (anythingIwant === 'gunting') return 'gunting';  
    return 'batu';  
}  

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

 // Losing Condition
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

// Draw Condition
function draw(user, computer) {  
    const userName = ' (user)'.fontsize(3).sup();  
    const compName = ' (comp)'.fontsize(3).sup();  
    result_div.innerHTML = `<p>Pilihan Kalian sama, coba lagi ${convertCase(user)}</p>`;  
    // "Pilihan Kalian sama " + user + " " + computer;
    const roundStatus = document.getElementById(user);  
    roundStatus.classList.add('drawStyles');  
    setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);  
}  


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
 
 function main() {  
  batu_div.addEventListener('click', () => game('batu'));  
  kertas_div.addEventListener('click', () => game('kertas'));  
  gunting_div.addEventListener('click', () => game('gunting'));  
 }  
 main();  
