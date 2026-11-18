export function sortCareers(sort, array){
  switch (sort) {
    case ("Skills desc"):
      return array.sort((a,b)=> b.skills.length - a.skills.length);

    case ("Skills asc"):
      return array.sort((a,b)=> a.skills.length - b.skills.length);

    case ("Reverse"):
      return array.reverse();

    //aplhabetacal
    default:
      return array;
  }
}

export function searchName(query, array) {
  //sanitize query (split into words and voids whitespace)
  const queryArray = query.toLowerCase().trim().split(" ").filter(word => {
      return (!(word == ""));
    });

  const careerList = array.filter(career => {
    //convert career name to string[]
    let nameArray = career.name.toLowerCase().split(" ");
    
    //proitize search in phrase (no white space) 
    if (nameArray.join("").includes(queryArray.join(""))) {
      return career;
    }
    //then search per word baises
    for (let i = 0; i < nameArray.length; i++) {
      for (let q = 0; q < queryArray.length; q++) {
        if (nameArray[i].includes(queryArray[q])) {
          return career;
        }
      }
    }
  });

   return careerList;
}

export function searchSkills(query, array) {
  //sanitize query (split into words and voids whitespace)
  const queryArray = query.toLowerCase().trim().split(" ").filter(word => {
      return (!(word == ""));
    });

  const careerList = array.filter(career => {
    //proitize search in phrase (no white space) 
    if (career.skills.join("").toLowerCase().includes(queryArray.join(""))) {
      return career;
    }
    //then search per word baises
    for (let i = 0; i < career.skills.length; i++) {
      for (let q = 0; q < queryArray.length; q++) {
        if (career.skills[i].toLowerCase().includes(queryArray[q])) {
          return career;
        }
      }
    }
  });

   return careerList;
}

export function searchlanguages(query, array) {
  //sanitize query (split into words and voids whitespace)
  const queryArray = query.toLowerCase().trim().split(" ").filter(word => {
      return (!(word == ""));
    });

  const careerList = array.filter(career => {
    //proitize search in phrase (no white space) 
    if (career.languages.join("").toLowerCase().includes(queryArray.join(""))) {
      return career;
    }
    //then search per word baises
    for (let i = 0; i < career.languages.length; i++) {
      for (let q = 0; q < queryArray.length; q++) {
        if (career.languages[i].toLowerCase().includes(queryArray[q])) {
          return career;
        }
      }
    }
  });

   return careerList;
}