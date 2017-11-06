var commands = require('./commands');

var asyncFuncs = ['ls', 'cat', 'head', 'tail', 'sort', 'wc','uniq'];

// console.log(process)

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();
  var arr = cmd.split(" ");
  //[cmd input input input input]

  commands[arr[0]](arr.slice(1).join (" "));

  if (!asyncFuncs.includes(arr[0])) process.stdout.write('\nprompt > ');
});
