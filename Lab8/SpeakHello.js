(function (global) {
    let SpeakHello = {};
    let speakWord = "Hello";
    SpeakHello.say = function (fullName) {
        console.log(speakWord + " " + fullName);
    };
    global.SpeakHello = SpeakHello;
})(window);