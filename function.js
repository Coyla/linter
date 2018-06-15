// arrow no braces in single parameter
// arrow-parens
// bad delete braces
[1, 2, 3].map((x) => x + 1);

// no-param-reassign
// bad
// Why? Manipulating objects passed in as parameters
// can cause unwanted variable side effects in the original caller.
function f1(obj) {
  obj.key = 1;
}

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}

// prefer-arrow-callback
// bad
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// function-paren-newline
// bad
console.log(foo,
  bar,
  baz);

/*
 * use braces or no return line
 */
// bad
/*
if (test)
  return false;

// good
if (test) return false;
*/

// new line more than 2 method chains
const leds = stage.selectAll('.led').data(data);

const isBig = (size) => size > 10;
// const hasData() const canOpen() wasUpdated()
