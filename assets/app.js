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
if (cijfer < 6) { console.log("onvoldoende") }
else if (cijfer >= 6 && cijfer <= 7) { console.log("voldoende") }
else if (cijfer >= 7 && cijfer <= 9) { console.log("goed") }
else if (cijfer > 9) { console.log("uitmuntend") }

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

if (purchasedBook == true && job == "teacher" && inTrain == true) { console.log("finally I can enjoy my book") }
else { console.log("I can't enjoy my book") }

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
while (b < 35) {
    c = (c + b);
    console.log(c)
    b = b + c;
    console.log(b)
}

//loop opdracht 3

let numbers = [2, 4, 8, 9, 12, 15];
let total = 0;
for (let i in numbers) {
    total += numbers[i];

}
console.log(total);


function pleaseDoNotShoutMyName(myName, word) {
    let whisper = `Saying ${word} ${myName}`;
    return whisper;
}

const myName = pleaseDoNotShoutMyName("kees", "hi");

console.log(myName);

const gender = giveMeSomeNiceName("non binair");

function giveMeSomeNiceName(gender) {
    let sayname = `myNewName is:`;
    if (gender == "male") { console.log(sayname, "Arnold") }
    else if (gender == "female") { console.log(sayname, "Romana") }
    else { console.log("You are a special snowflake!") };
    return sayname;
}

function pig(numberOfPigs) {
    let pigs = "";
    for (let i = 1; i <= numberOfPigs; i++) {
        pigs = pigs += "🐷";


    }
    return pigs;

}

console.log(pig(5) + "knor");

function factorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }

}

console.log(factorial(500));

//opdracht 1 functions

function fibonnaci() {
    let b = 0;
    let c = 1;
    while (b < 35) {
        c = (c + b);
        console.log(c)
        b = b + c;
        console.log(b)
    }

}

fibonnaci();

//opdracht 2 functions

function countdown(year) {
    for (let i = 11; i >= 0; i--) {
        if (i > 0) { console.log(i) }
        else { console.log("happy", year) }


    }
}

countdown(2077);

//opdracht 3 functions

expressionAndDeclaration();

function expressionAndDeclaration() {
    console.log(text)
    var text = "hallo"
}

//dit werkt niet, want de var wordt wel door hoisting bovenaan gezet, maar het neemt de text niet mee.

let productlist = [
    {
        productName: "tandenborstel",
        productPrice: 2.19
    },
    {
        productName: "bakmeel",
        productPrice: 0.79
    },
    {
        productName: "wortels",
        productPrice: 1.10
    }
]


productlist[0] = "tandenborstel";
productlist[1] = "deodorant";
productlist[2] = "bakmeel";
productlist[3] = "wortels";
productlist[4] = "tandpasta";
productlist[5] = "krop sla";
productlist[6] = "maggi";
productlist[7] = "croky chips";
productlist[8] = "wc papier";
productlist[9] = "shampoo";



productlist.forEach(function (val, index, arr) {
    console.log(`On ${index} value is ${val}`);
});

for (let i = 0; i < productlist.length; i++) {
    const element = productlist[i];
    //console.log(element);
    console.log(productlist[i]);
}

const newProductsArray = productlist.map((val, index, arr) => {
    return `Product ${index}: ${val}`;

})

console.table(newProductsArray);

const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];

function sumTotalPrice() {
    let output = 0;
    productPrices.forEach(function (val) {
        output += val;
    });
    return output;
}

const totalPrice = sumTotalPrice();

console.log(totalPrice);

const average = function (anArray) {
    let newAverage = sumTotalPrice(anArray) / anArray.length;
    return newAverage;
}

console.log(average(productPrices));

//opdracht arrays 1

const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

function randomElement(lapRounds) {

    return lapRounds[Math.floor(Math.random() * lapRounds.length)];

}

console.log(randomElement(lapRounds));

//opdracht arrays 2

const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];
console.log(allMyRecords[0][0]);
console.log(allMyRecords[0][1]);
console.log(allMyRecords[0][2]);
console.log(allMyRecords[1][0]);
console.log(allMyRecords[1][1]);
console.log(allMyRecords[1][2]);

//opdracht arrays 3


const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {

        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
}




let me = {
    name: "Evan Verdoorn",
    age: "18",
    previousDiploma: "Havo",
    petNames: ["Floyd", "Flint", "Lemmy", "Snufje", "woef"],
    favoriteVehicle: {
        favoriteVehicleOne: "auto",
        favoriteVehicleTwo: "fiets"
    },
    myNewFunction: function () { },
    newAllFunction: function allAssign() {
        console.log(`Mijn favoriete vervoersmiddel is de ${me.favoriteVehicle.favoriteVehicleOne} en hij heeft 4 wielen`)
    
        me.petNames.forEach(function (value, index, arr) {
            console.log(value);
        })
    }
    

}

me.newAllFunction()





console.log(me);

me.currentStudy = "Hbo";

let productlijst = [
    {
        productName: "tandenborstel",
        productPrice: 2.19
    },
    {
        productName: "bakmeel",
        productPrice: 0.79
    },
    {
        productName: "wortels",
        productPrice: 1.10
    }
];
let totaal = 0;
productlijst.forEach(function (value, index, arr) {
    totaal += value.productPrice;
});

console.log(totaal);

//opdracht 1 objects

let lapRoundes = {
    lapRoundOne: 55.99,
    lapRoundTwo: 63.00,
    lapRoundThree: 63.01,
    lapRoundFour: 54.01,
    lapRoundFive: 62.79,
    lapRoundSix: 52.88,
    lapRoundSeven: 53.10,
    lapRoundEight: 54.12
}

console.log(lapRoundes);

//opdracht 2 objects

const teachers = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux"
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino"
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple"
    }
]

