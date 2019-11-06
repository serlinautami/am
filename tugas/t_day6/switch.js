let SwitchCalculator = (ikioperator, a1, a2) => {
  switch (ikioperator) {
   case 'tambah' :
   text = `hasil ${ikioperator} ${a1} dan ${a2} adalah ${a1+a2}`;
   break;
    case 'tambah' :
    text = `hasil ${ikioperator} ${a1} dan ${a2} adalah ${a1-a2}`;
    break;
    case 'kali' :
    text = `hasil ${ikioperator} ${a1} dan ${a2} adalah ${a1*a2}`;
    break;
    case 'bagi' :
    text = `hasil ${ikioperator} ${a1} dan ${a2} adalah ${a1/a2}`;
    break;
    default:
    text = 'jenis opasi tidak ada';
  }
  return text;
}
console.log(SwitchCalculator('tambah',1,4));