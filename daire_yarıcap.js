//www.patika.dev

function yarıcap_hesapla(yarıcap)
{

   let alan = Math.PI * yarıcap ** 2;

   return console.log(`yarıcapı ${yarıcap} olan dairenin alanı ${alan} dır`);

}

const arguments = process.argv.slice(2);
let yarıcap = arguments[0];

if(yarıcap>0)
{
    yarıcap_hesapla(yarıcap);
}

else
{
    return -1;
}
