//TODO: Include your multi-line comment header
/*
    Name: jeremy
    Date: 9/15/2026
    Assignment: module 1 applied programming
    Quarter: 1
    Instructor: lisa
*/

// TODO: Import "use strict" directive
"use strict";

// ADD YOUR CODE BELOW

//imports
import { courseModules } from "./data.js";
import {
  calculatePercentComplete,
  getCourseGrade,
  getCourseProgress,
  getStudyPlan,
} from "./calculations.js";
import { displayJoke, displayQuote } from "./api.js";
import {
  resetDashboard,
  displayDashboard,
  displayRemainingModules,
  applyDashboardColor,
} from "./dashboard.js";
import { validateInputs, runUnitTests } from "./validators.js";

//document elements
const studentNameInput = document.getElementById("studentName");
const completedModulesInput = document.getElementById("completedModules");
const studyDayInput = document.getElementById("studyDay");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const output = document.getElementById("output");

//main
//let isEnrolled = true;

//sums up every moduals required time
let totalStudyHours = courseModules.reduce((sum, current) => {
  return sum + current.hoursRequired;
}, 0);
let hoursPerWeek = totalStudyHours / courseModules.length;

//generates dashboard
const generateDashboard = () => {
  try {
    //inital display cause remainingModulesList id doesnt exist
    displayDashboard("", "", 0, 0, 0, 0, "", "", "", "", 0);

    const studentName = studentNameInput.value;
    const completedModules = completedModulesInput.value;

    const percentComplete = calculatePercentComplete(
      completedModulesInput.value,
      courseModules.length,
    );
    const percentRemaining = 100 - percentComplete;

    //study day based on grade or user input
    let studyDay;
    percentComplete == 100
      ? (studyDay = "Complete")
      : (studyDay = studyDayInput.value);

    const grade = getCourseGrade(percentComplete);
    const progress = getCourseProgress(percentRemaining);
    const studyPlan = getStudyPlan(studyDay, hoursPerWeek);

    //object stuff
    const moduleNamesList = courseModules.map((course) => {
      return course.moduleName;
    });
    const remainingModulesList = courseModules.filter((course) => {
      return courseModules.indexOf(course) >= completedModules;
    });
    const remainingHours = remainingModulesList.reduce((sum, current) => {
      return sum + current.hoursRequired;
    }, 0);

    //catch errors
    console.log("name: " + studentName);
    console.log("completed moduals: " + completedModules);
    console.log("day: " + studyDay);
    console.log(moduleNamesList);

    validateInputs(studentName, completedModules, studyDay);

    //display results
    displayDashboard(
      studentName,
      courseModules,
      completedModules,
      totalStudyHours,
      percentComplete,
      percentRemaining,
      grade,
      progress,
      studyDay,
      studyPlan,
      remainingHours,
    );

    applyDashboardColor(percentComplete);
    displayRemainingModules(remainingModulesList);
  } catch (error) {
    output.innerHTML = `

       <div class="dashboard-card">

          <h2>Error</h2>

          <ul>${error.message}</ul>

       </div>`;

    output.style.backgroundColor = "#f8d7da";
  }
};

//events
generateButton.addEventListener("click", generateDashboard);
resetButton.addEventListener("click", resetDashboard);

//unit tests
runUnitTests(courseModules, completedModulesInput);

//display promises
displayJoke();
displayQuote();
