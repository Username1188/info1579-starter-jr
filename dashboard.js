export const resetDashboard = () => {
  studentNameInput.value = "";
  studyDayInput.value = "";
  output.innerHTML = "";
  completedModulesInput.value = 0;
};

export const displayDashboard = (
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
) => {
  output.innerHTML = `
          <div class="dashboard-card">

            <h2>My Study Dashboard</h2>

            <p><strong>Name:</strong> ${studentName}</p>

            <p><strong>Total Modules:</strong> ${courseModules.length}</p>

            <p><strong>Completed Modules:</strong> ${completedModules}</p>

            <p><strong>Total Study Hours:</strong> ${totalStudyHours}</p>

            <p><strong>Remaining Study Hours:</strong> ${remainingHours}</p>

            <p><strong>Percent Complete:</strong>${percentComplete.toFixed(0)}%</p>

            <p><strong>Percent Remaining:</strong>${percentRemaining.toFixed(0)}%</p>

            <p><strong>Current Grade:</strong> ${grade}</p>

            <p><strong>Progress Status:</strong>${progress}</p>

            <p><strong>Study Day:</strong>${studyDay}</p>

            <p><strong>Today's Plan:</strong>${studyPlan}</p>

            <p><strong>Remaining Modules</strong><div id="remainingModulesList"></div></p>

        </div>`;
};

//helper function for displayRemainingModules
export const displayModules = (modules) => {
  const list = document.createElement("ul");

  for (let i = 0; i < modules.length; i++) {
    const listItem = document.createElement("li");

    listItem.textContent = modules[i].moduleName;
    list.appendChild(listItem);
  }

  return list;
};

export const displayRemainingModules = (remainingModules) => {
  document
    .getElementById("remainingModulesList")
    .appendChild(displayModules(remainingModules));
};

export const applyDashboardColor = (percentComplete) => {
  if (percentComplete >= 75) {
    output.style.backgroundColor = "#c3ebcc";
  } else if (percentComplete >= 25) {
    output.style.backgroundColor = "#fff3cd";
  } else {
    output.style.backgroundColor = "#f3afb4";
  }
};
