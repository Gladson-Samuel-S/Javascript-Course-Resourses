/*let js = "Amazing";
  console.log(40 + 80 + 23 - 10);
  console.log("Gladson");

let firstName ="Gladson Samuel";
console.log(firstName);

let PI =3.14;


//this is a commment
let $function = 27;
console.log($function);


let barcelona = false
console.log(typeof barcelona);
console.log(typeof 23);
console.log(typeof "real madrid");

barcelona = 'Real'
console.log(typeof barcelona);

let marks;
console.log(marks);
console.log(typeof marks);

marks = 2000;
console.log (typeof marks);


let age = 30;
age = 31;

const birthYear = 2000;
console.log(birthYear);

var job = 'programmer';
job = 'teacher';



//math operators
const now = 2036;
const ageGladson = now - 2000;
const ageDixon = now - 1995;
console.log(ageGladson, ageDixon);

console.log(ageGladson * 5, ageDixon / 2, 2 ** 4); //2*4 means 2 to the power of 4


//concatenation
const firstName = "Glason";
const lastName = "Samuel";
console.log(firstName + " " + lastName);

//assignment operators
let x = 10 + 5;
x += 10; //x = x + 10
x *= 4 //x = x * 4;
x++;
x--;
console.log(x);

//comparision operators
console.log(ageDixon > ageGladson); // 
console.log(ageGladson <= 36);

const isCorrect = ageGladson <= 36;
console.log(isCorrect)


const now = 2036;
const ageGladson = now - 2000;
const ageDixon = now - 1995;
console.log(now - 2000 < now - 1995);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

console.log(ageDixon);
console.log(ageGladson);

let averageAge = 0;

averageAge = (ageDixon + ageGladson) / 2;

console.log(averageAge);


const markWeight = 78;
const johnWeight = 92;

const markHeight = 1.69;
const johnHeight = 1.95;

const bmiMark = markWeight / (markHeight ** 2);
console.log(bmiMark);

const bmiJohn = johnWeight / (johnHeight * johnHeight);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);



const firstName = 'Gladson';
const job = 'student';
const birthYear = 2000;
const year = 2037;
const gladson = "I'am " + firstName + " " + 'a ' + (year - birthYear) + " " + 'years old ' + "Student";
console.log(gladson);


const gladsonNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}`;
console.log(gladsonNew);

console.log(`enna sonna que raabone banaaye`);

console.log(`woah i am in the first line
2nd line
3rd line
4th line`)


const age = 10;

if (age >= 18) {
    console.log("You can start driving 😍");
} else {
    const yearsLeft = 18 - age;
    console.log(`You have ${yearsLeft} to start driving 😢`)
}

const birthYear = 2000;
let century;
if (birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


const markWeight = 78;
const johnWeight = 92;

const markHeight = 1.69;
const johnHeight = 1.95;

const bmiMark = markWeight / (markHeight ** 2);
console.log(bmiMark);

const bmiJohn = johnWeight / (johnHeight * johnHeight);
console.log(bmiJohn);

if (bmiMark > bmiJohn) {
    console.log(`Mark's bmi ${bmiMark} is higher than John's ${bmiJohn}`);
} else {
    console.log(`John's bmi is higher than Mark's`);
}

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));

console.log('23' - '50' - 2);
console.log('25' > '123');


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Gladson'));

const money = 0;
if (money) {
    console.log("Don't spend it all ");
} else {
    console.log("Do something to earn");
}

let height = 0;
if (height) {
    console.log(`height is defined`);
} else {
    console.log(`height is UNDEFINED`);
}


const age = 18;
if (age === 18)
    console.log(`you are an adult`);

if (age == 18)
    console.log(`you are an adult lol`);

const favorite = Number(prompt("What is your favorite number"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 18) {
    console.log(`cool 18 is cool number`);
} else if (favorite === 9) {
    console.log(`cool 9 is also a cool number`);
} else {
    console.log(`any number is cool`);
}


const age = 18;
if (age >= 20 | age < 30) {
    console.log(`rejakljelj`);
}


const hasDeriverslicense = true;
const hasGoodVision = false;

console.log(hasDeriverslicense && hasGoodVision);
console.log(hasDeriverslicense || hasGoodVision);
console.log(!hasDeriverslicense);

const shouldDrive = hasDeriv  erslicense && hasGoodVision;
if (hasDeriverslicense && hasGoodVision) {
    console.log(`Sarah can drive`);
}

*/


// Dolphins vs Koalas

// test data
// Dolphins 97,108,89
//koalas 88,91,110

const averageScoreDo = (97 + 112 + 101) / 3;
const averageScoreKo = (109 + 95 + 106) / 3;

console.log(averageScoreDo, averageScoreKo);

if (averageScoreDo > averageScoreKo && averageScoreDo >= 100) {
    console.log(`Dolphins are the winners`);
} else if (averageScoreKo > averageScoreDo && averageScoreKo >= 100) {
    console.log(`Koalas are the winners`);
} else if (averageScoreDo == averageScoreKo && averageScoreDo >= 100 && averageScoreKo >= 100) {
    console.log(`It is a Draw`);
} else {
    console.log(`no one wins`);
}