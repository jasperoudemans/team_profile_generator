const createEngineer = (engineer) => {
  return `<div class="card">
    <h3>Engineer</h3>
    <p>Name: ${engineer.name}</p>
    <p>ID: ${engineer.id}</p>
    <p>Email: ${engineer.email}</p>
    <p>GitHub: ${engineer.github}</p>
  </div>`;
};

module.exports = createEngineer;
