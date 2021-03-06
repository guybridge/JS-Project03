/*
* Date: 26/09/2018
* Author: Guy Bridge
* Description: Main Script file for FSJS TreeHouse Project 03 
*/

// Store the form in a variable
const form = document.querySelector(".form");

// Focus on the first form element
const name = document.getElementById("name");
name.focus();

const email = document.getElementById("mail");



// Event listener for email address box
email.addEventListener("keyup", function(event){
    
    console.log(event.target.value);
    if(!isValidEmail(event.target.value))
    {
        showError(email, "Email not valid");
    }
    else
    {
        removeError(email);
    }
});

// Checkbox activities selected
let hasSelectedCheckbox= false; 

// ”Job Role” section

// Initially hide the job role
hideElementById("other-title");

// The job roll selection box
const jobRoleSelector = document.getElementById("title");
jobRoleSelector.addEventListener("change", (event)=>{
    console.log("onChange: " + event.target.value);
    
    // If the value is other then show the inputbox to add more info
    if(event.target.value === "other")
    {
        showElementById("other-title");
    }
    else
    {
        hideElementById("other-title");
    }
    
});

// helper to show an element by ID
function showElementById(element)
{
    document.getElementById(element).style.display = "block";
}

// Helper to hide element by ID
function hideElementById(element)
{
    document.getElementById(element).style.display = "none";
}



// ”T-Shirt Info” section

// Get access to the design checkbox
const designSelector = document.getElementById("design");
const colorDiv = document.getElementById("colors-js-puns");
colorDiv.style.display = "none";

designSelector.addEventListener("change", (event)=>{
    
    const color = document.getElementById("color");
    const designItem = event.target.value;
    
    // Show the color picker on design theme change
    colorDiv.style.display = "block";
    
    if(designItem === "js puns")
    {
        clearOptions(color);
        color.options[0] = createOption("Cornflower Blue", "cornflowerblue");
        color.options[1] = createOption("Dark Slate Grey", "darkslategrey");
        color.options[2] = createOption("Gold", "gold");
    }
    else if(designItem === "heart js")
    {
        clearOptions(color);
        color.options[0] = createOption("Tomato", "tomato");
        color.options[1] = createOption("Steel Blue", "steelblue");
        color.options[2] = createOption("Dim Grey", "dimgrey");
    }
    else
        {
            colorDiv.style.display = "none";
        }
});

// Clear the select options
function clearOptions(select)
{
    for(let i = 0; i < select.length; i++)
        {
            select.remove(i);
        }
}

// Creates an option item
function createOption(text, value)
{
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    
    return option;
}

//”Register for Activities” section

const activities = document.querySelector(".activities");
let runningTotal = 0;
// Create the running total element
const runningTotalText = document.createElement("h3");

activities.addEventListener("change", (event)=>{
           
    const all = document.getElementById("all");
    const jsframeworks = document.getElementById("js-frameworks");
    const jslibs = document.getElementById("js-libs");
    const express = document.getElementById("express");
    const node = document.getElementById("node");
    const buildtools = document.getElementById("build-tools");
    const npm = document.getElementById("npm");
    
    
    const checkBoxName = event.target.name;
    const isChecked = event.target.checked;
    
    // Animate the item click
    fadeAnimateView(event.target.parentElement);
    
    // The activities selectors
    switch(checkBoxName)
    {
        case "all":
            console.log("Main conference selected");
            break;
        case "js-frameworks":
            console.log("JS Frameworks selected");
            toggleSelection(isChecked, express);
            break;
        case "js-libs":
            console.log("JS Libraries selected");
            toggleSelection(isChecked, node);
            break;
        case "express":
            console.log("Express Workshop selected");
            toggleSelection(isChecked, jsframeworks);
            break;
        case "node":
            console.log("Node.js workshop selected");
            toggleSelection(isChecked, jslibs);
            break;
        case "build-tools":
            console.log("Build tools selected");
            break;
        case "npm":
            console.log("NPM workshop selected");
            break;
    }
    
   
    // Add to the running total
    addToTotal(isChecked, event.target)

    
});

// Add to the running total
function addToTotal(isChecked, element)
{
    // Get the text content of the checkbox
    const stringVal = element.parentElement.textContent;
    // Get the amount by using substring
    const amount = stringVal.substring(stringVal.length - 3, stringVal.length);
    console.log(amount);
    
    // Convert the amount to an integer
    const amountInt = parseInt(amount);
    
    // If it's checked then add to the total
    if(isChecked)
    {
        // Add to total
        runningTotal = runningTotal + amountInt;
    }
    else
    {
        // Remove from total
        runningTotal = runningTotal - amountInt;
    }
    
    runningTotalText.className = "runningTotal";
    runningTotalText.innerHTML = "$" + runningTotal;
    
    
    activities.appendChild(runningTotalText);
    
    fadeAnimateView(runningTotalText);

}



// cross out a checkbox
function toggleSelection(isChecked, element)
{
    
    fadeAnimateView(element.parentElement);
    
    if(isChecked)
    {
         element.parentElement.style.color = "lightgrey";
         element.checked = false;
         element.disabled = true;
    }
    else
    {
         element.parentElement.style.color = "";
         element.checked = false;
         element.disabled = false;

    }

}
// Animate views - Used in the activies section
function fadeAnimateView(element)
{
    $(element).fadeOut(0);
    $(element).fadeIn(700);
}

// "Payment Info" section

const paymentSelector = document.getElementById("payment");
// Set the default payment method to credit card
paymentSelector.value = "credit card";

// Get access to the payment method divs
const creditcard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
// Hide the paypal and bitcoin divs
paypal.style.display = "none";
bitcoin.style.display = "none";

