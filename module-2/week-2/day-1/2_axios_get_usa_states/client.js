const input = document.getElementById("filter_states");
const list = document.getElementById("states");

// use axios to generate a ready-to-use API specialized object
const geoAPI = axios.create({
  baseURL:
    "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json"
});
// every axios request returns a Promise ...
// AJAX CALL STARTS HERE (IT's AN ASYNC PROCESS...)
geoAPI
  .get()  
  .then(APIRes => {
    // ... wait for the HTTP response before playing with data ;)
    console.log("--data api response object-----------------");
    console.log(APIRes);
    // convert object to array using values only
    const states = Object.values(APIRes.data);
    console.log("--response converted to array----------------");
    console.log(states);
    // display all states on the page
    displayStates(states);
    // user input events will trigger a filter
    input.onkeyup = evt => filterStates(evt.target.value, states);
    // the 3 lines below are doing the same action ...
    // input.onkeyup = function(evt) {
    //   filterStates(evt.target.value, states);
    // };
  })
  .catch(APIErr => console.error(APIErr));

// FUNCTION DECLARATIONS
function displayStates(states) {
  list.innerHTML = "";
  states.forEach(
    state => (list.innerHTML += `<li class="item state">${state}</li>`)
  );
}

function filterStates(needle, states) {
  // Boolean(state.match(needle));
  // the line above won't handle letter casing ...
  const findInputMatch = state => // so we need to be more restrictive
    Boolean(state.toLowerCase().match(needle.toLowerCase()));

  // virginie's code :)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
  // states.filter(state => state.toLowerCase().includes(needle.toLowerCase()));

  displayStates(states.filter(findInputMatch));
}
