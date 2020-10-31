// const person = {
//   nama: 'Raihan',
//   age: 19,
//   isMarried: false,
//   hobby: ['Volly', 'Catur'],
//   family: {
//     children: 'Michael',
//   },
// };

// console.log(person.nama, person.age, person.isMarried);
// console.log(person.hobby[0]);
// console.log(person.family.children);

const name = ['Raihan', 'Ra', 'Kepo', 'Ang', 'Rapop'];
const hobby = {
  satu: 'volly',
  dua: 'catur',
  tiga: 'Bola',
};

const tampung = [...name];
console.log(tampung);

// function SearchName(value, limit, cb) {
//   const names = [...name];
//   const lowerKeyword = value.toLowerCase();
//   let findName = [];
//   names.forEach((name) => {
//     const lowerName = name.toLowerCase();
//     const res = lowerName.search(lowerKeyword);
//     if (res > -1 && findName.length < limit) {
//       findName = [...findName, name];
//     }
//   });
//   return cb(findName);
// }

// const cb = (value) => {
//   console.log(value);
// };

// SearchName('Ra', 3, cb);
