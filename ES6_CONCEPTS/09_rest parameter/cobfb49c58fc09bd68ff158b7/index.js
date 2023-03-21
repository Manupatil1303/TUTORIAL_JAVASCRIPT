function add(nums) {
    
    console.log(arguments); 
    //we use the special arguments object to log all of the arguments passed to the function.
}

add(4, 5, 7, 8, 12)


// When we call the add() function with the arguments 4, 5, 7, 8, 12, the arguments object contains all of these values. We then log the arguments object to the console using console.log(), which prints the following output: Arguments(5) [4, 5, 7, 8, 12, callee: ƒ, Symbol(Symbol.iterator): ƒ]