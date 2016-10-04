// var message = 'hello';
// strong typing and default values
// function saySomething(message: string = 'whats up') {
// 	console.log(message);
// }
// saySomething(200);  // throws error
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'whats up'; }
        return message + ' something';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('hello!');
//# sourceMappingURL=magic.js.map