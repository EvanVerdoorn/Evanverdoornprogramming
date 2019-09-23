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
