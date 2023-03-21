/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/



const myData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const msg = true;
      if (msg == false) {
        resolve("make feel beautiful");
      } else {
        reject("make feel ugly");
      }
    }, 3000);
  });
}

myData()
  .then((success) => console.log(success))
  .catch((error) => console.log(error));
