function add(...nums) {
    
    console.log(nums);
}

add(4, 5, 7, 8, 12)


//  add(...nums)===> Using the rest parameter syntax can be useful for functions that need to accept a variable number of arguments, and it's generally recommended over using the arguments object for clarity and ease of use.

let value=(...val)=>{
   console.log(val) 
}
value(67,90,45,78);