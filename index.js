const inquirer = require("inquirer");
const fs = require("fs");
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

const createEngineer = (engineer) => {
  return `<div class="card">
  <h3>Engineer</h3>
  <p>Name: ${engineer.name}</p>
  <p>ID: ${engineer.id}</p>
  <p>Email: ${engineer.email}</p>
  <p>GitHub: ${engineer.github}</p>
</div>`;
};

const createIntern = (intern) => {
  return `<div class="card">
  <h3>Intern</h3>
  <p>Name: ${intern.name}</p>
  <p>ID: ${intern.id}</p>
  <p>Email: ${intern.email}</p>
  <p>School: ${intern.school}</p>
</div>`;
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
        <div class="card">
          <h3>Manager</h3>
          <p>Name: ${team.manager.name}</p>
          <p>ID: ${team.manager.id}</p>
          <p>Email: ${team.manager.email}</p>
          <p>Office: ${team.manager.office}</p>
        </div>
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
