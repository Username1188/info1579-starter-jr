/*
    Name: jeremy
    Date: 11/11/2026
    Assignment: final
    Quarter: 1
    Instructor: lisa
*/
import {careerPaths} from "./data.js"
import {displayDatabase,resetDatabase} from "./database.js"
import {searchName,searchSkills,searchlanguages,sortCareers} from "./search.js"

//document elements
const searchButton = document.getElementById("searchButton");
const resetButton = document.getElementById("resetButton");
const output = document.getElementById("output");

const nameSearch = document.getElementById("nameSearch");
const skillSearch = document.getElementById("skillSearch");
const languagueSearch = document.getElementById("languagueSearch");
const sortInput = document.getElementById("sortInput");

//searchs Database
const searchDatabase = () => {
  try {
    //clear Database
    output.innerHTML="";

    const filteredCareers = 
    sortCareers(sortInput.value, 
      searchlanguages(languagueSearch.value,
        searchSkills(skillSearch.value,
          searchName(nameSearch.value, careerPaths))));

    //outputs careers loop
    for (let i =0; i < filteredCareers.length; i++) {
      let careerName = filteredCareers[i].name;
      let careerSkills = filteredCareers[i].skills;
      let careerlanguages = filteredCareers[i].languages;
      displayDatabase(careerName, careerSkills, careerlanguages);
    }

  } catch (error) {
    output.innerHTML = `

       <div class="dashboard-card">

          <h2>Error</h2>

          <ul>${error.message}</ul>

       </div>`;

    output.style.backgroundColor = "#f8d7da";
  }
};

//initial render
searchDatabase();

//events
searchButton.addEventListener("click", searchDatabase);
resetButton.addEventListener("click", resetDatabase);
