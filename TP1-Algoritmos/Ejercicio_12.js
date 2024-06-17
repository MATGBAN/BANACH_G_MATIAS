// Clase base Vehiculo
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}

// Clase hija Automovil
class Auto extends Vehiculo {
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año);
        this.color = color;
        this.precio = precio;
    }

    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Precio: $${this.precio}`;
    }
}

// Crear instancias de ambas clases
let Vehiculo1 = new Vehiculo("Peugeot", "207", 2020);
let Auto1 = new Auto("Fiat", "Cronos", 2021, "Violeta", 8500000);

// Mostrar información en la consola
console.log("Información del Vehículo:");
console.log(Vehiculo1.obtenerInformacion());

console.log("Información del Automóvil:");
console.log(Auto1.obtenerInformacion());

