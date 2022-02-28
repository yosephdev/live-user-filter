// ------ SAVING IN CONSTANTS THE DOM ELEMENTS WE NEED TO WORK WITH ------ //

// this constant allows us to filter the data to be displayed, by dynamically changing its "id" attribute
const result = document.getElementById("result");

// this constant allows us to access the value of the user's input, i.e. the search word
const filter = document.getElementById("filter");

const listItems = [];

getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=100");

  const { results } = await res.json();
  console.log(results);

  //Clear results
  result.innerHTML = "";

  results.forEach((user) => {
    console.log(user);

    const li = document.createElement("li");
    listItems.push(li);

    li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

    result.appendChild(li);
  });
}
