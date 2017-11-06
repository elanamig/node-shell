var fs = require('fs');

function date(value) { process.stdout.write(new Date().toString()) }

function pwd(value) { process.stdout.write(__dirname.toString()) }

function ls(value) {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write("prompt > ");
  });
}

function echo (input) {
  process.stdout.write(input);
}

function cat (file) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    process.stdout.write(data + "\n");
    process.stdout.write("prompt > ");
  });
}

module.exports = {
  date,
  pwd,
  ls,
  echo,
  cat
}
