let express = require("express");
let date-fns = require("date-fns/addDays");


let app = express();


app.get('/',(request,response) => {
    let date = new Date();
    let result = addDays(new Date(date.getFullYear(),date.getMonth(),date.getDate()), 100);
    response.send(`${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );

});

module.exports = app;
