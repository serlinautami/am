const express = require('express');
const appserli = express();
const port = 3005

//setup tamplate egine  with ejs;
appserli.set('view engine', 'ejs');

//servis static file from folder assets 
//and url /assets before find assets
appserli.use('/assets', express.static('assets'))

appserli.get('/',(request, response)=>{
	response.render("index");//render tamplate
});

appserli.get('/about',(request, response)=>{
	response.render("about");//render tamplate
});
//http://localhost:3005/profile/katagory=koding&title=hack-aku/
// appserli.get('/:name/artikel/', (request, response)=>{
// 	let data = request.query
// 	response.send(`hy ${request.params.name}, artikel katagory ${data.katagory} dan title ${data.title}`);
// });
// appserli.get('/artikel/:katagory/:title',(request, response)=>{
// 	let.data = request.params
// 	response.send(`hy ${data.katagory}, dan umur ${data.title}`);
//});

/*//http://localhost:3005/profile/serlina/
appserli.get('/profile',(request, response)=>{
	let data = request.params
	request.render(`ini profile ${data.name}`)
})
*/
appserli.get('/contect',(request, response)=>{
	response.render("contect");//render tamplate
});

appserli.get('/profile',(request, response) => {
	let list = ['masak', 'berenang', 'nulis']


	response.render('profile', {
	data: request.query,
	hob: list
	});//render tamplate
});

// appserli.get('/siswa',(request, response)=>{
// 	//proses dengan siswa bernama x
// 	let namaSiswa =  request.params.nama;
	
// 	response.end("menampilkan siswa dengan nama : " +  namaSiswa);
// })

// appserli.post('/siswa',(request,response)=>{
// 	let namaSiswa = request.params.nama;
// 	let alamat = request.body.alamat;

// 	response.end("siswa baru! nama:" + namaSiswa + ", alamat : " + alamat);
// })

// appserli.delete('/siswa/:nama',(request,response)=>{
// 	let namaSiswa = request.params.nama;

// 	response.end("siswa bernama " + namaSiswa + " akan dihapus dari sistem!")
// })

// appserli.put('/siswa:/nama',(request,response)=>{
// 	let id = request.params.id;
// 	let namaSiswa = request.body.nama;
// 	let alamat = request.body.alamat;

// 	response.end("siswa dengan id "+ "telah terupdate");
// })

appserli.listen(port,()=> {
	console.log(`running on post ${port}!`)
});