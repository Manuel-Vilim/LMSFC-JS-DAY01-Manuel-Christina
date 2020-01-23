var hr = "<hr>";


//adv1
var a = 7;

var b = 14;

var c = "21";

var d = '36';

var e = 42;

//checking c type
console.log(typeof c);
var c = Number(c);
//checking if c type changed
console.log(typeof c);

var d = Number(d);
//checking if d type changed
console.log(typeof d);


var sum = (a+b+c+d+e);


//adv2

var f = '1';

var g = 15;

var h = 8;

var i = "1";

var f = Number(f);
var i = Number(i);

var sumb = (f*g*h*i);

document.write(sum / sumb);

//adv3

var ex2 = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
console.log(ex2[1][1]);
console.log(ex2[4][2]);
console.log(ex2[5][3]);
console.log(ex2[2][3]);
console.log(ex2[2][1]);

//slice version
var ex2v2 = [ 1, 2, 1, 24, 8, 11, 9, 4, 7, 0, 7, 27, 7, 4, 28, 14, 3, 10, 25, 7, 21, 4, 6, 17, 3, 5, 26, 3 ];
console.log(ex2v2.slice (5,6));
console.log(ex2v2.slice(18,19));
console.log(ex2v2.slice(23,24));
console.log(ex2v2.slice(11,12));
console.log(ex2v2.slice(9,10));