// Disable the "Select payment method"
paymentSelector.options[0].disabled = true;

// Make the option global so we can check if we need to show an error on the credit card submit
let option = "credit card";

// Add an event listener
paymentSelector.addEventListener("change", function() {
    
    option = this.value;
    
    console.log(option);
    
    if(option == "credit card")
    {
        showCC();
    }
    else if(option == "paypal")
    {
        showPayPal();
    }
    else if(option == "bitcoin")
    {
        showBitCoin();
    }
    
});

// Show the type of payment method only
function showCC()
{
        creditcard.style.display = "block";
        paypal.style.display = "none";
        bitcoin.style.display = "none";
}

function showPayPal()
{
        paypal.style.display = "block";
        creditcard.style.display = "none";
        bitcoin.style.display = "none";
}

function showBitCoin()
{
        bitcoin.style.display = "block";
        creditcard.style.display = "none";
        paypal.style.display = "none";
}

form.addEventListener("submit", (event)=>{
    

    console.log("Submitting form");
    
    // Clear the error formatting
    removeError(name);
    removeError(email);
    
    // Catch a blank name field
    if(name.value == null || name.value == "")
    {
        console.log("Name can't be null");
        showError(name, "Please add your name");
        event.preventDefault();
    }
    
    // Check for a valid email address
    if(!isValidEmail(email.value))
    {
        console.log("Email isn't valid");
        showError(email, "Email address doesn't look right");
        event.preventDefault();
    }
    
    // Make sure at least one checkbox is selected
    if(!isCheckBoxSelected())
    {
        
        console.log("Need to selected at least one checkbox");
        toggleActivitiesError(true, "You need to select at least one activity");
        event.preventDefault();
    }
    else
    {
        // Show an error in the activities section if no checkbox is selected
        toggleActivitiesError(false, "");    
    }
    
    if(!isCCnumValid())
    {
        console.log(option);
        // If the option isn't CC then it's OK to not check for ccnum details
        if(option !== "credit card")
        {
            console.log("Not check CC as CC not selected");
            return;
        }
        else
        {
            event.preventDefault();
        }
    }
    
    if(!isZipValid())
    {
        // Show error
        console.log("ZIP Code isn't valid");
        event.preventDefault();
    }
    
    if(!isCvvValid())
    {
        //show Error
        console.log("CVV isn't valid");
        event.preventDefault();
    }
        
    
});

// Validate a user email
function isValidEmail(email)
{
    // Check for @
    if(email.includes("@")&& // Email needs the @ symbol
       email.includes(".") && // Email has to include at least one .
      email.endsWith(".") !== true && // Check that email doesn't end with a .
      email.startsWith(".") !== true) // Check that email doesn't staet with a .
    {
        console.log("email is valid");
        return true;
    }
    else
    {
        console.log("email isn't valid");
        return false;
    }
}

function isCheckBoxSelected()
{
    // Loop through the the checkboxes
    for(let i = 0; i < activities.children.length; i++)
    {
        try // Try to catch the error
        {
            // Return true if any of the checkboxes show as true
            if(activities.children[i].firstChild.checked)
            {
                console.log("Found a checked checkbox");
                return true;
            }
            
        }
        catch(error)
        {
            console.log(error.message);
        }
         
    }
    return false;
}

// Validate Credit Card Number
function isCCnumValid()
{
    const ccnumElement = document.getElementById("cc-num");
    const ccnum = parseInt(ccnumElement.value); // convert value to int
    
    if(ccnum !== null && 
       ccnum !== "" && 
       ccnum.toString().length >= 13 && 
       ccnum.toString().length <= 16 && isNaN(ccnum) == false)
        {
            console.log("CC Num is valid");
            removeError(ccnumElement);
            return true;
        }
        else
        {
            console.log("CC num is not valid");
            showError(ccnumElement, "Invalid Credit Card Number");
            return false;
        }
    
}
// Validate ZIP number
function isZipValid()
{
    const zipElement = document.getElementById("zip");
    const zip = parseInt(zipElement.value); // convert value to int
    
    if(zip !== null && zip !== "" && zip.toString().length == 5 && isNaN(zip) == false)
    {
        console.log("ZIP is valid, removing error");
        removeError(zipElement);
        return true;
    }
    else
    {
        showError(zipElement, "Invalid Zip");
        console.log(zip.toString().length);
        return false;
    }
}

// Validate CVV
function isCvvValid()
{
    const cvvElement = document.getElementById("cvv");
    const cvv = parseInt(cvvElement.value); // convert value to int
    
    
    console.log("CVV length is: " + cvv.length);
    
    if(cvv !== null && cvv !== "" && cvv.toString().length == 3 && isNaN(cvv) == false) // 0 index
    {
        removeError(cvvElement);
        return true;
    }
    else
    {
        showError(cvvElement, "Invalid CVV");
        return false;
    }
}

// Functio to assign the input-error class to an input box
function showError(element, errorMessage)
{
    // Add the error class to the element
    element.className = "input-error";
    element.placeholder = errorMessage;
}

function removeError(element)
{
    // Add the error class to the element
    element.className = "";
    element.placeholder = "";
}

// Show an error in the activities section if a checkbox isn't filled out
// Create the error message
const errorH3 = document.createElement("h3");
errorH3.className = "input-error";
errorH3.id = "act-error";
activities.prepend(errorH3);
// Hide initially
errorH3.style.display = "none";

// Takes a boolean as an arg to toggle the error on and off
function toggleActivitiesError(isError, message)
{
    
    
    // If there is an error we should show it
    if(isError)
    {
        errorH3.style.display = "block";
        errorH3.innerHTML = message;
    }
    else // Otherwise hide
    {
        errorH3.style.display = "none";
    }
   
}
