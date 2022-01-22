const inquirer = require("inquirer");
const fs = require("fs");
const createEngineer = require("./createEngineer.js");
const createIntern = require("./createIntern.js");
const createManager = require("./createManager.js");
const {
  manager_questions,
  engineer_questions,
  intern_questions,
  menu,
} = require("./constants.js");

const team = {
  manager: {},
  engineers: [],
  interns: [],
};

const generate = function () {
  fs.writeFile(
    "index.html",
    `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Team profile generated</title>
    </head>
    <body>
      <h1>Our Team</h1>
  
        <section id="team-lead">
          ${createManager(team.manager)}
      
        </section>

        <section id="team-members">
        ${team.engineers.map((engineer) => createEngineer(engineer)).join("")}
        ${team.interns.map((intern) => createIntern(intern)).join("")}
      </section>
    </body>
  </html>`,
    (err) => {
      return;
    }
  );
};

const init = async () => {
  const firstAnswers = await inquirer.prompt(manager_questions);

  team.manager = {
    name: firstAnswers.managerName,
    id: firstAnswers.managerID,
    email: firstAnswers.managerEmail,
    office: firstAnswers.managerOffice,
  };

  while (true) {
    const menu_answers = await inquirer.prompt(menu);
    if (menu_answers.add_members === "Finish team") {
      break;
    }

    if (menu_answers.add_members === "Add an engineer") {
      const create_engineer = await inquirer.prompt(engineer_questions);
      team.engineers.push({
        name: create_engineer.engineer_name,
        id: create_engineer.engineer_ID,
        email: create_engineer.engineer_email,
        github: create_engineer.engineer_github,
      });
    } else if (menu_answers.add_members === "Add an intern") {
      const create_intern = await inquirer.prompt(intern_questions);
      team.interns.push({
        name: create_intern.intern_name,
        id: create_intern.intern_ID,
        email: create_intern.intern_email,
        school: create_intern.intern_school,
      });
    }
  }
  console.log(team);
  generate();
};
init();

module.exports = {
  createEngineer,
  createIntern,
  generate,
};
