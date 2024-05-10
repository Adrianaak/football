"use strict"

console.log("hello")

//these are our teams
let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    {
        code: "KAN", name: "Kansas City Chiefs",
        plays: "Kansas City, MO"
    },
];

//this is our windows.function that runs code once the dom 
window.onload = function () {

    initDropdown();

}

function initDropdown() {

    //get the dropdown from the HTML document
    let theDropdown = document.querySelector("#footballSelect");

    //
    let numberOfTeams = teams.length;

    //lets start looping over the teams
    for (let i = 0; i < numberOfTeams; i++) {


        //lets create a new option
        let newOption = document.createElement("option");

        //set the textContent for our new option, what the user sees
        newOption.textContent = teams[i].name

        //set the value 
        newOption.value = teams[i].code

        //add this option to the
        theDropdown.appendChild(newOption)


    }


}