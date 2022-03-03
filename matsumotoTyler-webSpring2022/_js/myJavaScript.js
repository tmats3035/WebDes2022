
let myName = "Tyler";
console.log(myName);

// init can link all methods kind of like a run method 
function init() {
    changeHeading();
    greeting(); 
}

// a function that changes the heading name 
function changeHeading() {
    // console log is an object, called through method 
    // this fucntion logs a line of text in the browser
    console.log("hello world!");

    // changes what's in the heading
    let myHeading = document.querySelector('h1');
    myHeading = "hi there...";
    myHeading.textContent = 'Hello World!';
    console.log(myHeading);
}

// using JavaScript to write HTML 
function greeting(myName) {
    const para = document.createElement("p");
    para.innerHTML = myName;
    document.getElementById("myDIV").appendChild(para);
}

function changeNavigation() {
    
}