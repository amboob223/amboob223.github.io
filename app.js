let  userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");// this uses the DOM  wihich takes the elmemnts form an html page
const compScore_span = document.getElementById("computer-score");// getement id if id query selctor for class
const scoreBoard_div = document.querySelector(".score-board"); // thid is necuas we will update the board
const result_p = document.querySelector(".result > p"); // this is for the words
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");// this whole thing is cahing the dom or putting the varibles we will need away for further use


function getCompChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);// times in by three means we wont get a number over the number we wtuimes it by
    return choices[randomNumber]; // just return what the choice evaluates to 
};
getCompChoice();


function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "scissors";
} // we returnig the words to the result not to the console.

function win(userChoice, computerChoice){
   const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
     userScore++;
    userScore_span.innerHTML = userScore;  // now we are merging th varible we made in this file with the score in the spans using he dom, 
    compScore_span.innerHTML= compScore;
    
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. you win `;
    userChoice_div.classList.add('green-glow');// this would be r ps or s an dthe available classes form ethe dom cmethod class list  then we hgave to add 
    setTimeout(function(){userChoice_div.classList.remove('green-glow')},1000);
}
 
function lose(userChoice, computerChoice){ /// depending on what you pick the choice will be rp or s 
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    compScore++;
    userScore_span.innerHTML = userScore;  // now we are merging th varible we made in this file with the score in the spans using he dom, 
    compScore_span.innerHTML = compScore;
    
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses ${convertToWord(computerChoice)}${smallCompWord}. you lost `;
    userChoice_div.classList.add("red-glow");
    setTimeout(function(){userChoice_div.classList.remove("red-glow")},1000); // set time out takes in a function and a time on the other argument after the function 

}// backticks we can interpolate the strtiong and removes thes currly brackets and pluses and quotes
  
function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. draw`;
    userChoice_div.classList.add("grey-glow")
    setTimeout(function(){userChoice_div.classList.remove("grey-glow")},1000);
}

function game(userChoice){
   const computerChoice = getCompChoice();
   switch (userChoice + computerChoice){
       case "rs":// this is saying in the case of thr user choice plus the comp choioce 
       case "pr":
       case "sp":
           win(userChoice,computerChoice); // this was what i had to fix put the paramenters in gthf unction 
           break;
       case "rp":
       case "ps":
       case "sr":
           lose(userChoice, computerChoice);
           break;
       case "rr":
       case "pp":
       case "ss":
           draw(userChoice, computerChoice);
           break;

   }
   
};// will be the id in the divs 


function main(){
rock_div.addEventListener("click", function(){
    game("r");
})

paper_div.addEventListener("click", function(){
    game("p");
})

scissors_div.addEventListener("click", function(){
    game("s")
})}

main()