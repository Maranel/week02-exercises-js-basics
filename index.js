
//conditions

var myNumber1 = 5;
var myNumber2 = 7;

if (myNumber1 > myNumber2) {
  console.log("Yaay, I'm smaller!");
} else {
  console.log("Oh, no I'm not smaller")
}

if (myNumber1 === myNumber2) {
  console.log("they are equal");
} else if (myNumber1 < myNumber2) {
  console.log("mynumber is smaller");
} else if (myNumber1 - 5 < myNumber2) {
  console.log("mynimber - 5 is smaller");
} else {
  console.log("mynumber is not smaller");
}

//loops
for (var i = 0; i < 100; i++) {
  if (isEven(i)) {
    console.log(i + 1 + ". I won't cheat on the exam!");
  }
}

var myFriends = ["Bill", "Joe", "Francis"];

for (var i = 0; i < myFriends.length; ++i) {
  //console.log("Hello, " + myFriends[i]);
  greet(myFriends[i]);
}

myFriends.forEach(function (element) {
  //console.log("Hello, " + element);
  greet(element);
});

//functions
function greet(aname) {
  console.log("Hello, " + aname);
}

function isEven(number) {
  var even = number % 2;
  return even;
}

//jQuery

//$("#plant-a-tree").hide();
//$("#make-friends").fadeOut(500).delay(1000).fadeIn(500);
$("#newsletter-open").hide();

$("#close-button").click(function () {
  $("#newsletter").slideToggle(500);
  $("#newsletter-open").show();
});

$("#newsletter-open").click(function () {
  $("#newsletter").slideToggle(500);
  $("#newsletter-open").hide();
});

var cards = ["#plant-a-tree", "#make-friends", "#money-bag"];

for (var i = 0; i < cards.length; ++i) {

  $(cards[i]).mouseenter(function () {
    $(this).css({ "width": "200px", "font-size": "150%" })
  });

  $(cards[i]).mouseleave(function () {
    $(this).css({ "width": "150px", "font-size": "100%" })
  });
}

// $(".card").mouseenter(function () {
//   $(this).css({ "width": "200px", "font-size": "150%" })
// });

// $(".card").mouseleave(function () {
//   $(this).css({ "width": "150px", "font-size": "100%" })
// });

// This is comment 
// Exericses No 2
let variable = 5;
let myBoolean = true;
let myOtherBoolean = false;
// let result = true && true;
// let result2 = true && false;
// let result = true || true;
// let result2 = true || false;
// let result3 = false || false || true || false;
// let result4 = false || false;
// let result = !true;
// let result2 = !false
// let result = true === true;
// let result2 = true === false;
// let result3 = false === false;
// let result4 = 5 === 5;
// let result = true !== true;
// // let result2 = true !== false;
// let result3 = 1 !== 2;
// let result = 5 - 6;
// let result = 5 * 6;
// let result = 10 / 4;
// let result2 = 10 / 0;
// let reminder = 5 % 3;

let age = 25;
let ww2 = 6;
let tesla = 7662046;
let secondsofday = 86400;
let hungarians = 0.12;
let bigger = 1428614795;
let particpants = 3;
let myString = 'This is a string';
let greetWorld = 'Hello ' + 'World!';
let meno = 'Dave';
let greeting = 'Hello ' + meno + '!';
let charCount = 'Hello'.length;
let trueOrFalse = 5 === 5;
trueOrFalse = 100 < 50;
trueOrFalse = 'hello' !== 'world';
trueOrFalse = 1 >= 2;
trueOrFalse = 'blue'.length === 'green'.length;
trueOrFalse = 3 < 4 && (5 > 6 || 7 < 8);
let myArray = ['Claire', 'Mark', 'Susan'];
let myOtherArray = [3, 12, true, 'Hello'];
console.log(myArray[0]);
myArray[0] = 'Peter'; 
console.log(myArray.length);
myArray.push('Julia');
console.log(myArray.length);

let names = ['Anna','Josh','Jean']
console.log(names[2]);

if (5  > names[2].length) {
  console.log("Is longer");
} else {
  console.log("Is smaller");
}
names.push('Julia');
console.log(names);
names[0]='Matus';
console.log(names);

if(4 === names.length){
  console.log("Equals 4 records");
}
else{
  console.log("Not equals 4 records");
}

let post = {
  author: "Bill Gates",
  content: "Online communication will change how companies work",
  date: "2020-04-01 18:06",
};
console.log(post['author']);
console.log(post.author);
post.likes = 11043;
console.log(post.likes); 
let colobj = {
  colors: ['red','green'],

};
colobj.hasManyColors = 3 > colobj.colors.length;
console.log(colobj);