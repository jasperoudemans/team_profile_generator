const createManager = (manager) => {
  return `<div class="card">
    <h3>Manager</h3>
    <p>Name: ${manager.name}</p>
    <p>ID: ${manager.id}</p>
    <p>Email: ${manager.email}</p>
    <p>Office: ${manager.office}</p>
  </div>`;
};

module.exports = createManager;
