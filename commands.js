var fs = require('fs');
var request = require('request');

function date(value, done) { done(new Date().toString()) }

function pwd(value, done) { done(__dirname.toString()) }

function ls(value, done) {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    done(files.join('\n'));
  });
}

function echo (input, done) {
  done(input);
}

function cat (file, done) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    done(data + "\n");
  });
}

function head (file, done) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    var splitData = data.toString().split("\n");

    var headStuff = splitData.slice(0,5).join("\n");

    done(headStuff + "\n");
  });
}

function tail (file, done) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    var splitData = data.toString().split("\n");

    var tailStuff = splitData.slice(-6).join("\n");

    done(tailStuff);
  });
}

function sort(file, done) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    var splitData = data.toString().split("\n");

    var sortStuff = splitData.sort().join("\n");

    done(sortStuff);
  });
}

function wc(file, done) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    var splitData = data.toString().split("\n");

    done(splitData.length + "\n");
  });
}

function uniq (file, done) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    var splitData = data.toString().split("\n");

    var noDupes = splitData.filter(function(line, idx) {
      return line !== splitData[idx-1]
    }).join("\n");

    done(noDupes);
  });
}

function curl(url, done) {
  request(url, function (error, response, body) {
    if (error) throw error;
    else done(body + '\n');
  });
}

function find(dir, done) {
  fs.readdir('.', function(err, files) {
    if (err) throw err;

    if (dir != '.') {
      if (files.indexOf(dir)!=-1) {
        fs.readdir(dir, function(err, files) {
          if (err) throw err;
          done(files.join('\n'));
        });
      } else {
        console.log('=======>' +dir);
        files.filter(elem => fs.statSync (elem).isDirectory()).forEach(elem => find(elem, done));
      }
    } else {
      done(files.join('\n'));
    }

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
  uniq,
  curl,
  find
}
