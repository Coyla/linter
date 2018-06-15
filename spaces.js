/*
spaces before control statements ça ne s'applique pas aux arrow functions
 */
// bad
if(isJedi) {
  fight ();
}
function fight () {
  console.log ('Swooosh!');
}

// good
if (isJedi) {
  fight();
}

function fight() {
  console.log('Swooosh!');
}

/**
 * eol-last finir avec une nouvelle ligne a la fin du fichier
 */

/**
 * operators
 */

const x = y + 5;

/*
 * space-before-function-paren space-before-blocks
 */
// bad
const f = function(){};
// good
const x = function() {};


