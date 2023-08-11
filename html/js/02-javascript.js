// let Name = prompt ("kullanıcı adınız :")
// let age = prompt ("yasınızı girin")
//  if (Name && age  >= 18){
//     console.log("ehliyet alabilirsiniz")
//  } else if (!Name) {
//     console.log("kullanıcı adınız yok")
//  } else if (!(age >= 18)) {
//     console.log("yasınızı girin veya yasnız 18den kücük" )
//  }

// let firstName = prompt ("kullanıcı adınız")
// console.log(firstName)

                                                    // bu kullanım yalnıs
//  function hello() {
//     console.log(`MERHABA ${firstName}`)
//  }
  
//  hello()


 function hello(firstName="") {
    console.log(`Merhaba ${firstName}`)
 }
                                                    // bu kullanım dogru
 hello("Apple")




 function hosgeldin()
{
    return "Sitemize Hoş Geldiniz";
}

console.log(hosgeldin());



// function hosgeldin()
// {
//     console.log ("Sitemize Hoş Geldiniz");
// }

// hosgeldin()

// let greeting = document.querySelector("#greeting")
// greeting.addEventListener("click",domClick)

// function domClick(  ) {
//     console.log("Tiklandi")
//     this.style.color = "purple"
//     console.log(this.innerHTML = "Tiklandigi için bigi degisti")
// }

let counter = 0 ;
let counterDOM = document.querySelector ("#counter")
let incraeseDOM = document.querySelector ("#incraese")
let decraeseDOM = document.querySelector ("#decraese")

counterDOM.innetHTML = counter

incraeseDOM.addEventListener("click",clickEvent)
decraeseDOM.addEventListener("click",clickEvent)

function clickEvent() {
    console.log(this.id)
    this.id == "incraese" ? counter += 1 : counter -= -1 
    counterDOM.innerHTML = counter
}
