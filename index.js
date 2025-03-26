const Coche = {
    marca: "Ferrari",
    modelo: "Testarrosa",
    matricula: 123456789,
}

const Casa = {
    codPostal: "40025",
    calle: "Laurin",
    portal: "14",
    piso: "4"
}

const FullStackDeveloper = {
    lenguajes: ["JavaScript", "Python", "C#"],
    proyectos: ["Angle", "Neural Interface Technologies"],
}

const Perro = {
    nombre: "Puppy",
    raza: "Pitbull",
    color: "Negro",
    edad: 5,

    ladrar: function() {
        console.log("ladrar")
    },

    popo: function() {
        return Math.random() * 3
    }
}

const marcaPortatil = Portatil.marca

const marcaPortatil2 = Portatil["marca"]

const grupos = Concierto.grupos 

const RGB = [Led.rojo, Led.verde, Led.azul]

Portatil.modelo = "P345"

Concierto.cartelera.push("Guns N' Roses")

Concierto.fecha = new Date()

Impresora.imprimiendo = {nombreArchivo: "1", copias: "2",  numPaginas: 13}

const Noticia = {
    titular: "Ai Revolution",
    cuerpo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae corrupti vel cum?"
}

const Persona = {
    nombre: "John",
    apellidos: "Anderson",
    edad: 25
}

const Avion = {
    numPasajeros: 235,

    despegar: function() {
        console.log("despegando")
    },

    volar: function() {
        console.log("llegando al destino")
    },

    aterrizar: function() {
        console.log("aterrizando")
    }
}

const Paquete = {
    contenido: [1, 2, 3]
}

const Pais = {
    numHabitantes: 400000,
    continente: "Asia",
    gentilicio: "Singapurense"
}

const codError = O_Error.codigo

const integrantes = Grupo.integrantes

const nivelesTinta = {rojo: Impresora.tinta.rojo, verde: Impresora.tinta.verde, azul: Impresora.tinta.azul}

const pixeles = Pantalla.pixeles

const especificaciones = Movil["especificaciones"]

Grupo.numIntegrantes = 5

Pantalla.dimensiones = "1920x1080"

Led.encendido = !Led.encendido

Movil.temperatura = "20º"