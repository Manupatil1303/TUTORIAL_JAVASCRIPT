let fullName = "Dylan Coding God Israel";
let wordsArray = fullName.split(" "); 
//you can use the split() method in JavaScript, which splits a string into an array of substrings based on a specified separator.

let world = "";
for (const char of wordsArray) {
    
    console.log(char);
    world += char+" ";
}
 console.log(world.trim());

