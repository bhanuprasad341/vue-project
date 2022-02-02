<template>
  <div>
    <h1>color</h1>
    <input type="month" v-model="color" placeholder="select" /> 
    <input type="hidden" v-model="hidden" placeholder="search" />  
    <button @click="showMessage">Submit</button>
    <div v-if="isSubmit">
      {{ this.data }}
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const ourStr = "I come first. " + "I come second.";
    console.log(ourStr);
    var myName = "prasad"
    console.log(myName.length);
    var person1  = "bhanu"
    console.log(person1.length);
     var person2  = "bhanu"
    console.log(person2.length);
     var person3  = "prabha"
    console.log(person3.length);
    var myvar;
    myvar=7;
    console.log(myvar);
    var myvar1;
    myvar1=8;
    console.log(myvar1);
    var myvar2;
    myvar2=9;
    console.log(myvar2);
    var myVar3;
    myVar3 = 5;
    var myNum;
    myNum = myVar3;
    console.log(myNum);
    var myVar4;
    myVar4 = 10;
    var myNum1;
    myNum1 = myVar4;
    console.log(myNum1);
    var myVar5;
    myVar5 = 15;
    var myNum2;
    myNum2 = myVar5;
    console.log(myNum2);
    var n = 9;
    console.log(n);
    var myFirstName ="Prasad"
    console.log(myFirstName);
    var myLastName ="Bhanu"
    console.log(myLastName);
    var myMiddleName ="Prabha"
    console.log(myMiddleName);
    var a=5;
    var b=10;
    var c="I am a";
    a = a + 1;
    b = b + 5;
    c = c + " String!";
    console.log(a,b,c);
    let catName = "Oliver";
let catSound = "Meow!";
console.log(catName,catSound);
var camper = "David";
console.log(camper);
var fCC = "freeCodeCamp"; // Change this line
var fact; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line
const sum = 5 + 10;
console.log(sum);
const num = 10 + 10;
console.log(num);
const difference = 45 - 20;
console.log(difference);
const product = 8 * 8;
console.log(product);
const quotient = 66 / 3;
console.log(quotient);
let increment = 87;

// Only change code below this line 
increment = increment + 1;
console.log(increment);
let decrement = 87;

// Only change code below this line
decrement = decrement - 1;
console.log(decrement);
const ourDecimal = 5.7;
console.log(ourDecimal);
const prt = 2.0 * 2.0;
console.log(prt);
const remainder = 55%2;
console.log(remainder);
let aug = 1;
aug += 100;
console.log(aug);
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
console.log(sampleStr);
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
console.log(myStr);
const Str = "First/SecondThird";
console.log(Str);
const our = "I come first. " + "I come second.";
console.log(our);
let rrr = "I come first. ";
rrr += "I come second.";
console.log(rrr);
const Ne = "freeCodeCamp";
const ls = "Hello, our name is " + Ne + ", how are you?";
console.log(Ne,ls);
const pp = "Prasad";
const firstLetter = pp[3];
console.log(firstLetter);
let pop = "Bob";
pop = "Job";
console.log(pop);
const ffe = "bhanuprasad";
const lastLetter = ffe[ffe.length - 7];
console.log(lastLetter);
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
console.log(sentence);
const sandwich = ["peanut butter", "jelly", "222"];
console.log(sandwich);
const teams = [["Bulls", 23], ["White Sox", 45]];
console.log(teams);
const array = [50, 60, 70];
array[0];
const data = array[1];
console.log(array[0],data);
const may = [18, 64, 99];
may[0]="45";
console.log(may[0]);
const lab = [
  [1, 2, 3],
  [4, 5, 6],
  [7, [8], 9],
  [[10, 11, 12], 13, 14],
];

const myData = lab[2][1];
console.log(myData);
const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);
const ray = [["John", 23], ["cat", 2]];
ray.push (["dog", 3]);
console.log(ray);
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray);
const oArray = ["Stimpson", "J", "cat"];
oArray.shift();
oArray.unshift("Happy");
console.log(oArray);
const myList = [["chocolate,15"],["egg",12],["biscuits",12],];
console.log(myList);
function functionName() {
  console.log("Hello World");
}
this,functionName();
function testFun() {
  console.log(7+10);
}
this,testFun();
function plusThree(num) {
  return num + 3;
}
const answer = plusThree(5);
console.log(answer);
function Three(num) {
  return num * 5;
}
const ans = Three(5);
console.log(ans);
// Declare the myGlobal variable below this line
const myGlobal =10;
var oopsGlobal =5;
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun2();
function myTest() {
  const loc = "foo";
  console.log(loc);
}
myTest();
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
myFun();
console.log(someVar);
let asum = 5;

function addThree() {
  asum = asum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed=processArg(7);
console.log(processed);
function nextInLine(arr, item) {
  // Only change code below this line
  
  return item;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}
welcomeToBooleans();
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
// Setup
function compareEuality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEuality(10, "10"));
// Setup
function testNotEqual(val) {
  if (val!=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));
