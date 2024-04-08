#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "enter your guess number(Number limit from 1 to 5):",
    }
]);
if (answer.userguessednumber === randomNumber) {
    console.log("congratulation ! your guess a correct number.");
}
else {
    console.log("sorry , you guess a wrong number");
}
