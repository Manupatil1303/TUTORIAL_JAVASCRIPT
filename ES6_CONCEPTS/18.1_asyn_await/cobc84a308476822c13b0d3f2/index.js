//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    
     console.log(data);
     
     //{categories: [], created_at: "2020-01-05 13:42:20.841843", icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png", id: "zGP42g1cQF-k7bOVNe-1CQ", updated_at: "2020-01-05 13:42:20.841843", url: "https://api.chucknorris.io/jokes/zGP42g1cQF-k7bOVNe-1CQ", value: "Chuck Norris cuts his steak with his fist."}
     
    console.log(data.value);
    //Chuck Norris cuts his steak with his fist.
}

getJoke();