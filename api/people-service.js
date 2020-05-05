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

      for (var i = 0; i < dataNew.length; i++) {
        if (dataNew[i].Id === id) {
          dataNew[i] = people;
          break;
        }
      }
      fs.writeFile(
        `${__dirname}/people.json`,
        JSON.stringify(dataNew),
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
