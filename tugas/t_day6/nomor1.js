//soal nomot 1
//membuat sebuah funcation 3 paramater

function myProfile(n, u, h){
if(u <= 56){
  //jika umur kurang dari 56 
  console.log(`nama saya ${n}, saya masih bekerja, umur saya ${u}, saya hobi ${h}`);
}else{
  //jika umur tidak kurang dari atau sama dengan 56
  console.log(`nama saya ${n}, saya sudah pensiun dan umur saya ${u}, saya hobi ${h}`);
  
    }
}
//memanggil funcation dan memasukkan 3 paramater
myProfile("bambang",70,"memancing");