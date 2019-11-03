/**
 * Contoh 1 //Apabila program kita memiliki lebih dari satu statement, maka statement tersebut akan dieksekusi dari atas kebawah atau dari kiri kekanan
 */
console.log("halo")
console.log("selamat")
console.log("pagi")

/**
 * Contoh 2 // menampilkan console "selamat pagi!” apablia waktu menunjukkan lebih dari sama dengan jam 5 dan kurang dari jam 11:

 */
var jam = 9;
  if (jam >= 5 && jam < 11){
   console.log("Selamat Pagi!");
 }


/**
 * Contoh 3 // ekspresi dari switch akan dievalusi terlebih dahulu
kemudian nilai dari ekspresi tersebut akan dibandingkan dengan nilai dari setiap case yang ada
apabila ada yang sesuai, maka blok kode yang berasosiasi dengan case yang bersesuaian akan dieksekusi.
apabila tidak ada yang sesuai, maka blok kode yang terdapat pada default akan dieksekusi
 */
 var tanggal = 6;
switch (tanggal) {
    case 0:
        day = "Minggu";
        break;
    case 1:
        day = "Senin";
        break;
    case 2:
        day = "Selasa";
        break;
    case 3:
        day = "Rabu";
        break;
    case 4:
        day = "Kamis";
        break;
    case 5:
        day = "Jumat";
        break;
    case 6:
        day = "Sabtu";
}