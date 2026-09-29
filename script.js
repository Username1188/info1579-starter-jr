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

// DO NOT MODIFY
const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);
// END DO NOT MODIFY

// ADD YOUR CODE BELOW
//global functions
function calculatePercentComplete(completed, total){
  return ((completed / total) * 100).toFixed(2);
}

function calculateStudyHours(modules, hoursPerModule = 6){
  return modules * hoursPerModule;
}


// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)
let courseModules = ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6", "Module 7", "Module 8", "Module 9", "Module 10"];
let completedModules = ["Module 1", "Module 2", "Module 3"];
let name = 'jeremy';
let isEnrolled = true;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.
let welcomeMsg = `Welcome ${name}!`;

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

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100
let percentComplete = calculatePercentComplete(completedModules.length, courseModules.length);
let percentRemaining = 100 - percentComplete;


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
  for (let i = 0; i < modules.length; i++) {
    display(`Module ${i + 1}`, modules[i]);
  }
}

//inline function display completed modules
const displayCompletedModules = (...modules) => {
  return modules.join(", ");
}

const completedModulesList = () => display("Completed Modules", displayCompletedModules(...completedModules));

//obtain study day
let studyDay;

if (percentComplete == 100) {
  studyDay = "complete";
} else {
  studyDay = window.prompt("What day of the week is it? (Monday-Sunday): ");
}

//inline function study plan msg
const getStudyPlan = (studyDay = "unknown day") => {
  let studyPlan;
  adjustedDailyMinutes = (hoursPerWeek / 5).toFixed(2) * 60;

  switch (studyDay.toLowerCase()) {
    case ("monday"):
      studyPlan = `Applied Programming Day, study for ${adjustedDailyMinutes} minutes`;
      break;
    case("tuesday"):
      studyPlan = `Study Day, study for ${adjustedDailyMinutes} minutes`;
      break;
    case("wednesday"):
      studyPlan = `Lab Day, study for ${adjustedDailyMinutes} minutes`
      break;
    case("thursday"):
      studyPlan = `Study Day, study for ${adjustedDailyMinutes} minutes`;
      break;
    case("friday"):
      studyPlan = `Study Day, study for ${adjustedDailyMinutes} minutes`;
      break;
    case("saturday"):
      studyPlan = "Rest Day";
      break;
    case("sunday"):
      studyPlan = "Rest Day";
      break;
    case("complete"):
      studyPlan = "Course Completed!";
      break;
    default:
      studyPlan = "no plan";
  }

  return studyPlan;
}


// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
display("Welcome Message", welcomeMsg);
display("My Name", name);
display("Enrolled", isEnrolled);
displayModules(courseModules);
completedModulesList();
display("Daily Study Hours (7 days)", dailyStudyHours);
display("Daily Study Minutes (7 days)", dailyStudyMinutes);
display("Daily Study Hours (with rest day)", adjustedDailyHours);
display("Daily Study Minutes (with rest day)", adjustedDailyMinutes);

// TODO: Display your results with a % sign
display("Percent Complete", `${percentComplete}%`);
display("Percent Remaining", `${percentRemaining}%`);

//mod 2
display("Current Progress",getCourseProgress(percentRemaining));
display("Grade",getCourseGrade(percentComplete));
display(studyDay,getStudyPlan(studyDay));