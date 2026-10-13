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
//global functions
function calculatePercentComplete(completed, total){
  return ((completed / total) * 100);
}

function calculateStudyHours(modules, hoursPerModule = 6){
  return modules * hoursPerModule;
}

//document elements
const studentNameInput = document.getElementById("studentName");
const completedModulesInput = document.getElementById("completedModules");
const studyDayInput = document.getElementById("studyDay");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const output = document.getElementById("output");


// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)
let courseModules = ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6", "Module 7", "Module 8", "Module 9", "Module 10"];
let isEnrolled = true;

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
let hoursPerWeek = 6;
let totalStudyHours = calculateStudyHours(courseModules.length);

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
let dailyStudyHours = (hoursPerWeek / 7).toFixed(2);
let dailyStudyMinutes = dailyStudyHours * 60;

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
let adjustedDailyHours = (hoursPerWeek / 6).toFixed(2);
let adjustedDailyMinutes = adjustedDailyHours * 60;

//mod 2
//inline function progress msg
const getCourseProgress = function(percentRemaining){
  if (percentRemaining == 0){
    return "Finished!";
  } else if (percentRemaining >= 1 && percentRemaining < 25){
    return"Almost Finished!";
  } else if (percentRemaining >= 25 && percentRemaining < 75){
    return "Making Progress";
  } else if (percentRemaining >= 75 && percentRemaining <= 100){
    return "Just Getting Started";
  } else {
    return "Invalid entry.";
  }
}

//inline function course grade msg
const getCourseGrade = (percentComplete) => {
  if (percentComplete < 60){
    return "F";
  } else if (percentComplete >= 60 && percentComplete < 70){
    return "D";
  } else if (percentComplete >= 70 && percentComplete < 80){
    return "C";
  } else if (percentComplete >= 80 && percentComplete < 90){
    return "B";
  } else if (percentComplete >= 90 && percentComplete <= 100){
    return "A";
  } else {
    return "Invalid entry.";
  }
}

//inline function display modules
const displayModules = (modules) => {
  const list = document.createElement("ul");

  for (let i = 0; i < modules.length; i++) {
    const listItem = document.createElement("li");

    listItem.textContent = modules[i];
    list.appendChild(listItem);
  }

  return list;
}

//inline function display remaining modules
const displayRemainingModules = (completedModules) => {
  const remainingModules = courseModules.slice(completedModules);

  document.getElementById("remainingModulesList").appendChild(displayModules(remainingModules));
}

//inline function study plan msg
const getStudyPlan = (studyDay = "unknown day") => {
  let studyPlan;
  adjustedDailyMinutes = (hoursPerWeek / 5).toFixed(2) * 60;

  switch (studyDay) {
    case("Complete"):
      studyPlan = "Course Completed!";
      break;
    case ("Monday"):
      studyPlan = `Applied Programming Day, study for ${adjustedDailyMinutes} minutes`;
      break;
    case("Tuesday"):
      studyPlan = `Study Day, study for ${adjustedDailyMinutes} minutes`;
      break;
    case("Wednesday"):
      studyPlan = `Lab Day, study for ${adjustedDailyMinutes} minutes`
      break;
    case("Thursday"):
      studyPlan = `Study Day, study for ${adjustedDailyMinutes} minutes`;
      break;
    case("Friday"):
      studyPlan = `Study Day, study for ${adjustedDailyMinutes} minutes`;
      break;
    case("Saturday"):
      studyPlan = "Rest Day";
      break;
    case("Sunday"):
      studyPlan = "Rest Day";
      break;
    default:
      studyPlan = "no plan";
  }

  return studyPlan;
}

//color grades
const applyDashboardColor = (percentComplete) => {
  if (percentComplete >= 75) {output.style.backgroundColor = "#c3ebcc";}
  else if (percentComplete >= 25) {output.style.backgroundColor = "#fff3cd";}
  else {output.style.backgroundColor = "#f3afb4"}
}

