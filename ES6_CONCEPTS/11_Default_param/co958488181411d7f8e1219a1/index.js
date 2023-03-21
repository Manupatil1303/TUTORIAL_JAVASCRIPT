const hero=(actor)=>{
    console.log(`${actor} is my femourt hero`)
}

hero();    //undefined is my femourt hero





const leadSinger = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger();  //someone is the lead singer of Cold Play

// if we call the leadSinger() function without any arguments, it uses the default value of "someone" for the artist parameter and logs 



const swimmer=(swim="random")=>{
    console.log(`${swim} this guy not play well`)
}

swimmer();  //random this guy not play well
swimmer("abhijit kumar"); //abhijit kumar this guy not play well