const dataWatcher = document.getElementById("data_watcher");
const dataDisplayer = document.getElementById("data_displayer");

console.log(dataWatcher, dataDisplayer); // typeof ?

// event delegation

// dataWatcher.oninput is the event-listener
// the fat arrow function below is the event-handler
dataWatcher.oninput = (e) => {
    dataDisplayer.innerHTML = `<span>${e.target.value}</span>`;
};
