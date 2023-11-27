const express = require("./app");

const port = 5000;

app.listen(port, () => {
  if (err) {
    console.error("ayaya something bad happened");
  } else {
    console.log(`Servier is listening on ${port}`);
  }
});
