var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();
  var arr = cmd.split(" ");
  //[cmd input input input input]

  try { commands[arr[0]](arr.slice(1).join (" "), done); }
  catch (err) {
    process.stdout.write(err.toString() + '\n');
    process.stdout.write('prompt > ');
  }
});

var done = function(output) {
  process.stdout.write(output)
  process.stdout.write('\nprompt > ')
}
