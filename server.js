const express = require("express");

app = express();

require('./app/routes')(app);

app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});
