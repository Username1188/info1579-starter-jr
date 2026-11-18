export function displayDatabase(careerName, careerSkills, languages) {

  let skills = "";

  for (let i = 0; i < careerSkills.length; i++) {
    if (!(i == careerSkills.length - 1)) {
      skills += ` ${careerSkills[i]},`;
    } else {
      skills += ` ${careerSkills[i]}`;
    }
  }

  let langs = "";

  for (let i = 0; i < languages.length; i++) {
    if (!(i == languages.length - 1)) {
      langs += ` ${languages[i]},`;
    } else {
      langs += ` ${languages[i]}`;
    }
  }

    output.innerHTML += `
          <div class="dashboard-card">

            <h2>${careerName}</h2>

            <p><strong>Skills</strong></p>
            
            <p>└${skills}</p>

            <p><strong>Languages</strong></p>

            <p>└${langs}</P>
            
            </div>`
}

export function resetDatabase(){
  nameSearch.value = "";
  skillSearch.value = "";
  languagueSearch.value = "";
  sortInput.value = "Alphabetical";
  searchButton.click();
}