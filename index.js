var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World") + ", how are you " + chalk.blue.bgRed.bold("feeling") + " today?";
var message2 = chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz');
var message3 = chalk.red('Hello', chalk.underline.bgBlue('world') + '!');
var message4 = chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
);

console.log(message);
console.log(message2);
console.log(message3);
console.log(message4);
console.log("yeah, my eyes hurt too...")