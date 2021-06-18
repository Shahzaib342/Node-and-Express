//display all 5 objects in qObj tab table
function displayObjects() {
    var table = document.getElementById("qObj-table");
    table.innerHTML = "";
    qObj().createObjects.forEach((value, key, map) => {
        value = key == "Object.create() Method" ? value.__proto__ : value;
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = key;
        cell2.innerHTML = JSON.stringify(value);
    });

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Method Name";
    cell2.innerHTML = "Object";
}

//run function to display name after 11.5 seconds after clicking on qAsync tab
function runasynch() {
    document.getElementById("async_value").innerHTML = "waiting.....";
    qAsync().exec().then()
}

//add number on click of add button from qCalc tab
function addNumber() {
    var value = document.getElementById("number").value;
    qCalc().calcFactory().add(parseFloat(value));
    document.getElementById("total_value").innerHTML = qCalc().calcFactory().getValue();
}

//subtract number on click of add button from qCalc tab
function subNumber() {
    var value = document.getElementById("number").value;
    qCalc().calcFactory().sub(parseFloat(value));
    document.getElementById("total_value").innerHTML = qCalc().calcFactory().getValue();
}

//open respective tab on click of tab
function openTab(evt, name) {
    if (name === "qAsync")
        runasynch();
    if (name === "qObj")
        displayObjects();
    if (name === "qSyntax")
        qSyntax().doSomething();

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}


