const createEngineer = require("./createEngineer.js");

it("creates an engineer with provided info", () => {
  const sample_engineer = {
    name: "Karrie",
    id: "02",
    email: "karrie@mail.com",
    github: "karrie@github.com",
  };
  const create_karrie = createEngineer(sample_engineer);
  expect(create_karrie).toBe(
    `<div class="card">
    <h3>Engineer</h3>
    <p>Name: Karrie</p>
    <p>ID: 02</p>
    <p>Email: karrie@mail.com</p>
    <p>GitHub: karrie@github.com</p>
  </div>`
  );
});
