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

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)
let courseModules = ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6", "Module 7", "Module 8", "Module 9", "Module 10"];
let completedModules = ["Module 1", "Module 2"];
let name = 'jeremy';
let totalModules = 10;
let isEnrolled = true;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.
let welcomeMsg = `Welcome ${name}!`;

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
let hoursPerWeek = 6;
let totalStudyHours = totalModules * hoursPerWeek;

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
let dailyStudyHours = (hoursPerWeek / 7).toFixed(2);
let dailyStudyMinutes = dailyStudyHours * 60;

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
let adjustedDailyHours = (hoursPerWeek / 6).toFixed(2);
let adjustedDailyMinutes = adjustedDailyHours * 60;

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100
let modulesFinsihed = 2;
let percentComplete = ((modulesFinsihed / totalModules) * 100).toFixed(2);
let percentRemaining = 100 - percentComplete;


//mod 2
let courseProgress;
let courseGrade;
//find % remaining and display msg
modulesFinsihed = window.prompt("Enter the number of completed modules (1-10): ");
percentComplete = ((modulesFinsihed / totalModules) * 100).toFixed(2);
percentRemaining = 100 - percentComplete;

if (percentRemaining == 0){
  courseProgress = "Finished!";
} else if (percentRemaining >= 1 && percentRemaining < 25){
  courseProgress = "Almost Finished!";
} else if (percentRemaining >= 25 && percentRemaining < 75){
  courseProgress = "Making Progress";
} else if (percentRemaining >= 75 && percentRemaining <= 100){
  courseProgress = "Just Getting Started";
} else {
  courseProgress = "Invalid entry.";
}

//display course grade msg
if (percentComplete < 60){
  courseGrade = "F";
} else if (percentComplete >= 60 && percentComplete < 70){
  courseGrade = "D";
} else if (percentComplete >= 70 && percentComplete < 80){
  courseGrade = "C";
} else if (percentComplete >= 80 && percentComplete < 90){
  courseGrade = "B";
}else if (percentComplete >= 90 && percentComplete <= 100){
  courseGrade = "A";
}  else {
  courseGrade = "Invalid entry.";
}

//study days
let studyDay;
let studyPlan;
if (percentComplete == 100) {
  studyDay = "complete";
} else {
  studyDay = window.prompt("What day of the week is it? (Monday-Sunday): ");
}

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
    studyDay = "unknown day";
    studyPlan = "no plan";
}


// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
display("Welcome Message", welcomeMsg);
display("My Name", name);
display("Enrolled", isEnrolled);
display("Total Modules", totalModules);
display("Daily Study Hours (7 days)", dailyStudyHours);
display("Daily Study Minutes (7 days)", dailyStudyMinutes);
display("Daily Study Hours (with rest day)", adjustedDailyHours);
display("Daily Study Minutes (with rest day)", adjustedDailyMinutes);

// TODO: Display your results with a % sign
display("Percent Complete", `${percentComplete}%`);
display("Percent Remaining", `${percentRemaining}%`);

//mod 2
display("Current Progress",courseProgress);
display("Grade",courseGrade);
display(studyDay,studyPlan);