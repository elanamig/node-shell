var commands = require('./commands');

var asyncFuncs = ['ls'];

// console.log(process)

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();

  commands[cmd]();

  if (!asyncFuncs.includes(cmd)) process.stdout.write('\nprompt > ');
});
