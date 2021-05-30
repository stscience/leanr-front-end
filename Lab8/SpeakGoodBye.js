(function (global) {
    let SpeakGoodBye = {};
    let speakWord = "Good Bye";
    SpeakGoodBye.say = function (fullName) {
        console.log(speakWord + " " + fullName);
    };
    global.SpeakGoodBye = SpeakGoodBye;
})(window);