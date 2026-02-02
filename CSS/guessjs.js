let love = ["pragya","chemist","chuii mui","gaurav"];
let date = new Date();
/*for(let i=1; i<= 2; i++){
  console.log(`outer loop ${i}`);
  for(let j =1; j<= 5;j++){
    console.log(j);
}
} */

let myfav = "chemist";

let guess = prompt("guess my fav girl ")
while((guess != myfav)){
  if(guess == "quit"){
    console.log("you quit");
    break;
  }
  guess = prompt("wrong guess. please try again");
}
 if(guess == myfav){
  console.log("congrats!!");
 }
