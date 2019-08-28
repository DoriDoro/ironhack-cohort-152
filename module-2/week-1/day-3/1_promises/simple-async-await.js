const myFirstPromise = (timing) => new Promise((resolve, reject) => {
    const condition = Math.random();
    setTimeout(() => {
        if (condition > .5) resolve("success");
        else reject("failed");
    }, timing);
    // resolve => if the async operation is successfull
    // reject  => if the async operation failed
});


async function delayedAction() {
    var res;
    try {
        res = await myFirstPromise(2000);
    } catch(err) {
        res = err;
    }
    console.log(res);
}

delayedAction();