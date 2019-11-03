/**
 * Contoh 1
 */
if (true) {
  var nilai1 = 10;
}
console.log(nilai1);  // nilai adalah  10


/**
 * Contoh 2
 */
console.log(nilai2 === undefined); // true
var nilai2 = 5;

/**
 * Contoh 3
 */
// Akan memberikan nilai undefined
var nama = 'serlina';
 
(function() {
  console.log(nama); // undefined
  var nama = 'serlina utami';
})();

