//==========Object start==========//
// var person = {
//     name: "Nayeem",
//     age: 26,
//     isEmpty: true,
// }

// console.log(person.age);
//==========object ended==========//

//==========array concate start==========//
//var arrayOne = ["a", "b"];
//var arrayTwo = [1, 2];
//var concateArray = arrayOne.concat(arrayTwo);
//console.log(concateArray);
//==========array concate ended==========//

//==========String to Array Start==========//
//let fullName = "Abu Md Nayeem Khan";
//let nameByArr = Array.from(fullName);
//console.log(nameByArr);
//==========String to Array Ended==========//

//==========Array Filter Start==========//
let myArray = [12, 33,65, 63, 87, 77, 76, 56, 30];
let result = myArray.find(function(items){
    return 33 < items;
});
console.log(result);
//==========Array Filter Ended==========//