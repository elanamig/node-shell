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

function head (file) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    var splitData = data.toString().split("\n");

    var headStuff = splitData.slice(0,5).join("\n");

    process.stdout.write(headStuff + "\n");
    process.stdout.write("prompt > ");
  });
}

function tail (file) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    var splitData = data.toString().split("\n");

    var tailStuff = splitData.slice(-6).join("\n");

    process.stdout.write(tailStuff);
    process.stdout.write("prompt > ");
  });
}

function sort(file) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    var splitData = data.toString().split("\n");

    var sortStuff = splitData.sort().join("\n");

    process.stdout.write(sortStuff);
    process.stdout.write("prompt > ");
  });
}

function wc(file) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    var splitData = data.toString().split("\n");

    process.stdout.write(splitData.length + "\n");
    process.stdout.write("prompt > ");
  });
}

function uniq (file) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    var splitData = data.toString().split("\n");

    var noDupes = splitData.filter(function(line, idx) {
      return line !== splitData[idx-1]
    }).join("\n");

    process.stdout.write(noDupes);
    process.stdout.write("prompt > ");
  });
}

module.exports = {
  date,
  pwd,
  ls,
  echo,
  cat,
  head,
  tail,
  sort,
  wc,
  uniq
}
