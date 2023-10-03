var OHH = 
    (o1)=>{
    return (OHH[o1]=(o2)=>{
        return (OHH[o1][o2]=(o3)=>{
            return (OHH[o1][o2][o3]=(o4)=>{
                return OHH[o1][o2][o3][o4] = {};
            })
        })
    });
};
const key = (o)=>{
    for(var k in o){
        console.log(k);
        key(o[k]);
    }
}

OHH("x")("Y")({z:true})(4)
OHH("D")("_")
console.log(OHH.x.Y[{z:true}][4]);
console.log(OHH.D._)

key(OHH);


