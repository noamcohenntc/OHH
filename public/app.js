var OHH = 
    (o1)=>{
    var out = [];
    const key = (o)=>{
        for(var k in o){
            out.push(k);
            key(o[k]);
        }
    }
    OHH.out = ()=>{
        out = [];
        key(OHH)
        return out;
    }

    return (OHH[o1]=(o2)=>{
        return (OHH[o1][o2]=(o3)=>{
            return (OHH[o1][o2][o3]=(o4)=>{
                return OHH[o1][o2][o3][o4] = {};
            })
        })
    });
};



OHH("x")("Y")({z:true})(4)
OHH("D")("_")
console.log(OHH.out())


