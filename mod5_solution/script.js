document.addEventListener("DOMContentLoaded",
function(event){

function sayHello (event) {
    this.textContent ="Di esto!";
    var name = 
    document.getElementById("name").value;
    var mesaage = "<h2>Hola " + name + "!</h2>";

    document
    .getElementById("content")
    //.textContent=mesaage;
    .innerHTML = mesaage;

    if (name==="jair"){
        var title = 
        document
        .querySelector("#title")
        .textContent;
        title += " & lovin' it";

        document
        .querySelector("h1")
        .textContent=title;
    }
}

        document.querySelector("button")
        .addEventListener("click",sayHello);
       //.onclick=sayHello;
}
);
