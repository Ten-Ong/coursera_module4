(function (window) {
    var sayGoodbye = {};
    var spreakWord = "Goodbye ";
    sayGoodbye.speak = function (names) {
        console.log(spreakWord + " " + names)
    }
    window.sayGoodbye = sayGoodbye;
})(window);

