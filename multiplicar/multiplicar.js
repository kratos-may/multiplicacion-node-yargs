const fs = require("fs");
let listar=(base,limite=10)=>{
    for (let i=1; i<=limite;i++){
        const res= base*i;
        console.log(`${base}*${i}=${res}`)
    }
}
let crearArchivo = (base, limite=10)=>{
    return new Promise((resolve,reject)=>{
        let data = "";
        if(!Number(base)||!Number(limite)){
            reject(`'${base}'/${limite} debe ser un numero`);
            return;
        }
        for (let i=1;i<=limite;i++){
        const mul= i;
        const res= base* mul
        data+= `${base}*${mul}=${res}\n`;
        }
        //para guardarlo en algun directorio especifico es '/folder/tabla-2.txt'
        fs.writeFile(`tablas/tabla-${base}.txt`,data, (err)=>{
            if(err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        })
    })
}
module.exports= {
    crearArchivo,
    listar
}