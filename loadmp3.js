console.log("loadmp3.js");

// Load buffer asynchronously
var request = new XMLHttpRequest();
request.open("GET", "http://pjslack.net/BedofNorthernLights.mp3", true);
request.responseType = "arraybuffer";

request.onload = function () {
    // Asynchronously decode the audio file data in request.response
    postMessage(request.response);
};


request.onerror = function () {
    alert('BufferLoader: XHR error');
};

request.send();