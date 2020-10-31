const person = {
  name: 'Raihan',
  age: 30,
};

const { b, age } = person;
console.log(b);

Object.assign(person, { isMarried: false });

console.log(person);
