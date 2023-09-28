var uri_values = window.location.search.slice(1, window.location.search.length).split("&");

var coffe_type;
uri_values[0] && (uri_values[0].slice(5) == "hot" || uri_values[0].slice(5) == "cold")
    ? (coffe_type = uri_values[0].slice(5))
    : (coffe_type = "hot");

var coffee_names = Object.keys(coffee_s[coffe_type]);
var coffee;
if (uri_values[1] && coffee_names.includes(uri_values[1])) {
    uri_values[1].slice(9);
} else {
    coffee = coffee_names[0];
}

function setCoffee(coffe_name) {
    document.querySelector("#cnt-main h2").innerHTML = coffe_type + " COFFEE - " + coffe_name.replaceAll("_", " ");
    document.querySelector("#coffee").src = "./src/product/coffee/" + coffee_s[coffe_type][coffe_name].img;
    document.querySelector("#odr > h1 > span").innerHTML = coffee_s[coffe_type][coffe_name].price;
    document.querySelector("#in-nu > p:nth-child(2)").innerHTML =
        coffee_s[coffe_type][coffe_name].ingridients.join("<br>");
    document.querySelector("#in-nu > p:nth-child(4)").innerHTML =
        coffee_s[coffe_type][coffe_name].nutrition.join("<br>");
}

setCoffee(coffee);

var curr_coffee = 0;
function switchCoffee(dir) {
    if (dir == "l") {
        curr_coffee <= 0 ? (curr_coffee = coffee_names.length - 1) : curr_coffee--;
        // console.log(curr_coffee, coffee_names[curr_coffee]);
    } else {
        curr_coffee >= coffee_names.length - 1 ? (curr_coffee = 0) : curr_coffee++;
        // console.log(curr_coffee, coffee_names[curr_coffee]);
    }
    setCoffee(coffee_names[curr_coffee]);
}
