const createIntern = (intern) => {
  return `<div class="card">
    <h3>Intern</h3>
    <p>Name: ${intern.name}</p>
    <p>ID: ${intern.id}</p>
    <p>Email: ${intern.email}</p>
    <p>School: ${intern.school}</p>
  </div>`;
};

module.exports = createIntern;
