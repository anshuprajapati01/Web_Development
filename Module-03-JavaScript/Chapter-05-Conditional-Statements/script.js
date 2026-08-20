// if Statement

// let age = 21;

// if (age >= 18) {
//     console.log("You are eligible to vote.");
// }

// 📚 3. if...else
//     let age = 16;

// if (age >= 18) {
//     console.log("You can vote.");
// } else {
//     console.log("You cannot vote yet.");
// }

// 📚 4. else if

let marks = 85;

if (marks >= 90) {
    console.log("A+");
} else if (marks >= 80) {
    console.log("A");
} else if (marks >= 70) {
    console.log("B");
} else if (marks >= 60) {
    console.log("C");
} else {
    console.log("Fail");
}

// 📚 5. Multiple Conditions with &&

// let isRegistered = true;
// let hasAdmitCard = true;

// if (isRegistered && hasAdmitCard) {
//     console.log("You can enter the exam.");
// } else {
//     console.log("You cannot enter the exam.");
// }
// 📚 6. Multiple Conditions with ||

// let hasEmail = false;
// let hasPhone = true;

// if (hasEmail || hasPhone) {
//     console.log("You can log in.");
// } else {
//     console.log("Login information required.");
// }

// 📚 7. Nested if
// let age = 21;
// let hasID = true;

// if (age >= 18) {
//     if (hasID) {
//         console.log("Entry allowed.");
//     } else {
//         console.log("ID required.");
//     }
// } else {
//     console.log("You are under 18.");
// }

// 📚 8. Ternary Operator 
// let age = 21;

// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);

// 📚 9. switch Statement

// let day = 2;

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

//     default:
//         console.log("Invalid day");
// }