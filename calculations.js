export function calculatePercentComplete(completed, total) {
  return ((completed / total) * 100);
}

// function calculateStudyHours(modules, hoursPerModule = 6){
//   return modules * hoursPerModule;
// }


//ui related functions
export const getCourseGrade = (percentComplete) => {
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

export const getCourseProgress = function(percentRemaining) {
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

export const getStudyPlan = (studyDay = "unknown day", hoursPerWeek) => {
  let studyPlan;
  let adjustedDailyMinutes = (hoursPerWeek / 5).toFixed(2) * 60;

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