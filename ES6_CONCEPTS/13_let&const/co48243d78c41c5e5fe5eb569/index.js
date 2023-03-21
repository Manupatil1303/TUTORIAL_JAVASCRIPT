
//var & let & const 


//var example  ===>


// var num=56;

// // function value(){
// //     console.log(num);
// // }
// // value();

// function number(){
//     var num1=56;
//     console.log(num1);  //56
// }
// number();
// console.log(num1); //num1 is not defined (/index.js:20)



//let example ===>


// let num=56;

// function value(){
    
    
//     console.log(num);  //56
//     let num1=78;
//     {
//           console.log(num1); //78
//     }
// }
// value();
//   console.log(num1); //ReferenceError: num1 is not defined (/index.js:37)



//const example  ===>


const mark=670;
function num(){
    
    console.log(mark); //670
    
    const total=900;
    {
          console.log(total);  //›900
    }
}
num();
  console.log(total);  //ReferenceError: total is not defined (/index.js:57)
    