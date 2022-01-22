const createIntern = require("./createIntern.js");

it("Creates an intern with provided info", () => {
  const sampleIntern = {
    name: "Ringo",
    id: "03",
    email: "ringo@mail.com",
    school: "School of Beatles",
  };

  const ringo = createIntern(sampleIntern);
  expect(ringo).toBe(`<div class="card">
    <h3>Intern</h3>
    <p>Name: Ringo</p>
    <p>ID: 03</p>
    <p>Email: ringo@mail.com</p>
    <p>School: School of Beatles</p>
  </div>`);
});
