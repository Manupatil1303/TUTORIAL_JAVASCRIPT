let Familyfriends=["madhav","payal","komal"];

let schoolFriends=["kajal","madhu","raina","shraddha"];

let totalFriends=[...Familyfriends, ...schoolFriends]

// console.log(totalFriends);

let bfEnds=[...totalFriends]
console.log(bfEnds);

bfEnds.push("kajal");
bfEnds.push("manisha");
bfEnds.push("snehal");
console.log(bfEnds);
console.log(totalFriends);


let obj={
    name: "manu",
    age: 26,
    clg: {
        sub1: "math",
        sub2: "computer"
    }
}

const{name,age,clg:{sub1,sub2}}=obj;

console.log(name+ age+ sub1+ sub2 );


let obj1={
    ...obj,
    
    school:{
        teacher:"komal mam",
        marks:797
    }
}
console.log(obj1);
