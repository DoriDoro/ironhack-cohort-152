// console.log(axios); // axios : a super usefull lib ;

const url =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&rows=1000&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais";

// EVERY axios function returns a Promise !!!

// OPTION 1 (then/catch)
// axios
//   .get(url)
//   .then(res => {
//     // async process
//     //console.log(res.data.records);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// OPTION 2 (async/await)
async function getTreesOnRemoteServer() {
  const res = await axios.get(url);
//   console.log(res);
  displayTrees(res.data.records);
}

function displayTrees(trees) {
    listElement.innerHTML = "";
    trees.forEach(({ fields }) => {
      // destructuring
      // console.log(fields);
      listElement.innerHTML += `<li>
          ${fields.libellefrancais} (${fields.espece.toUpperCase()}) <br>
          ${fields.adresse.toLowerCase()}
          (${fields.arrondissement.toLowerCase()})
      </li>`;
    });
  }

  
const listElement = document.getElementById("trees");
const btn = document.getElementById("get_trees");

btn.onclick = getTreesOnRemoteServer;

// COMMON ERROR =>
// const res = axios.get(url)
// console.log(res);

// this will only print the promise pending object, so you must wait for the promise completion/rejection, either with the/catch or async/await (options 1 OR 2).
