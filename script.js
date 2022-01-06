// #1 - Select the section with an id of container without using querySelector.

const containerSelect = document.getElementById("container");
console.log(containerSelect);

// #2 - Select the section with an id of container using querySelector.

const queryContainer = document.querySelector("#container");
console.log(queryContainer);

// #3 - Select all of the list items with a class of "second".

const listItems = document.getElementsByClassName('second');
console.log(listItems);

// #4 - Select a list item with a class of third, but only the list item inside of the ol tag.

const itemThirdList = document.querySelector("ol .third");
console.log(itemThirdList);

// #5 - Give the section with an id of container the text "Hello!".

//document.getElementById("container").innerText = "Hello";    //Interferes with question 10, so commented out

// #6 - Add the class main to the div with a class of footer.

const addClassMain = document.querySelector(".footer");  //variable using querySelector on footer class
addClassMain.classList.add("main");  //add main class to the div
console.log(addClassMain);

// #7 - Remove the class main on the div with a class of footer.

addClassMain.classList.remove("main");
console.log(addClassMain);

// #8 - Create a new li element.

const createLi = document.createElement("li");
console.log(createLi);

// #9 - Give the li the text "four".

console.log(createLi.innerText = "four");

// #10 - Append the li to the ul element.

let addLi = document.querySelector("ul");  //variable using querySelector on ul element
console.log(addLi.appendChild(createLi));  //append li element to the ul element using appendChild

// #12 - Loop over all of the lis inside the ol tag and give them a background color of "green".

const listTraverse = document.querySelectorAll("ol li");  //set variable equal to array of selectors

for(let i = 0 ; i < listTraverse.length; i++) 
{
    listTraverse[i].style.backgroundColor = "green";  //Loops and changes colors
}

// #13 - Remove the div with a class of footer.

const divRemover = document.querySelector(".footer");
console.log(divRemover.remove());
