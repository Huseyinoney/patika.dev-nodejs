const circleArea=(r)=>{
    
     let area = Math.PI * r** 2;
     if(r>0){
     console.log(area);

     }else{
        return -1;
     }
} 


const circleCircumference = (r) =>{
    
    let circlecircumference = 2 * Math.PI * r ;
     
    if(circlecircumference > 0){
        console.log(circlecircumference);

    }else{
        return -1;
    }
}

module.exports = {
    circleArea,
    circleCircumference
}