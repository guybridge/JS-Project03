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

form.addEventListener("", (event)=>{
    
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

