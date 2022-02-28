// ------ SAVING IN CONSTANTS THE DOM ELEMENTS WE NEED TO WORK WITH ------ //

// this constant allows us to filter the data to be displayed, by dynamically changing its "id" attribute
const result = document.getElementById("result");

// this constant allows us to access the value of the user's input, i.e. the search word
const filter = document.getElementById("filter");

const listItems = [];

getData();

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=100");

  const { results } = await res.json();
  console.log(results);

  //Clear result
  results.innerHTML = "";
}
