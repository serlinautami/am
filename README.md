a. mendaftar akun
 - klik URL: https://github.com. 
 - masukkan nama user yang akan anda daftarkan sebagai akun github sesuai text perintah
 - Setelah selesai klik tombol Sign up for GitHub
 - maka akan terarah ke dalam halaman selamat datang
 - pilih repository untuk belajar github, saya memilih yang repository yang gratis
 - kemudian klik continue 
 - muncul data profil user yang akan anda gunakan di github, isi dengan lengkap 
 - klik submit
 - dan berhasil membuat akun di github dan siap untuk membuat repository baru di dalamnya

b. setup ssh github
 - ketik ssh-keygen -t rsa -b 4096 lalu enter
 - enter lagi
 - lalu pilih y dalam overwrite
 - enter 2x
 - ketik cat ~/.ssh/id_rsa.pub (akan keluar kunci ssh dan copy)
 - buka github masuk ke dalam settings
 - pilih ssh and GPG keys
 - klik new ssh key
 - lalu paste kunci ssh yang di terminal dan isi title sesuai selera
 - klik add ssh key
 - selesai

c. membuat repository
 - ketik
  git config --global user.name "<your username github>" 
  git config --global user.email your@email.com
 - ketik ls (mengecek folder)
 - membuat folder ketik-> mkdir "your username repository/folder yang ingin di buat"
 - lalu cek kembali, ketik ls
 - buka folder ketik cd "nama folder"
 - ketik echo "# (nama folder)" >> Readme.md 
 - lalu cek kembali ketik ls
 - ketik git init
 - ketik git add readme.md
 - ketik git commit -m "first commit"
 - ketik git remote add origin https://github.com/serlinautami/namafolder.git
 - ketik git push -u origin master
  masukkan nama github dan password


d. cara push ke remote repository
 -ketik ls untuk mengecek
 -lalu nano readme.md
 -ketik text perubahan
 -ctrl x (buat keluar dari text)
 -lalu ketik git add readme.md
 -ketik commit -m "i added readme.md"
 -ketik git remote add origin https://github.com/serlinautami/namafolder.git
 -ketik git push -u origin master
  masukkan nama github dan password

