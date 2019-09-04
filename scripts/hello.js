
class NameClass {
    constructor() {
        this.name="World";
    }
}

var nameObject = new NameClass();

function helloWorld() {
    alert("Hi " + nameObject.name);
}

function letsGetSomeDataAsynchronously(year, month, day, onDataReceived) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            onDataReceived(this.responseText);
        }
    };
    xhttp.open("GET", `https://whatsprintis.it/on/${year}/${month}/${day}`, true);
    xhttp.send();
}

var onAsyncResponseReceived = function(response) {
    document.getElementById("demo").innerHTML = response;
}

var onLoadCallBack = () => {
    var submitButton = document.getElementById("submitName");
    var submitButtonCallback = () => {
        var textbox = document.getElementById("nameBox");
        nameObject.name = textbox.value;
        textbox.value = "";
    };
    submitButton.addEventListener("click", submitButtonCallback);

    // async call here!!!
    letsGetSomeDataAsynchronously(2019, 9, 3, onAsyncResponseReceived);
}


window.onload = onLoadCallBack;

function doSomething() {
    // Make some rest api call or do some math or something.
}