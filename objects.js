// shiorthand object
const lukeSkywalker = 'Luke Skywalker';
const atom = {
  value: 1,
  lukeSkywalker: lukeSkywalker,
};

// Group  shorthand properties at the beginning of object declaration
const anakinSkywalker = 'anakinSkywalker';
const sw = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};

// quote-props (as needed)
const obj = {
  'quote': 'string',
  'quote-prop': 4,
};

// prefer-destructuring
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}
// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

// change object properties
Reflect.set(sw, 'assign', 'value');


// key-spacing
const b = { "foo": 42 };


// comma-dangle
const hero = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  birthYear: 1815,
  superPower: 'computers',
};
