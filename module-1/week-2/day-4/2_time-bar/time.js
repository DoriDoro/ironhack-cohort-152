const timeLimit = 10;

function updateBar(bar, ratio, status) {
  bar.style.width = `${ratio}%`;
  bar.className = `progress ${status}`;
}

function handleTimeBar(e) {
  const btn = e.target || e.srcElement;
  const bar = btn.nextElementSibling.querySelector(".progress");
  var counter = 0;

  btn.disabled = true; // most of attribute can be set in the short way (setAttribute)
//   btn.setAtttribute("disabled", true); // same as above

  const intervalId = window.setInterval(() => {
    const remaining = timeLimit - counter;
    const ratio = (counter * 100) / timeLimit;
    var status;
    if (remaining > timeLimit * 0.66) status = "ok";
    else if (remaining > timeLimit * 0.33) status = "warning";
    else status = "danger";

    if (ratio <= 100) {
        updateBar(bar, ratio, status);
        counter += 1;
    } else {
        window.clearInterval(intervalId);
        btn.disabled = false;
    }
  }, 1000);
}

document.querySelectorAll(".btn").forEach(btn => btn.onclick = handleTimeBar);
