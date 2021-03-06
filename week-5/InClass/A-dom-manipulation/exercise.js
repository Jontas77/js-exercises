/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    
    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const parTags = document.querySelectorAll('p');
console.log(parTags);

const firstDiv = document.querySelector('.site-header');
console.log(firstDiv);

const jumboText = document.querySelector('#jumbotron-text');
console.log(jumboText);

const pTags = document.querySelectorAll('.primary-content p');
console.log(pTags);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertBtn = document.querySelector('#alertBtn');

alertBtn.addEventListener('click', () => {
    alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const body = document.querySelector("body");
const changeColor = document.querySelector("#bgrChangeBtn");

changeColor.addEventListener("click", () => {
  body.style.backgroundColor = "purple";
});



/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
const addText = document.querySelector('#addTextBtn');
const newParagraph = document.createElement('p');
const readMore = document.querySelector('.heading-underline');
readMore.appendChild(newParagraph);

addText.addEventListener('click', () => {
    newParagraph.innerText = "Read more below.";
})



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
