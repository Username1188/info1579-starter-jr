import { calculatePercentComplete, getCourseGrade, getCourseProgress, getStudyPlan } from "./calculations.js";


export const validateInputs = (studentName, completedModules, studyDay) => {
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

export const runUnitTests = (courseModules, completedModulesInput) => {
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