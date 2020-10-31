const angka = ['satu', 'dua', 'tiga'];

angka.forEach(forEachCallback);

function forEachCallback(value, index, array) {
  return console.log(value, index, array);
}

angka.map(mapCallback);

function mapCallback(value, index, array) {
  return console.log(value, index, array);
}
