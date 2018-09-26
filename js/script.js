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

// The job roll selection box
const jobRoleSelector = document.getElementById("title");
jobRoleSelector.addEventListener("change", (event)=>{
    console.log("onChange: " + event.target.value);
    
    // If the value is other then show the inputbox to add more info
    if(event.target.value === "other")
    {
        console.log("Showing text input box");
        // Create the input box
        const textFieldOther = document.createElement("input");
        textFieldOther.type = "text";
        textFieldOther.id = "other-title";
        textFieldOther.placeholder = "Your Job Role";
        
        // append to the child of the fieldset        
        event.target.parentElement.appendChild(textFieldOther);
    }
    
});

form.addEventListener("", (event)=>{
    
});