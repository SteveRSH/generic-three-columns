//font size

var maShanZhengFont = str.fontsize(4);

//html

document.getElementById("column1").innerHTML = "Intro";
document.getElementById("column2").innerHTML = "Prerequisites";
document.getElementById("column3").innerHTML = "Getting started";


function html(){
    
document.getElementById("paragraph1").innerHTML = "At its heart, HTML is a fairly simple language made up of elements, which can be applied to pieces of text to give them different meaning in a document (Is it a paragraph? Is it a bulleted list? Is it part of a table?), structure a document into logical sections (Does it have a header? Three columns of content? A navigation menu?), and embed content such as images and videos into a page. This module will introduce the first two of these and introduce fundamental concepts and syntax you need to know to understand HTML.";

document.getElementById("paragraph2").innerHTML = "Before starting this module, you don't need any previous HTML knowledge, but you should have at least basic familiarity with using computers and using the web passively (i.e., just looking at it and consuming content). You should have a basic work environment set up (as detailed in Installing basic software), and understand how to create and manage files (as detailed in Dealing with files).";

document.getElementById("paragraph3").innerHTML = "Covers the absolute basics of HTML, to get you started — we define elements, attributes, and other important terms, and show where they fit in the language. We also show how a typical HTML page is structured and how an HTML element is structured, and explain other important basic language features. Along the way, we'll play with some HTML to get you interested!";
}

//CSS

function css(){
document.getElementById("paragraph1").innerHTML = "Cascading Stylesheets — or CSS — is the first technology you should start learning after HTML. While HTML is used to define the structure and semantics of your content, CSS is used to style it and lay it out. For example, you can use CSS to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.";

document.getElementById("paragraph2").innerHTML = "You should learn the basics of HTML before attempting any CSS. We recommend that you work through our Introduction to HTML module first. In that module, you will learn about <br><br> - Introduction to CSS: <br> - HTML modules <br> - JavaScript and how to use it to add dynamic functionality to web pages";

document.getElementById("paragraph3").innerHTML = "Once you understand the fundamentals of HTML, we recommend that you learn HTML and CSS at the same time, moving back and forth between the two topics. This is because HTML is far more interesting and much more fun to learn when you apply CSS, and you can't really learn CSS without knowing HTML.";
}

//JavaScript

function javascript(){
document.getElementById("paragraph1").innerHTML = "JavaScript is a programming language that allows you to implement complex things on web pages. Every time a web page does more than just sit there and display static information for you to look at—displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, or more—you can bet that JavaScript is probably involved.";

document.getElementById("paragraph2").innerHTML = "JavaScript is arguably more difficult to learn than related technologies such as HTML and CSS. Before attempting to learn JavaScript, you are strongly advised to get familiar with at least these two technologies first, and perhaps others as well. Start by working through the following modules: <br><br> - Getting started with the Web <br> - Introduction to HTML <br> - Introduction to CSS ";

document.getElementById("paragraph3").innerHTML = "Having previous experience with other programming languages might also help. After getting familiar with the basics of JavaScript, you should be in a position to learn about more advanced topics";
}


//color
function colorFunction(){
    document.getElementById("colorDropdown").classList.toggle("show"); 
}


function darkKhaki(){
    document.getElementById("columnOne").style.backgroundColor = "darkkhaki";
    document.getElementById("columnTwo").style.backgroundColor = "darkkhaki";
    document.getElementById("columnThree").style.backgroundColor = "darkkhaki";
    
    /* 
    used getElementsByClassName and querySelectorAll() but got the following error: Uncaught TypeError: Cannot set property 'backgroundColor' of undefined
    */   
//  var testing = document.getElementsByClassName("column").style.backgroundColor = "red";
//    console.log(testing);
}

function oliveDrab(){
    document.getElementById("columnOne").style.backgroundColor = "olivedrab";
    document.getElementById("columnTwo").style.backgroundColor = "olivedrab";
    document.getElementById("columnThree").style.backgroundColor = "olivedrab";
}

function darkOliveGreen(){
    document.getElementById("columnOne").style.backgroundColor = "darkolivegreen";
    document.getElementById("columnTwo").style.backgroundColor = "darkolivegreen";
    document.getElementById("columnThree").style.backgroundColor = "darkolivegreen";
}

//text
function textFunction(){
    document.getElementById("textDropdown").classList.toggle("show"); 
}

function maShanZheng(){
    document.getElementById("columnOne").style.fontFamily = "Ma Shan Zheng";
    document.getElementById("columnOne").style.fontSize = "135%";
    
    document.getElementById("columnTwo").style.fontFamily = "Ma Shan Zheng";
    document.getElementById("columnTwo").style.fontSize = "135%";
    
    document.getElementById("columnThree").style.fontFamily = "Ma Shan Zheng";
    document.getElementById("columnThree").style.fontSize = "135%";
}

function indieFlower(){
    document.getElementById("columnOne").style.fontFamily = 'Indie Flower';
    document.getElementById("columnTwo").style.fontFamily = 'Indie Flower';
    document.getElementById("columnThree").style.fontFamily = 'Indie Flower';
}

function amaticSC(){
    document.getElementById("columnOne").style.fontFamily = "Amatic SC";
    document.getElementById("columnTwo").style.fontFamily = "Amatic SC";
    document.getElementById("columnThree").style.fontFamily = "Amatic SC";
    
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


























