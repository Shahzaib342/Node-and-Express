

//global variables
let calculator_value = 0;

//3 (a)
class ToDoListClass {
    "use strict";

    newElement() {
        //create a new element using todo list and part of doSomething function
        try {
            let li = document.createElement("li");
            let inputValue = document.getElementById("myInput").value;
            let t = document.createTextNode(inputValue);
            li.appendChild(t);
            if (inputValue === '') {
                return false;
            } else {
                document.getElementById("myUL").appendChild(li);
            }
            document.getElementById("myInput").value = "";

            let span = document.createElement("SPAN");
            let txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);

            for (let i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    let div = this.parentElement;
                    div.style.display = "none";
                }
            }

            this.close();
            return true;
        } catch (err) {
            alert('There is some error occurred in setting up the todo list');
        }
    }

     async createListElement() {
        //method that is using promise to call and add a new item in to do list
         try {
             let that = this;
             let promise = new Promise(function(resolve, reject) {
                 if(that.newElement())
                     setTimeout(() => resolve("New Item Added Successfully"), 1000);
                 else
                     reject("You must write something");
             });

             promise.then(
                 result => alert(result),
                 error => alert(error)
             );
         } catch (err) {
             alert('There is some error occurred in setting up the todo list');
         }
    }

    close() {
        // Click on a close button to hide the current list item
        try {
            let close = document.getElementsByClassName("close");
            let i;
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    let div = this.parentElement;
                    div.style.display = "none";
                }
            }
        } catch (err) {
            alert('There is some error occurred in setting up the todo list');
        }
    }

    closeButton() {
        // Create a "close" button and append it to each list item
        try {
            let myNodelist = document.getElementsByTagName("LI");
            let i;
            for (let i = 0; i < myNodelist.length; i++) {
                let span = document.createElement("SPAN");
                let txt = document.createTextNode("\u00D7");
                span.className = "close";
                span.appendChild(txt);
                myNodelist[i].appendChild(span);
            }
        } catch (err) {
            alert('There is some error occurred in setting up the todo list');
        }
    }

    checkBoxSymbol() {
        // Add a "checked" symbol when clicking on a list item
        try {
            let list = document.querySelector('ul');
            list.addEventListener('click', function (ev) {
                if (ev.target.tagName === 'LI') {
                    ev.target.classList.toggle('checked');
                }
            }, false);
        } catch (err) {
            alert('There is some error occurred in setting up the todo list');
        }
    }
}
//class object
let toDoList = new ToDoListClass();


//functionality of doSomething function
let code_with_100_lines = function () {
// to do list
    toDoList.closeButton();
    toDoList.close();
    toDoList.checkBoxSymbol();
}

//function expression that will return a object consist of two keys doSomething and desc
let qSyntax = function () {
    let object = {
        doSomething: code_with_100_lines,
        desc: "doSomething function is creating a to do list and it utilizes Class, use strict, variables, alert, comparison operators, conditions, functions,  loops, this keyword, try/catch, async, promise, setTimeout, DOM query selectors and basic Events."
    };
    return object;
};

// End - 3(a)

// 3(b)

//constructor functions for creating a object
function constructorFunctions(name, id) {
    this.name = name;
    this.id = id;
};

//return a map with 5 different ways of creating same object
let getMap = function () {
    let map = new Map();
    //first way
    let obj = {name: "Shoval Suissa", id: 313527111};
    map.set("Object Literal", obj);
    //second way
    let obj2 = new Object();
    obj2.name = "Shoval Suissa";
    obj2.id = 313527111;
    map.set("Object Constructor", obj2);
    //third way
    map.set("Object.create() Method", Object.create({
            name: "Shoval Suissa",
            id: 313527111,
        }
    ));
    //fourth way
    const obj4_createObjects = {name: "Shoval Suissa",};
    const obj4_chain = {id: 313527111,};
    map.set("Object.assign() Method", Object.assign({}, obj4_createObjects, obj4_chain));
    //fith way
    map.set("Constructor Function", new constructorFunctions("Shoval Suissa", 313527111,));
    //return map
    return map;
}

//return a prototype chain
function prototypeChain() {
    let obj = {};
    getMap().forEach((value, key, map) => {
        value = key == "Object.create() Method" ? value.__proto__ : value;
        obj[key] = value;
    });
    return obj;
}

//Arrow function expression
let qObj = () => {
    let obj = {
        createObjects: getMap(),
        chain: prototypeChain(),
        desc: "createObjects is calling getMap() function that is creating a map containing my name and id object using 5 different methods and returning that" +
            "map. chain is calling prototypeChain method that is creating a object and adding all 5 objects in this new object from getMap() method."
    }
    return obj;
};

// End - 3(b)

//3(c)
function qCalc() {
    let object = new Object();
    object.calcFactory = function () {
      let calculator = new Object();
        calculator.add = function (num) {
            calculator_value = calculator_value + num;
        }
        calculator.sub = function (num) {
            calculator_value = calculator_value - num;
        }
        calculator.getValue = function () {
            return calculator_value;
        }
        return calculator;
    }
    object.desc = "qCalc will return a object that consists of calcFactory. You can use calcFactory to add, subtract of get global calculator_value;" +
        "To get calculator_value just use qCalc().calcFactory().getValue(), to add use qCalc().calcFactory().add(n) and to subtract use qCalc().calcFactory().sub(n)";
    return object;
}

// End - 3(c)

//3(d)
function qAsync() {
    let object = new Object();
    object.doAsync = function (someThing, time) {
        return setTimeout(() => document.getElementById("async_value").innerHTML = someThing, time)
    };
    object.exec = async function () {
        return object.doAsync("Hello Shoval Suissa", 11500)
    };
    object.desc = "doAsync function is receiving string and time parameter and returning setTimeout function that is using these parameters. exec function is executing setTimeout function from doAsync" +
        "method by sending string and time parameters. Once time is completed setTimeout will print that string in span element of qAsync tab.";
    return object;
}

// End - 3(d)








