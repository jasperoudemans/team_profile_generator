const inquirer = require("inquirer");

const team = {
  manager: {},
  engineers: [],
  interns: [],
};

const engineer_questions = [
  {
    type: "input",
    message: "Enter engineer name..",
    name: "engineer_name",
  },
  {
    type: "input",
    message: "Enter engineer ID..",
    name: "engineer_ID",
  },
  {
    type: "input",
    message: "Enter engineer email..",
    name: "engineer_email",
  },
  {
    type: "input",
    message: "Enter engineer GitHub username..",
    name: "engineer_github",
  },
];

const intern_questions = [
  {
    type: "input",
    message: "Enter intern name",
    name: "intern_name",
  },
  {
    type: "input",
    message: "Enter intern ID",
    name: "intern_ID",
  },
  {
    type: "input",
    message: "Enter intern email",
    name: "intern_email",
  },
  {
    type: "input",
    message: "Enter intern school",
    name: "intern_school",
  },
];

const menu = [
  {
    type: "list",
    choices: ["Add an engineer", "Add an intern", "Finish team"],
    message: "Add team member or finish team?",
    name: "add_members",
  },
];

const init = async () => {
  const firstAnswers = await inquirer.prompt([
    {
      type: "input",
      message: "Enter the team manager's name..",
      name: "managerName",
    },
    {
      type: "input",
      message: "Team manager's employee ID..",
      name: "managerID",
    },
    {
      type: "input",
      message: "Team manager's email address..",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "Team manager's office number..",
      name: "managerOffice",
    },
  ]);

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
};
init();
