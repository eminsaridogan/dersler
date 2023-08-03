let firstName = prompt ("kullanici adiniz")
console.log(firstName)

let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML} <small>${firstName}</small>`

