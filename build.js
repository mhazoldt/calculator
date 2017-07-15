
// clear button
let nextGridItem = document.createElement("li");
let nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "C";
nextGridContentDiv.setAttribute("data-button", "C");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))")
nextGridContentDiv.classList.add("backgroundChange");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// answer display
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridItem.style.width = "75%";
nextGridContentDiv.id = "displayBox";
nextGridContentDiv.innerText = "";

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// 7
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "7";
nextGridContentDiv.setAttribute("data-button", "7");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("numberButton");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// 8
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "8";
nextGridContentDiv.setAttribute("data-button", "8");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("numberButton");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// 9
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "9";
nextGridContentDiv.setAttribute("data-button", "9");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("numberButton");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// forward slash
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "/";

nextGridContentDiv.setAttribute("data-button", "/");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("textChange");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// 4
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "4";
nextGridContentDiv.setAttribute("data-button", "4");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("numberButton");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// 5
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "5";
nextGridContentDiv.setAttribute("data-button", "5");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("numberButton");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// 6
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "6";
nextGridContentDiv.setAttribute("data-button", "6");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("numberButton");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// multiplication
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "X";
nextGridContentDiv.setAttribute("data-button", "*");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("textChange");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// 1
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "1";
nextGridContentDiv.setAttribute("data-button", "1");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("numberButton");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// 2
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "2";
nextGridContentDiv.setAttribute("data-button", "2");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("numberButton");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// 3
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "3";
nextGridContentDiv.setAttribute("data-button", "3");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("numberButton");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// subtraction
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "-";
nextGridContentDiv.setAttribute("data-button", "-");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("textChange");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// 0
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "0";
nextGridContentDiv.setAttribute("data-button", "0");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("numberButton");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// decimal
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = ".";
nextGridContentDiv.setAttribute("data-button", ".");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("numberButton");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// equals
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "=";
nextGridContentDiv.setAttribute("data-button", "=");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("backgroundChange");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);


// addition
nextGridItem = document.createElement("li");
nextGridContentDiv = document.createElement("div");

nextGridContentDiv.innerText = "+";
nextGridContentDiv.setAttribute("data-button", "+");
nextGridContentDiv.setAttribute("onclick", "inputController(this.getAttribute('data-button'))");
nextGridContentDiv.classList.add("textChange");

nextGridItem.appendChild(nextGridContentDiv);
document.getElementById("gridList").appendChild(nextGridItem);
