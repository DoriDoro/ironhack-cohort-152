// 1 global scope
// 2 function scope
// 3 block scope

function foo() {
  var toto = "toto";

  function a() {
    var titi = "titi";
    console.log(titi);
    console.log(toto);
  }

  a();
  console.log(toto);

  try {
    console.log(titi);
  } catch (err) {
    console.error(err);
  }
}

foo();

// module pattern ; )

// IIFE +> immediatly invoked function expression
const myModule = (function() {
  var publicData = { loveJS: true };
  var user = { name: "foo" };
  var secret = "only visible in the scope of myModule";

  function getSecretLength() {
    return secret.length;
  }

  function getPublicData() {
    return publicData;
  }

  console.log(`the secret length is : ${getSecretLength()}`);

  return {
    user,
    getPublicData
  };
})();

(function() {
  console.log("I run automaticaly ^^");
})();

console.log(myModule.user);
console.log(myModule.getPublicData());
