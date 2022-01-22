const manager_questions = [
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
];

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

module.exports = {
  manager_questions,
  engineer_questions,
  intern_questions,
  menu,
};
