let data_info = document.getElementById("data-info");
let load_btn = document.getElementById("load_btn");
let counter = 0;

load_btn.addEventListener("click", function () {
    let request = new XMLHttpRequest();
    request.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json");
    request.onload = function () {
        let data = JSON.parse(request.responseText);
        // console.log(data[0]);
        genHtml(data);
    };
    request.send();
    // load_btn.classList.add("hide-me");
    // counter++;
    setTimeout(function () {
        load_btn.style.display = "block";
    }, 1000)
    load_btn.style.display = "none";
});


function genHtml(data) {
    data_info.insertAdjacentHTML("beforeEnd", "<p>Testing 123</p>");
}