//generates dashboard
const generateDashboard = () => {
  //inital display cause remainingModulesList id doesnt exist
  try {  
    displayDashboard("", "",0,0,0,0,"","","","");

    const studentName = studentNameInput.value;
    const completedModules = completedModulesInput.value;

    const percentComplete = calculatePercentComplete(completedModulesInput.value, courseModules.length);
    const percentRemaining = 100 - percentComplete;

    //study day based on grade or user input
    let studyDay; 
    percentComplete == 100 ? studyDay = "Complete" : studyDay = studyDayInput.value;

    const grade = getCourseGrade(percentComplete);
    const progress = getCourseProgress(percentRemaining);
    const studyPlan = getStudyPlan(studyDay);

    //finally catch errors
    console.log("name: " + studentName);
    console.log("completed moduals: " + completedModules);
    console.log("name: " + studyDay);

    validateInputs(studentName,completedModules,studyDay);


    displayDashboard(studentName, courseModules, completedModules, totalStudyHours, percentComplete, 
      percentRemaining, grade, progress, studyDay, studyPlan);

    applyDashboardColor(percentComplete);
    displayRemainingModules(completedModules);
    
  } catch (error) {

    output.innerHTML = `

       <div class="dashboard-card">

          <h2>Error</h2>

          <ul>${error.message}</ul>

       </div>`;

     output.style.backgroundColor = "#f8d7da";

  }
}

//display dashboard helper function
const displayDashboard = (studentName, courseModules, completedModules, totalStudyHours, percentComplete, 
  percentRemaining, grade, progress, studyDay, studyPlan) => {
  output.innerHTML = `
          <div class="dashboard-card">

            <h2>My Study Dashboard</h2>

            <p><strong>Name:</strong> ${studentName}</p>

            <p><strong>Total Modules:</strong> ${courseModules.length}</p>

            <p><strong>Completed Modules:</strong> ${completedModules}</p>

            <p><strong>Total Study Hours:</strong> ${totalStudyHours}</p>

            <p><strong>Percent Complete:</strong>${percentComplete.toFixed(0)}%</p>

            <p><strong>Percent Remaining:</strong>${percentRemaining.toFixed(0)}%</p>

            <p><strong>Current Grade:</strong> ${grade}</p>

            <p><strong>Progress Status:</strong>${progress}</p>

            <p><strong>Study Day:</strong>${studyDay}</p>

            <p><strong>Today's Plan:</strong>${studyPlan}</p>

            <p><strong>Remaining Modules</strong><div id="remainingModulesList"></div></p>

        </div>`;
}

//reset dashboard
const resetDashboard = () => {
  studentNameInput.value = "";
  studyDayInput.value = "";
  output.innerHTML = "";
  completedModulesInput.value = 0;
}

//error checking inputs
const validateInputs = (studentName, completedModules, studyDay) => {
  let errors = []

  //empty name
  if (studentName.trim() === "") {
   errors.push(`<li>Please enter a name.</li>`);
  }
  //moduales out of range
  if ((completedModules < 0 ) || (completedModules > 10)) {
    errors.push(`<li>Completed modules must be between 0 and 10.</li>`);
  }
  //empty study day
  if (studyDay.trim() === "") {
   errors.push(`<li>Please select a study day.</li>`);
  }

  if (errors.length > 0) {

    throw new Error(errors.join(""));

  }
}

//events
generateButton.addEventListener("click", generateDashboard);
resetButton.addEventListener("click", resetDashboard);

//unit tests
const runUnitTests = () => {
  console.assert(getCourseGrade(90) === "A", "A failed");
  console.assert(getCourseGrade(80) === "B", "B failed");
  console.assert(getCourseGrade(70) === "C", "C failed");
  console.assert(getCourseGrade(60) === "D", "D failed");
  console.assert(getCourseGrade(50) === "F", "F failed");

  console.assert(getCourseProgress(0) === "Finished!", "course prgress 0 failed")
  console.assert(getCourseProgress(101) === "Invalid entry.", "invalid entry course progress failed")
  console.assert(getStudyPlan("") === "no plan", "empty plan failed");
  console.assert(getStudyPlan("Complete") === "Course Completed!", "complete plan failed");
  console.assert(calculatePercentComplete(completedModulesInput.value, courseModules.length) === 0, "percent comp failed");
}