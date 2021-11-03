/* Practice Assignment 7:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Define a function named getTheTable that returns the table
// element in the HTML document that has the id "myTable".
function getTheTable() {
    return document.getElementById("myTable");
}

// 2) Define a function named getAllParagraphs that returns a
// NodeList containing all paragraph nodes inside the "myPage"
// section element of the HTML document.

function getAllParagraphs() {
    return document.getElementById("myPage").querySelectorAll("p");
}

// 3) Define a function named makeItalic.
// The function should change the CSS style of
// the paragraph elements with the class "even"
// to have italicized text. The function should
// return a NodeList containing the paragraphs
// that were changed to italics.
/////////////
// Hint: You will need a loop.
// Also reference CSS in JavaScript.
function makeItalic() {
    const changedParagraphs = document.querySelectorAll(".even");
    for (let i = 0; i < changedParagraphs.length; i++) {
        changedParagraphs[i].style.fontStyle = "italic";
    }
    return changedParagraphs;
}

// 4) Define a function named createBorders that selects
// the table inside the "myPage" section. The function
// should add a CSS border to the table cells that is
// 2 pixels thick and solid black (use #000 for black).
// The function should also return the table element.
////////////
// Hint: You can build a selector from the result
// of another selector.

function createBorders() {
    const tableElement = document.getElementById("myPage").querySelector("table");
    const table = tableElement.querySelector("tbody").querySelectorAll("tr");
    var tableRow, tableCells;
    for (let i = 0; i < table.length; i++) {
        tableRow = table[i];
        tableCells = tableRow.querySelectorAll("th,td");
        for (let k = 0; k < tableCells.length; k++) {
                tableCells[k].style.border = "2px solid #000000";
        }
    }
    return tableElement;
}

// 5) Define a function named getTheListItem that accepts two
// number parameters. The first parameter (num1) is the number of
// the unordered list in the document. The second parameter (num2)
// is the number of the list item in the unordered list.
// The function should return the text content of the
// requested list item.
/////////////////////////
// For example: getTheListItem(2,2) should return
// second list item of the second unordered list inside the
// "myPage" section element of the HTML document.
////////////////////////
// Hint: MDN for nth-of-type and nth-child selectors

function getTheListItem(num1,num2) {
    const unorderedLists = document.getElementById("myPage").querySelectorAll("ul");
    return unorderedLists[num1].querySelectorAll("li")[num2].textContent
    
}
console.log(getTheListItem(0,1));

// 6) Define a function named changeBgColor that changes the
// background color of the "myPage" section. The function
// should accept one parameter named "color" that will be
// the color the function changes the background to.
// The function should return the "myPage" section element.

function changeBgColor(color) {
    const element = document.getElementById("myPage");
    element.style.backgroundColor = color;
    return element;
}