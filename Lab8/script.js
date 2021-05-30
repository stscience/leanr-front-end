(function () {
    let holder = {};
    holder.names = ["Bill Rodriguez", "John Brown", "jen Davis", "Jason Williams", "Paul Davis", "Frank Jay", "Steven Johnson", "Larry Miller", "Paula Garcia", "Laura Smith", "Jim Garcia"];

    console.log("Program says bye with name that start with 'j' or 'J' and hi otherwise");
    for (let i = 0; i < holder.names.length; i++) {

        // todo refactor
        let firstNameLetter = holder.names[i].charAt(0).toUpperCase();
        if (firstNameLetter === "J") {
            window.SpeakGoodBye.say(holder.names[i])
            continue;
        }
        window.SpeakHello.say(holder.names[i]);
    }
    console.log("Program says bye when first name and last name ends with 'a' or 'A' and hi otherwise");
    for (let i = 0; i < holder.names.length; i++) {
        let names = holder.names[i].split(" ");
        let firstNameLastLetter = names[0].charAt(names[0].length - 1).toUpperCase();
        let lastNameLastLetter = names[1].charAt(names[1].length - 1).toUpperCase();
        if (firstNameLastLetter === "A" && lastNameLastLetter === "A") {
            window.SpeakGoodBye.say(holder.names[i])
            continue;
        }
        window.SpeakHello.say(holder.names[i]);
    }
})();