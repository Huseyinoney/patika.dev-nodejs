const http = require("http");


const server = http.createServer((req,res)=> {
    
    const url = req.url;

    if( url === "/index") {
        res.writeHead(200 , {"Content-Type":"text/html;charset=utf-8"});
        res.write('<h2>İndex Sayfasına Hoşgeldiniz</h2>');
    }
    else if (url === "/hakkimda") {
        res.writeHead(200 , {"Content-Type":"text/html;charset=utf-8"});
        res.write('<h2>Hakkımda Sayfasına Hoşgeldiniz</h2>');
    }

    else if(url === "/iletisim") {
        res.writeHead(200 , {"Content-Type": "text/html;charset=utf-8"});
        res.write('<h2>İletişim Sayfasına Hoşgeldiniz</h2>');
    }

    else {
        res.writeHead(404 ,{"Content-Type":"text/html; charset=utf-8"});
        res.write('<h2> Sayfa Bulunamadı </h2>');
    }
    res.end();
});

const port = 5000;

server.listen(port, () => {

    console.log(`sunucu ${port} portunda çalışıyor`);

})