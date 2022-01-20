const inquirer = require("inquirer");
const engineer_questions = [
  {
    type: "input",
    message: "Enter engineer name..",
    name: "engineer_name",
  },
  {
    type: "input",
    message: "Enter engineer ID..",
    name: "engineer_email",
  },
  {
    type: "input",
    message: "Enter engineer GitHub username..",
    name: "engineer_github",
  },
  {
    type: "confirm",
    message: "Would you like to add another team member?",
    name: "wish_to_continue",
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
    name: "inter_ID",
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
  {
    type: "confirm",
    message: "Would you like to add another team member?",
    name: "wish_to_continue",
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
    {
      type: "confirm",
      message: "Would you like to add another team member?",
      name: "wish_to_continue",
    },
  ]);

  console.log(firstAnswers);

  if (firstAnswers.wish_to_continue) {
    while (true) {
      const build_team_answer = await inquirer.prompt(menu);

      console.log(build_team_answer);
      if (build_team_answer.add_members === "Add an engineer") {
        const create_engineer = await inquirer.prompt(engineer_questions);
        console.log(create_engineer);
        if (!create_engineer.wish_to_continue) {
          break;
        }
      } else if (build_team_answer.add_members === "Add an intern") {
        const create_intern = await inquirer.prompt(intern_questions);
        console.log(create_intern);
        if (!create_intern.wish_to_continue) {
          break;
        }
      } else {
        return;
      }
    }
  }
};
init();
