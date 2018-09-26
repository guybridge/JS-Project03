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



// Get access to the design checkbox
const designSelector = document.getElementById("design");
designSelector.addEventListener("change", (event)=>{
   
    const color = document.getElementById("color");
    const designItem = event.target.value;
    
    if(designItem === "js puns")
    {
        color.options[0] = createOption("Cornflower Blue", "cornflowerblue");
        color.options[1] = createOption("Dark Slate Grey", "darkslategrey");
        color.options[2] = createOption("Gold", "gold");
    }
    else if(designItem === "heart js")
    {
        
        color.options[0] = createOption("Tomato", "tomato");
        color.options[1] = createOption("Steel Blue", "steelblue");
        color.options[2] = createOption("Dim Grey", "dimgrey");
    }
});

// Creates an option item
function createOption(text, value)
{
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    
    return option;
}

form.addEventListener("submit", (event)=>{
    
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

