(function (window) {
    var helloSpeaker = {};
    var spreakWord = "Hi ";
    helloSpeaker.speak = function (names) {
        console.log(spreakWord + " " + names);
    }
    window.helloSpeaker = helloSpeaker;
})(window);