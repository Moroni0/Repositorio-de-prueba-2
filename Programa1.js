class Auto {
    constructor(marca, modelo, año, placas, color, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.placas = placas;
        this.color = color;
        this.velocidad = 0;
        this.acelerar = function () {
            velocidad = valocidad + 0.5;
        };
    }
}

let coche = new Auto("Ford", "Explorer", "2005", "MZM1023", "Azul metal", 0);
coche.año = 2003;

console.log(coche);

coche.color = "Verde";

console.log(coche);

//COmo Descomponer objetos

let { marca, año, modelo } = coche;
console.log(marca);
console.log(año);


class Paquete {
    constructor(peso, id, ancho, largo, alto, costo, dir, f_llegada, f_envio) {
        this.peso = peso;
        this.id = id;
        this.ancho = ancho;
        this.largo = largo;
        this.alto = alto;
        this.costo = costo;
        this.dir = dir;
        this.f_llegada = f_llegada;
        this.f_envio = f_envio;
    }
}

var paquete = new Paquete("10 Kg", "6732fgd5", "40 cm", "100 cm", "50 cm", "6700", "Paseo de los paseos #890", "30 de marzo 2021", "23 de marzo 2021");

console.log(paquete);