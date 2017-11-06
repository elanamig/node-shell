// console.log(process)

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === 'date') {
    process.stdout.write(new Date().toString());
  } else if (cmd === 'pwd') {
    process.stdout.write(__dirname.toString())
  }

  // process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});

