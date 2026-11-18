import {getJoke, getQuote} from "./api.js";

const output = document.getElementById("output");
const jokeContainer = document.getElementById("jokeContainer");
const quoteContainer = document.getElementById("quoteContainer");


const aboutMeObject = {
    name:"Jeremy",
    major:"computer hardware engineering (hopefully)",
    currentJob:"unemployed",
    hobbies:["computor building","gaming"],
    skills:["making typos","living i think"]
}

output.innerHTML = `
          <div class="dashboard-card">

            <h2>${aboutMeObject.name}</h2>

            <p><strong>Major:</strong> ${aboutMeObject.major}</p>

            <p><strong>Current Job:</strong> ${aboutMeObject.currentJob}</p>
            
            <p><strong>Current Hobbies:</strong> ${aboutMeObject.hobbies.map(hobby => hobby.trim())}</p>

            <p><strong>Skills:</strong> ${aboutMeObject.skills.map(skill => skill.trim())}</p>

        </div>`

getJoke();
getQuote();