console.log(3 !==  3);
function testGreaterOrEqual() {
  var val 
  if (val >=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
console.log(testGreaterOrEqual(10));
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
console.log(testLessOrEqual(10));
function testLogicalAnd(val) {
  // Only change code below this line

  if (val>5) {
    if (val<10) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

console.log(testLogicalAnd(6));
function testLogicalOr(val) {
  // Only change code below this line

  if (val>10) {
    return "Outside";
  }

  if (val<5) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

console.log(testLogicalOr(15));
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else (val <= 5); {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

console.log(testElse(4));
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

console.log(testElseIf(8));
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(orderMyLogic(20));
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
if (strokes === 1) {
  return names[0]
} else if (strokes <= par - 2	){
  return names[1];
} else if (strokes ===par - 1){
  return names[2];
} else if (strokes===par){
  return names[3];
} else if (strokes===par + 1){
  return names[4]
} else if (strokes===par + 2){
  return names[5];
} else if (strokes>= par + 3	){
  return names[6];
}
 return "Change Me";
  // Only change code above this line
}
console.log(golfScore(4, 7));
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val) {
  case 1:
  answer = "alpha";
  break;
  case 2:
  answer = "beta";
  break;
  case 3:
  answer ="gama";
  break;
  case 4:
  answer ="delta"
  break;
}
  // Only change code above this line
  return answer;
}
console.log(caseInSwitch(1));
function switchOfStuff(al) {
  let answer = "";
  // Only change code below this line
switch(al){
    case "a":
    answer ="apple";
    break;
    case "b":
    answer ="ball"
    break;
    default:
    answer ="stuff";
    break;
}
  // Only change code above this line
  return answer;
}
console.log(switchOfStuff(b));
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 1:
    case 2:
      case 3:
        answer ="low";
        break;
        case 4:
          case 5:
            case 6:
              answer ="mid";
              break;
              case 7:
                case 8:
                  case 9:
                    answer ="high";
}
  // Only change code above this line
  return answer;
}
console.log(sequentialSizes(8));
function isLess(a, b) {
  // Only change code below this line
  return a < b
  // Only change code above this line
}
isLess(10, 15);
console.log(10<15);
// Setup
function abTest(a, b) {
  // Only change code below this line
if (a<=0){
  return undefined;
} if (b<=0){
  return undefined;
}
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);
console.log(abTest(3,-3));
const myFox = {
  "name": "Fox",
  "legs": 4,
  "tails": 1,
  "enemies": ["Lion", "wolf"]
};
console.log(myFox.name);
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line
console.log(drinkValue);
console.log(entreeValue);
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";
console.log(myDog.name);
const myCat = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
};
myCat.bark = "meow";
console.log(myCat.bark)
// Setup
const myRat = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
// Only change code below this line
delete myRat.tails;
console.log(myRat);
// Setup
function phoneticLookup(val) {
  let result = "";
  // Only change code below this line 
var lookup = {
  "alpha" : "Adams",
  "bravo" : "Boston",
  "charlie" : "Chicago",
  "delta" : "Denver",
  "echo" : "Easy",
  "foxtrot" : "Frank"
 }
 result = lookup[val]
  // Only change code above this line
  return result;
}
console.log(phoneticLookup("charlie"));
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
]
console.log(myMusic[1]);
const mySong = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
// add record here
{
  "artist"; "Daft Punk",
  "title"; "Homework",
  "release_year"; 1997,
  "formats"; [ 
    "CD",
    "Cassette",
    "LP"
  ]
}
console.log(mySong[0].artist);
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage["car"]["inside"]["glove box"];
console.log(gloveBoxContents);
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
const secondTree =myPlants[1].list[1];
console.log(secondTree);
// Setup
const myArrayy = [];

// Only change code below this line
var index=0;
while(index<=8) {
myArrayy.push(index);
index += 1 ;
}
console.log(myArrayy);
// Setup
const myArrayyy = [];
// Only change code below this line
for (var indexx = 10;indexx<=15;indexx ++){
  myArrayyy.push(indexx);
}
console.log(myArrayyy);
const myArray1 =[];
for(var index2 =101;index2<=105;index2++){
  myArray1.push(index2);
}
console.log(myArray1);
const myArray3 =[];
for (var index3 =990;index3<=1000;index3++){
  myArray3.push(index3);
}
console.log(myArray3);
const myArray5 =[];
for (var i=1;i<10;i+=2) {
  myArray5.push(i);
}
console.log(myArray5);
const myArray8 =[];
for (var p=9;p>=1;p-=2){
  myArray8.push(p);
}
console.log(myArray8);
// Setup
const myArrr = [2, 3, 4, 5, 6];
var total = 0;
// Only change code below this line
for (var k=0;k< myArrr.length;k+=1){
total += myArrr[k];
}
console.log(total);
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (var h=0; h<arr.length; h+=1){
  for (var g=0; g<arr.length; g+=1){
    product *= arr[h][g];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
// Setup
const myAray = [];
let o = 10;

// Only change code below this line
do {
  myAray.push(o);
  o++;
} while (o < 5) ;
console.log(myAray);
function randomFraction() {

  // Only change code below this line 
  return 0; 

  // Only change code above this line
}
console.log(randomFraction());
function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 100);
}
console.log(randomWholeNum());
function randomWholeNumm(min,max) {

  // Only change code below this line

  return Math.floor(Math.random()*(max -min+1)+min);
}
console.log(randomWholeNumm(10,15));
function convertToInteger(str) {
return parseInt(str);
}
console.log(parseInt(convertToInteger("707")));
function convertToIntegerr(str) {
return parseInt(str,2);
}
console.log(convertToIntegerr("111001"));
function checkEqual(a, b) {
return a === b ? "Equal" : "Not Equal";
}
console.log(checkEqual(1, 2));
function checkSign(num) {
return (num ===0) ? "Zero" : (num<0) ? "Negative" : "Positive";
}

console.log(checkSign(6));




},
  data() {
    return {
      month: "",
      hidden: "",
      data: {},
      
      isSubmit: false,
    };
  },
  methods: {
    showMessage() {
      this.isSubmit = true;
      this.data = {month:this.month,hidden:this.hidden}

    },
  },
};
</script>