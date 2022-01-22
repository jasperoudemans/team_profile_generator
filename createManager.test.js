const createManager = require("./createManager.js");

it("Creates a manager with provided info", () => {
  const sampleManager = {
    name: "Jeff",
    id: "01",
    email: "jeff@mail.com",
    office: "01",
  };
  expect(createManager(sampleManager)).toBe(`<div class="card">
    <h3>Manager</h3>
    <p>Name: ${sampleManager.name}</p>
    <p>ID: ${sampleManager.id}</p>
    <p>Email: ${sampleManager.email}</p>
    <p>Office: ${sampleManager.office}</p>
  </div>`);
});
