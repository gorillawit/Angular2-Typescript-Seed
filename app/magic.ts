// var message = 'hello';

// strong typing and default values
// function saySomething(message: string = 'whats up') {
// 	console.log(message);
// }
// saySomething(200);  // throws error

class Greeter {
	saySomething(message:string = 'whats up') {
		return message + ' something';
	}
}

var greeter = new Greeter();
greeter.saySomething('hello!');
