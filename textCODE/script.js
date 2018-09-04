////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Heart /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//////////// Hide heart and download button ////////////

var heartText = document.getElementById("heart");
heartText.style.visibility = "hidden";

var downloadHeart = document.getElementById("downloadHeart");
downloadHeart.style.visibility = "hidden";


function chooseHeart() {

  //////////// Display heart shape when clicked ////////////

  var a = document.getElementById("heart");

  var b = document.getElementById("downloadHeart");

  if (a.style.visibility == "hidden") {
    a.style.visibility = "visible";
  }

  if (b.style.visibility == "hidden") {
    b.style.visibility = "visible";
  }

  //////////// Text to shape ////////////

  var textToShape = document.getElementById("inputTextToShape").value;
  i = -1;
  var elem = document.getElementById("heart");
  elem.innerText = elem.innerText.replace(/[^\n|\r|\t|\s+]/g, function() {
    return textToShape[++i]
  });
}
////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Moon //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//////////// Hide moon and download button ////////////


var moonText = document.getElementById("moon");
moonText.style.visibility = "hidden";

var downloadMoon = document.getElementById("downloadMoon");
downloadMoon.style.visibility = "hidden";

function chooseMoon() {

  //////////// Display moon shape when clicked ////////////

  var c = document.getElementById("moon");
  var d = document.getElementById("downloadMoon");

  if (c.style.visibility == "hidden") {
    c.style.visibility = "visible";
  }

  if (d.style.visibility == "hidden") {
    d.style.visibility = "visible";
  }

  //////////// Text to shape ////////////

  var textToShape = document.getElementById("inputTextToShape").value;
  i = -1;
  var elem = document.getElementById("moon");
  elem.innerText = elem.innerText.replace(/[^\n|\r|\t|\s+]/g, function() {
    return textToShape[++i]
  });
}
////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Teardrop //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//////////// Hide teardrop and download button ////////////

var teardropText = document.getElementById("teardrop");
teardropText.style.visibility = "hidden";

var downloadTeardrop = document.getElementById("downloadTeardrop");
downloadTeardrop.style.visibility = "hidden";


function chooseTeardrop() {

  //////////// Display heart shape when clicked ////////////

  var e = document.getElementById("teardrop");

  var f = document.getElementById("downloadTeardrop");

  if (e.style.visibility == "hidden") {
    e.style.visibility = "visible";
  }

  if (f.style.visibility == "hidden") {
    f.style.visibility = "visible";
  }

  //////////// Text to shape ////////////

  var textToShape = document.getElementById("inputTextToShape").value;
  i = -1;
  var elem = document.getElementById("teardrop");
  elem.innerText = elem.innerText.replace(/[^\n|\r|\t|\s+]/g, function() {
    return textToShape[++i]
  });
}


////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// Save as .txt /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//////////// Save heart ////////////

function downloadLinkHeart() {

  var textToSave = document.getElementById("heart").innerHTML;
  var textToSaveAsBlob = new Blob([textToSave], {
    type: "text/plain"
  });
  var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
  var fileNameToSaveAs = "heart";

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.href = textToSaveAsURL;
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);

  downloadLink.click();

  function destroyClickedElement(event) {
    document.body.removeChild(event.target);
  }
}

//////////// Save moon ////////////

function downloadLinkMoon() {

  var textToSave = document.getElementById("moon").innerHTML;
  var textToSaveAsBlob = new Blob([textToSave], {
    type: "text/plain"
  });
  var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
  var fileNameToSaveAs = "moon";

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.href = textToSaveAsURL;
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);

  downloadLink.click();

  function destroyClickedElement(event) {
    document.body.removeChild(event.target);
  }
}

//////////// Save teardrop ////////////

function downloadLinkTeardrop() {

  var textToSave = document.getElementById("teardrop").innerHTML;
  var textToSaveAsBlob = new Blob([textToSave], {
    type: "text/plain"
  });
  var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
  var fileNameToSaveAs = "teardrop";

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.href = textToSaveAsURL;
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);

  downloadLink.click();

  function destroyClickedElement(event) {
    document.body.removeChild(event.target);
  }
}
