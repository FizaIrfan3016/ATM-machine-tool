#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPincode = 12345; //Pincode
console.log(`Your current balance is ${myBalance}`);
let pinAnswer = await inquirer.prompt([
    {
        name: "pincode",
        type: "number",
        message: "Enter your pincode number",
    },
]);
if (pinAnswer.pincode === myPincode) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select option",
            choices: ["Fast cash", "Withdraw", "Check balance"]
        },
    ]);
    if (operationAns.operation === "Fast cash") {
        let withdrawAmount = await inquirer.prompt([
            {
                name: "withdraw",
                type: "list",
                message: "Please select Withdraw amount",
                choices: ["1000", "2000", "3000", "4000", "5000", "10000", "20000", "30000"]
            },
        ]);
        // If user enter for fast cash for withdraw then subtract their amount from current balance
        if (withdrawAmount.withdraw <= myBalance) {
            let balance = myBalance - withdrawAmount.withdraw;
            console.log(`Your balance is ${balance}`);
        }
        // When user enter greater amount print this statement
        else {
            console.log('Insufficent balance.');
        }
    }
    else if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount"
            },
        ]);
        // if user enter for withdraw then subtract their amount from current balance
        if (amountAns.amount <= myBalance) {
            let balance2 = myBalance - amountAns.amount;
            console.log(`The remaining balance is ${balance2} `);
        }
        // when user enter greater amount from their balance then print that this statement
        else {
            console.log('You have Insufficent balance');
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
}
else {
    console.log("Please enter correct pin code");
}
