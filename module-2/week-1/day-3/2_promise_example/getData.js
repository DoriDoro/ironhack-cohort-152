const url =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&rows=1000&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais";

// console.log(axios); // axios : a super usefull lib ; )

// EVERY axios function returns a Promise !!!

// OPTION 1 (then/catch)

const listElement = document.getElementById("trees");

function displayTrees(trees) {
  listElement.innerHTML = "";
  trees.forEach(({ fields }) => { // destructuring syntax
    // console.log(fields);
    listElement.innerHTML += `<li>
            ${fields.libellefrancais} 
            (${
              fields.espece
            }) | ${fields.adresse.toLowerCase()} (${fields.arrondissement.toLowerCase()})
        </li>`;
  });
}

axios
  .get(url)
  .then(res => {
    // async process
    //console.log(res.data.records);
  })
  .catch(err => {
    console.error(err);
  });

// OPTION 2 (async/await)
(async function waitForIt() {
  const res = await axios.get(url);
  displayTrees(res.data.records);
})();

// const res = axios.get(url)
// console.log(res); // this will only print the promise pending object, so you must wait for the promise completion/rejection, either with the/catch or async/await
