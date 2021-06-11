//alert("Hello World");
//var myImage = document.getElementById("Malaysia");
//console.log(myImage);

//var para = document.getElementsByClassName("intro");
//var content = para.innerHTML;
//console.log(content);

// var mainTitle = document.getElementById("main-title");
// console.log("This is an element of type: ", mainTitle.nodeType);
// console.log("The inner HTML is: ", mainTitle.innerHTML);
// console.log("There are this many child elements: ", mainTitle.childNodes);

// document.getElementById("main-title").innerHTML = "This is why you should travel with us!!";

// document.getElementById("customer-1").setAttribute("align", "right");
// document.getElementById("China").setAttribute("src", "../images/JetSpeedLogo.png");
// document.getElementById("China").setAttribute("alt", "Picture of China");

// document.getElementById("intro").style.backgroundColor = "green";
// document.getElementById("customer-1").setAttribute("style", "background-color:green");

// var infoListItem = document.createElement("li");
// var infoText = document.createTextNode("Info");
// infoListItem.appendChild(infoText);

// var footerList = document.getElementById("footerList");
// footerList.style.backgroundColor = "green";
// footerList.appendChild(infoListItem);

// document.getElementById("main-title").onclick = function(){
//     alert("Warning!! Warning!! We have detected that you have no idea where you are on the planet so we are going to destruct this computer in 10 seconds. You silly CUNT, I'm only joking. HAHAHAHA!!");
// };

// document.getElementById("main-title").addEventListener("click", function() {alert("Why, Helloooo!!");}, false)
// document.getElementById("main-title").addEventListener("click", function() {alert("Why, Helloooo Again!!");}, false)
// document.getElementById("main-title").addEventListener("mouseover", function() {alert("Why, Helloooo, you hovered over me didn't you?!!");}, false)

// function simpleMsg() {
//     alert("Hi, How are you?");
// }

// setTimeout(simpleMsg, 5000);

// var myImage = document.getElementById("Japan");
// var imageArr = ["../images/japan1.jpeg", 
//                 "../images/japan2.jpeg", 
//                 "../images/japan3.jpeg", 
//                 "../images/japan4.jpeg"];
// imageIndex = 0;

// function changeImage() {
//     myImage.setAttribute("src", imageArr[imageIndex]);
//     imageIndex++;
//     if(imageIndex >= imageArr.length) {
//         imageIndex = 0;
//     }
// }

// setInterval(changeImage, 2000);









var myImage = document.getElementById("Japan");
var imageArr = ["../images/japan1.jpeg", 
                 "../images/japan2.jpeg", 
                 "../images/japan3.jpeg", 
                 "../images/japan4.jpeg",
                 "../images/japan0.jpeg"];
imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", imageArr[imageIndex]);
    imageIndex++;
    if(imageIndex >= imageArr.length) {
        imageIndex = 0;
   }
}

myImage.onmouseover = changeImage;