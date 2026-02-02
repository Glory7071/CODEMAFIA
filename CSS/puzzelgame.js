const max = prompt("enter the maximium number");


const random = Math.floor(Math.random() * max)+1;
console.log(random);
let guess = prompt("guess the number");

while(true){
     if(guess == "quit"){
        console.log("user quit");
        break;
     }

     if(guess == random){
        console.log("you are right! congrats!! random nuber was ",random);
        break;
     }else if(guess<random){
        guess = prompt("hint:your guess is too small.please try again");
     }
     else {
            guess = prompt("hint:your number is to large.please try agian")
        }
    
     //else{
       // guess = prompt("you guess was wrong. please try again");
     //}
}