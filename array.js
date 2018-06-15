// array-callback-return always return a value in iteration array methods
[1, 2, 3].map(x => x + 1);

[[0, 1], [2, 3], [4, 5]].reduce((acc, item) => {
  const flatten = acc.concat(item);
  return flatten;
});

// multiple lines after open and close
// bad
const arr = [
  [0, 1], [2, 3], [4, 5],
];
// good
const numberInArray = [
  1,
  2,
];
