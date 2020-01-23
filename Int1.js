var hr = "<hr>";

var cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"]
document.write(cars.sort() +hr );

//int2
var fruit = ["apple", "banana", "kiwi"];
document.write(fruit,", orange");
document.write( fruit);
document.write("<hr>");

//int2/2
var	animals = ["monkey", "horse", "dog"];
console.log(animals.sort());
animals.push("cat");
console.log(animals.sort());

//int3 short way
var data = 'mango cherries kiwi grapes pear peach orange lemon';
var fruity = new Array;
fruity = data.split(" ");
console.log(fruity);
document.write(fruity.join("<br>"));



//int3 long way
var int3 = 'mango cherries kiwi grapes pear peach orange lemon';
var temp = new Array();
temp = int3.split(' ');
temp[0] = 'mango';
temp[1] = 'cherries';
temp[2] = 'kiwi';
temp[3] = 'grapes';
temp[4] = 'pear';
temp[5] = 'peach';
temp[6] = 'orange';
temp[7] = 'lemon';
console.log(temp[0]);
console.log(temp[1]);
console.log(temp[2]);
console.log(temp[3]);
console.log(temp[4]);
console.log(temp[5]);
console.log(temp[6]);
console.log(temp[7]);