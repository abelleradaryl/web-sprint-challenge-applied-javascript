import axios from 'axios';

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const Card = (article) => {

// ADD ELEMENTS 

const cardMain = document.createElement("div");
const cardHeadline = document.createElement("div");
const cardAuthor = document.createElement("div");
const cardImage = document.createElement("div");
const image = document.createElement("img");
const byAuthor = document.createElement("span");

// SET CLASS NAMES

cardMain.classList.add("card");
cardHeadline.classList.add("headline");
cardAuthor.classList.add("author");
cardImage.classList.add("img-container");

// ADD TEXT

image.src = article.authorPhoto;
cardHeadline.textContent = article.headline;
byAuthor.textContent = ` By ${article.authorName}`;

// CREATE HIERARCHY

cardMain.appendChild(cardHeadline);
cardMain.appendChild(cardAuthor);
cardAuthor.appendChild(cardImage);
cardImage.appendChild(image);
cardAuthor.appendChild(byAuthor);

cardMain.addEventListener("click", () => {
  console.log(`Author: ${article.authorName}`);
});

return cardMain;

}


  // CONSOLE.LOG TEST

  // axios.get(`http://localhost:5001/api/articles`)
  // .then(resp => {
  //   console.log(resp);
  // })
  // .catch(err => {
  //   console.log(err);
  // })

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


const cardAppender = (selector) => {
  axios.get(`http://localhost:5001/api/articles`)
  .then(resp => {
   const container = document.querySelector(selector);
   const data = resp.data.articles;
   const names = Object.keys(data);
   names.map(item => {
    const newData = data[item];
    newData.forEach(elem => {
      container.appendChild(Card(elem))
    });
   })
  })
  .catch(err => {
    console.log(err);
  })
}

export { Card, cardAppender }
