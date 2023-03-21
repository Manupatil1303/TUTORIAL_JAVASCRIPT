

const btn = document.getElementsByClassName("add");
const firstName = document.getElementById("First_name");
const lastName = document.getElementById("Last_name");
const outer = document.getElementsByClassName("fn")[0];


btn[0].addEventListener("click", function() {
    const letters = /^[A-Za-z]+$/;
    const nm = firstName.value;
    const ln = lastName.value;
    
    if (nm == "" || nm == null) {
      alert("Please enter your first name");
      return false;
    } else if (!nm.match(letters)) {
      alert("Please enter a valid first name");
      return false;
    }
    
    if (ln == "" || ln == null) {
      alert("Please enter your last name");
      return false;
    } else if (!ln.match(letters)) {
      alert("Please enter a valid last name");
      return false;
    }
    else{
        const fullName = nm + " " + ln;
        console.log(fullName);
      
        outer.innerHTML = fullName + " - Congratulations, you have successfully registered!";
    }
    return true;
    






 
});
