let items = [10, 20, 30, 40, ]
console.log("items ilk hali ", items)

// array / son ogeye / eleman eklemek = push 
items.push(50)
console.log("50 : ", items) 

//  array / basa oge eklemek = unshift
items.unshift(5)
console.log("5 : ", items)
// array / sondaki ogeyi cikarmak = pop
items.pop(50)
console.log(items)

// array / bastaki ogeyi cikarmak = shift 
// ilk elemanı firstItem icerisine eklemek
let firstItem = items.shift() 
console.log("firstItem ", firstItem, "items ", items)

// ilk ogenin degistirilmesi:
items [0] = 5;
console.log(items)

// son ogenin degistirilmesi:
items [items.length -1 ] = 1000 ; 
console.log(items)