//types and variables

// opdracht 1
let x = 2;
let y = 6;
console.log(y % x)

//opdracht 2
let sentence = " Programming is not so cool "
console.log(sentence.replace(" not ", " "))

//opdracht 3
const p = 1400
const q = "ik woon in naboo"
console.log(p == q)
// het is niet handig, want de waarde '1400' bestaat niet in 'ik woon in naboo'


//conditionals

//opdracht 1
let cijfer = "6";
if (cijfer < 6) {console.log("onvoldoende")}
else if (cijfer >= 6 && cijfer <= 7 ) {console.log("voldoende")}
else if (cijfer >= 7 && cijfer <= 9 ) {console.log("goed")}
else if (cijfer > 9) {console.log("uitmuntend")}

//opdracht 2

var grade = "7"

switch (true) {
    case grade < 6:
        console.log("onvoldoende")
        break;
    case grade >= 6 && grade <= 7:
        console.log("voldoende")   
        break; 
    case grade >= 7 && cijfer <= 9:
        console.log("goed")  
        break;
    case grade > 9:
        console.log("uitmuntend")  
        break;    
}

//opdracht 3

let purchasedBook = true;
let job = "teacher";
let inTrain = false;

if (purchasedBook == true && job == "teacher" && inTrain == true) {console.log("finally I can enjoy my book")}
else {console.log("I can't enjoy my book")}

//loop opdracht 1


for (let i = 1; i <= 25; i++) {
    let a = i % 4;
    if (a == 0) {
        console.log(i)
    }
}

//loop opdracht 2

let b = 0;
let c = 1;
while(b < 35) {
    c = (c+b);
    console.log(c)
    b = b+c;
    console.log(b)
}

//loop opdracht 3

let numbers = [ 2, 4, 8, 9, 12, 15];
let total = 0;
for (let i in numbers) {
    total += numbers[i];
    
}
console.log(total);

