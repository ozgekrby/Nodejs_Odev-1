const arg=process.argv.slice(2);
function findArea(r){
    const area=Math.PI*r*r;
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`)
}
findArea(arg[0]*1)
