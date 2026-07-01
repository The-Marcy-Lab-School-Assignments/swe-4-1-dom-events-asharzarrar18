# Short Response Questions

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

## Question 1: Loading JavaScript

Examine the HTML code below:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

In the `index.js` file, they have the code:

```js
document.querySelector("#my-button").style.color = "red";
```

But an error is thrown.

1. What is the error (be specific)?
2. Why does this error occur?
3. What can be done to fix it?

**The error is usually Cannot read properties of null (reading 'style'). This happens because the <script> tag is in the <head>, so the JavaScript runs before the browser has created the <button id="my-button"> element. document.querySelector('#my-button') returns null, and then the code tries to access .style on null. To fix it, add defer to the script tag, move the script tag to the bottom of the body, or wait for the DOMContentLoaded event.**

## Question 2: event.target vs event.currentTarget

Consider this HTML:

```html
<div id="button-container">
  <button>Click Me</button>
</div>
```

And this JavaScript:

```js
const div = document.querySelector("#button-container");
div.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

When a user clicks the button, both `event.target` and `event.currentTarget` are logged. Explain what each property represents in this scenario and why they might be different.

**In this scenario, event.target is the actual element the user clicked, which is the <button>. event.currentTarget is the element that the event listener is attached to, which is the <div id="button-container">. They are different because the click event starts on the button and then bubbles up to the div. This is why the div’s event listener still runs even though the button was clicked.**

## Question 3: Creating Elements Dynamically

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

```js
const product = {
  name: "iPhone 17",
  price: 1099.99,
  img: "./images/iphone17.png",
};

/* Desired structure: 
<div>
  <img src="./images/iphone17.png">
  <h3>iPhone 17</h3>
  <p>$1099.99</p>
</div>
*/

const productCard = document.createElement("div");
const productImage = document.createElement("img");
const productName = document.createElement("h3");
const productPrice = document.createElement("p");

productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

document.body.append(productCard);
```

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?

**The issue is that the code creates the image, heading, and paragraph elements, but never appends them to the productCard. Only the empty div is added to the page, so nothing inside it is visible. The fix is to append the child elements to the card before appending the card to the body: productCard.append(productImage, productName, productPrice) document.body.append(productCard)**

## Question 4: Event Delegation and event.target.closest()

Consider this HTML:

```html
<ul id="todo-list">
  <li id="todo-1">
    <p class="description">Walk the dog</p>
    <p class="is-complete">✅</p>
  </li>
  <li id="todo-2">
    <p class="description">Take out the trash</p>
    <p class="is-complete">❌</p>
  </li>
  <li id="todo-3">
    <p class="description">Wash the dishes</p>
    <p class="is-complete">❌</p>
  </li>
</ul>
```

And this JavaScript:

```js
const todoList = document.querySelector("#todo-list");
todoList.addEventListener("click", (event) => {
  const clickedLi = event.target.closest("li");

  if (!clickedLi) return;

  clickedLi.querySelector(".is-complete").textContent = "✅";
});
```

1. What is the name for this approach to event handling? What is the alternative and why is this approach better?
2. Explain what the `event.target.closest('li')` method does and why it is essential to this approach.

**This approach is called event delegation. Instead of adding a separate event listener to every <li>, we add one event listener to the parent <ul> and use event bubbling to handle clicks from its children. This is better because it uses less repeated code and still works if new list items are added later. event.target.closest('li') starts from the exact clicked element and searches upward until it finds the nearest <li>. This is important because the user might click on a nested <p> inside the <li>, not directly on the <li> itself. Using .closest('li') lets the code find the correct todo item no matter which child element was clicked.**

## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?

**querySelector() returns only the first element that matches a CSS selector, while querySelectorAll() returns all matching elements as a NodeList. For example, I would use querySelectorAll('.quote-card') if I wanted to select every quote card on the page instead of just the first one. A NodeList is similar to an array because it can hold multiple elements and can be looped through, but it is not a true array. For example, a NodeList does not have every array method like map() or filter() unless you convert it first with Array.from(). It is important to know the difference so you do not accidentally use array methods on a NodeList and get an error.**
