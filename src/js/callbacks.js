const heroes={
    capi:{
        nombre: "Capitán América",
        poder: 'Aguantar inyecciones sin morir'
    },
    iron:{
        nombre: "IronMan",
        poder: 'Dinero'
    },
    spider:{
        nombre: "SpiderMan",
        poder: 'Reaccion'
    },
}

export const buscarHeroe=( id, callback )=>{
    const heroe=heroes[id];

    if(heroe){
        callback(null, heroe);
    }else{
        //Un error
        callback(`No existe un heroe con el id ${id}`);
    }

    // callback(heroe);
}

