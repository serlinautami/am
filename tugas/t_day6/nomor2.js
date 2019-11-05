function Calculator(ikioperator, a1, a2) {
  let result = '';
  if(ikioperator === "tambah") {
    result = a1 + a2;
  } else if (ikioperator === "kurang") {
    result = a1 - a2;
  } else if (ikioperator === "kali") {
    result = a1 * a2;
  } else if (ikioperator === "bagi") {
    result = a1 / a2;
  } else {
    return ('nama oprasi tidak ada');
  }
  return `hasil ${ikioperator} ${a1} dan ${a2} adalah ${result}`;
}
console.log(Calculator('tambah',1,4));




 