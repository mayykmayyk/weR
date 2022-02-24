var fs = require('fs')
fs.readFile('./dist/css/main.css', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/\\/g, '/');

  fs.writeFile('./dist/css/main.css', result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
