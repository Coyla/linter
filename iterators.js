const numbers = [1, 2, 3, 4, 5];

let increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}

increasedByOne = numbers.map(num => num + 1);
