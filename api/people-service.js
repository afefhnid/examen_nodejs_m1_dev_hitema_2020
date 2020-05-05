const fs = require("fs");

module.exports = class PeopleService {
  constructor() {
    this.peoples = JSON.parse(
      fs.readFileSync(__dirname + "/people.json", "utf8")
    );
  }

  updatePeople(id, people) {
    // To be implemented!
    fs.readFile(`${__dirname}/people.json`, "utf8", function (_err, data) {
      const dataNew = JSON.parse(data);
      const reqs = people;

      dataNew.push(reqs);
      fs.writeFile(
        `${__dirname}/people.json`,
        JSON.stringify(people),
        function (err) {
          // eslint-disable-next-line no-console
          if (err) console.log("error", err);

          return true;
        }
      );
    });
  }

  getPeople(filters) {
    // To be implemented!
    console.log(this.peoples);
    if (filters) {
      return this.peoples;
    }
  }
};
