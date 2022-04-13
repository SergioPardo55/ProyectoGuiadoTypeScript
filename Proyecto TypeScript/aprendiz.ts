export enum NivelEducativo{
    BACHILLERATO="Bachillerato",
    UNIVERSIDAD="Universidad",
    POSGRADO="Posgrado"
}

export class Aprendiz{
    constructor(public nombres:string,public apellidos:string,public avatar:string,public edad:number,public NivelEducativo:NivelEducativo){
        
    }
}