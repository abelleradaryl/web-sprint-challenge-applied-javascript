  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const Header = (title, date, temp) => {
  
// ADD ELEMENTS 

  const headerMain = document.createElement("div");
  const headerDate = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const headerTemp = document.createElement("span");

  // SET CLASS NAMES

  headerDate.classList.add("date");
  headerMain.classList.add("header");
  headerTemp.classList.add("temp");

  // ADD TEXT

  headerDate.textContent = date;
  headerTitle.textContent = title;
  headerTemp.textContent = temp;


  // CREATE HIERARCHY

  headerMain.appendChild(headerDate);
  headerMain.appendChild(headerTitle);
  headerMain.appendChild(headerTemp);


  return headerMain;

}
// console.log(Header("STORY", "DEC, 9th 2022", "99"))

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

const headerAppender = (selector) => {
  document.querySelector(selector).appendChild(Header("Bloom Times", "12/09/2022", "115 Degrees"));
}

export { Header, headerAppender }
