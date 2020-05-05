const express = require("express");
const bodyParser = require("body-parser");
const PeopleService = require("./people-service");
const peopleService = new PeopleService();
const app = express();
const v1 = express.Router();
const basicAuth = require("../basic-auth/basic-auth").basicAuth;
// To be implemented!

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1", v1);

v1.put("/people/:id", basicAuth, async (request, response) => {
  const id = request.params.id;
  const people = request.body;
  try {
    const result = await peopleService.updatePeople(people, id);
    if (!result.isFind) return response.sendStatus(404);

    response.sendStatus(200);
  } catch (e) {
    console.log("error occurs : ", e);
    response.sendStatus(400);
  }
});

v1.get("/people/:filters", async (request, response) => {
  const filters = request.params.filters;
  const people = await peopleService.getPeople(filters);
  response.send(people);
});
v1.get("/people", async (request, response) => {
  const filters = request.params.filters;
  const people = await peopleService.getPeople(filters);
  response.send(people);
});

module.exports = app;
