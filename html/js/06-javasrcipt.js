// let items = [1, 2, 3, 4, 5]

// Array icinde Array :
// let femaleUsers = ["Ayse", "Fatma ", "Esma"]
// let maleUsers = ["Mehmet", "Ahmet", "Emir"]

// items.unshift

// items.push(maleUsers)
// console.log(items)

// console.log(items.length)
// console.log(items[0].length)
// console.log(items[0][0])





// for ([baslangıc ataması]; [kosulifadesi]; [attırım ifadesi] {
// yapılacak islem
// }

let users = ["lorem", "ipsum", "dolor"]

// for (let index = 0; index < 10; index++) {
// console.log(index)
// }

const userListDOM = document.querySelector("#userList")

for (index = 0; index < users.length; index++) {
    const liDOM = document.createElement("li")
    liDOM.innerHTML = users [index]
    userListDOM.appendChild (liDOM)
}