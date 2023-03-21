let example = 'Dylan';

console.log(example.padStart(10, 'a'));  //aaaaaDylan

console.log(example.padEnd(10, 'a'));  //Dylanaaaaa




// padStart() and PadEnd() js
// padStart() and padEnd() are string methods in JavaScript that allow you to add padding to the beginning or end of a string, respectively.

// padStart() pads the start of a string with a given string until the resulting string reaches the specified length. It takes two arguments:

// targetLength: the length of the resulting string after padding.
// padString (optional): the string to use for padding. If this argument is not specified, a space character will be used by default.
// Here is an example of using padStart():


// const str = "123";
// const paddedStr = str.padStart(5, "0");

// console.log(paddedStr); // "00123"
// In this example, str is initially "123". Calling padStart(5, "0") on it pads the start of the string with "0" characters until it reaches a length of 5, resulting in the string "00123".

// padEnd() works similarly to padStart(), but pads the end of the string instead of the start. It also takes two arguments:

// targetLength: the length of the resulting string after padding.
// padString (optional): the string to use for padding. If this argument is not specified, a space character will be used by default.
// Here is an example of using padEnd():


// const str = "hello";
// const paddedStr = str.padEnd(8, ".");

// console.log(paddedStr); // "hello..."
// In this example, str is initially "hello". Calling padEnd(8, ".") on it pads the end of the string with "." characters until it reaches a length of 8, resulting in the string "hello...".