// // =====================
// // LOGICAL AND OPERATOR
// // =====================
// const password = prompt("Enter your password");
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("VALID PASSWORD!")
// } else {
//     console.log("INCORRECT FORMAT FOR PASSWORD!")
// }

// // =====================
// // REVISITING AGE EXAMPLE
// // =====================

// // 0-5 free 
// // 5-10 $10 
// // 10-65 $20
// // 65+ free

// const age = 100;
// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log("FREE");
// } else if (age >= 5 && age < 10) {
//     console.log("$10")
// } else if (age >= 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("INVALID AGE!")
// }

// // let firstName = prompt("enter your first name");
// // if (!firstName) {
// //     firstName = prompt("TRY AGAIN!!!");
// // }

// // =====================
// // COMBINING && and ||
// // =====================
// const age = 8;
// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log("YOU ARE NOT A BABY OR A SENIOR!")
// }



// const password = prompt('Enter your password')
// if (password.length >=6 && password.indexOf(' ') === -1 ) {
//     console.log ("Valid Password")
// }
// else {

//     console.log("Incorrect Format for Password")
// }

// 0 -5 free 
// 5 - 10 $10
// 10 - 65 $20
// 65+ free


// const age = 90;

// if (age >=0 && age < 5 || age >= 65) {

//     console.log("Free");
// }

// else if (age < 10)  {
//     console.log("$10")
// }
// else if (age < 65) {

//     console.log("$20")
// }

// const firstName = prompt("enter your first name");
// if(!firstName) {

//     firstname= prompt("Try Again")

// }

// const age = 45;

// if (!(age >=0 && age < 5 || age >= 65)) {

//     console.log("You are not a baby or senior");
// }

// const day = 2; 

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
// }


// if (day === 1) {
//     console.log("Monday")
// }
// else if (day === 2) {
//     console.log("Tuesday")

// }
// else if (day === 3) {
//     console.log("Wednesday")

// }else if (day === 4) {
//     console.log("Thursday")

// }else if (day === 5) {
//     console.log("Friday")

// }
// else {

//     console.log("I DON'T KNOW THAT")
    
// }