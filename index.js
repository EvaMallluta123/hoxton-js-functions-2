// let letter=prompt("Enter a letter")
// for (let user of users){
//     let name= user.name
//     console.log(name.includes(letter))
//     if (name.includes(letter))
//     console.log(` the ${letter} is on ${name}`)
//     else console.log(` the ${letter} is not on ${name}`)
// }

// function greet(name) {
//     for (let user of users){
//         let name= user.name
//         console.log(name.includes(letter))
//         if (name.includes(letter))
//         console.log(`Hello, ${name}`, )
//       }
//       setTimeout(greet, 2000)
//     }

    //  setTimeout(greet, 2000
function greet(name){
    let letter=prompt("Enter a letter")
for (let user of users){
    let name= user.name
    console.log(name.includes(letter))
    if (name.includes(letter)){
    const myTimeout = setTimeout(function(){
        console.log("Hello "+ user.name)
    }, 2000)
}
} 
}
console.log(greet())

function id(){
let id= Number(prompt("Give me an id"))
for(let todo of todos){
    if (id===todo.userId && todo.completed===false){
    let mesage = todo.title
   console.log(mesage)
}
    
}
}
console.log(id())

