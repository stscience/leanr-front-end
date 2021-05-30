const request = new XMLHttpRequest();

let category_list = document.getElementById("category-list");
let goods_list = document.getElementById("goods-list");
let category_page_btn = document.getElementById("category_page");
let home_page_btn = document.getElementById("home_page");
let categoryBlock = document.getElementById("category");
let exactCategoryBlock = document.getElementById("exact_category");

let isCateLoaded = false;

let ids = [128122722, 128122830, 128122909];

home_page_btn.addEventListener("click", function () {
    window.location.reload(false);
});

function loadGoods(id) {
    console.log("loadGoods with id: " + id);
    categoryBlock.style.display = "none";
    exactCategoryBlock.style.display = "block";
    if (id === undefined) {
        id = ids[Math.round(Math.random() * (ids.length - 1))];
    }
    let url = "source/" + id + ".json";
    console.log(url);
    request.open("GET", url);
    request.onload = function () {
        let data = JSON.parse(request.responseText);
        fillGoodsList(data);
    };
    request.send();
}

category_page_btn.addEventListener("click", function () {
    categoryBlock.style.display = "block";
    exactCategoryBlock.style.display = "none";
    goods_list.innerHTML = "";
    if (isCateLoaded) {
        return;
    }
    request.open("GET", "source/category.json");
    request.onload = function () {
        let data = JSON.parse(request.responseText);
        loadCategories(data);
    };
    request.send();
    isCateLoaded = true;
});

function loadCategories(data) {
    console.log(data.length);
    let res = "";
    for (let i = 0; i < data.length; i++) {
        res += "<div id=\"category-list\">\n" +
            "        <div class=\"cate\">\n" +
            "            <p>Id: " + data[i].id + "</p>\n" +
            "            <p>Name: " + data[i].name + "</p>\n" +
            "            <p>Shortname: " + data[i].shortname + "</p>\n" +
            "            <p>Notes: " + data[i].notes + "</p>\n" +
            "        <p><a onclick='loadGoods(" + data[i].id + ")'>Show more goods</a></p>\n" +
            "        </div>\n" +
            "    </div>";
    }
    category_list.insertAdjacentHTML("beforeend", res);
}

function fillGoodsList(data) {
    console.log(data.length);
    let res = "";
    for (let i = 0; i < data.length; i++) {
        res += "<div id=\"goods-list\">\n" +
            "        <div class=\"good\">\n" +
            "            <p>Id: " + data[i].id + "</p>\n" +
            "            <p>Name: " + data[i].name + "</p>\n" +
            "            <p>Shortname: " + data[i].shortname + "</p>\n" +
            "            <p>Description: " + data[i].description + "</p>\n" +
            "            <p>Price: ₴" + data[i].price + "</p>\n" +
            "            <p><img src='" + data[i].url + "' /></p>\n" +
            "        </div>\n" +
            "    </div>";
    }
    goods_list.insertAdjacentHTML("beforeend", res);
}