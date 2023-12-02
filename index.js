const app = require("./app");

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    console.error("ayaya something bad happened");
  } else {
    console.log(`Servier is listening on ${port}`);
  }
});
