export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSIDAD"] = "Universidad";
    NivelEducativo["POSGRADO"] = "Posgrado";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apellidos, avatar, edad, NivelEducativo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.NivelEducativo = NivelEducativo;
    }
    return Aprendiz;
}());
export { Aprendiz };
