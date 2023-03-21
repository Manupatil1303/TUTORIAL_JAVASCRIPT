import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue,remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://shoppinglist-d73f8-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")
addButtonEl.addEventListener("click", function () {
    let inputValue = inputFieldEl.value

    push(shoppingListInDB, inputValue)

    console.log(inputValue)

    clearInputFieldEl()

    // appendItemToShoppingListEl(inputValue)
})

onValue(shoppingListInDB, function (snapshot) {
   
      
    if(snapshot.exists()) 
    {  
        let itemsArray = Object.entries(snapshot.val());
    
        clearShoppingListEl();
       
    itemsArray.map((currentItem) => {
        let data=currentItem;
        let currentItemID = data [0];
        let currentItemValue = data[1];
       console.log(currentItemID)
        appendItemToShoppingListEl( data);
    })

    } 
    else {
        shoppingListEl.innerHTML = `<p>No items here... yet</p>`
    }


  


})
function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}
function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue 
    newEl.addEventListener("click", function() {
        
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        
       
        remove(exactLocationOfItemInDB);
    })
    
    shoppingListEl.append(newEl)
}