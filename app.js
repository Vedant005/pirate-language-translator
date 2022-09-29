
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getServerURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("Error has occured", error);
  alert("There is some issue with, try again later");
}

function clickHandler() {
  var inputText = txtInput.value;
  fetch(getServerURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);