
class NameClass {
    constructor() {
        this.name="World";
    }
}

var nameObject = new NameClass();

function helloWorld() {
    alert("Whats up " + nameObject.name);
}

function letsGetSomeDataAsynchronously() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "demo_post.asp", true);
    xhttp.send();
}

var onLoadCallBack = () => {
    var submitButton = document.getElementById("submitName");
    var submitButtonCallback = () => {
        var textbox = document.getElementById("nameBox");
        nameObject.name = textbox.value;
        textbox.value = "";
    };
    submitButton.addEventListener("click", submitButtonCallback)
}

window.onload = onLoadCallBack;

function doSomething() {
    // Make some rest api call or do some math or something.
}