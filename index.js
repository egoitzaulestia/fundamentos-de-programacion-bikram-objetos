// Pair Programming

const dev1 = "Santy Orozco 🧪";

const dev2 = "Egoitz Aulestia 🚀";


/////////////
// Objetos //
/////////////

// Declaración

// 1.- Crea un 'objeto' de nombre 'Coche' que tenga las propiedades: 'marca, modelo, matricula'
// Contiene la propiedad matricula
// Contiene la propiedad modelo
// Contiene la propiedad marca

const Coche = {
    marca: "Nissan",
    modelo: "Primera",
    matricula: "FBC1389"
};


// 2.- Crea un 'objeto' de nombre 'Casa' que tenga las propiedades: 'codPostal, calle, portal, piso'
// Contiene la propiedad codPostal
// Contiene la propiedad calle
// Contiene la propiedad portal
// Contiene la propiedad piso

const Casa = {
    codPostal: "12345",
    calle: "Sésamo",
    portal: "2",
    piso: "bajo"
};


// 3.- Crea un 'objeto' de nombre 'FullStackDeveloper' que tenga las propiedades: 'array lenguajes, array proyectos'
// Contiene la propiedad lenguajes
// Contiene la propiedad proyectos

const FullStackDeveloper = {
    lenguajes: ["Python", "R", "JavaScript"],
    proyectos: ["Angle", "Neural Interface Technologies"]
};


// 4.- Crea un 'objeto' de nombre 'Perro' que tenga las propiedades: 'nombre, raza, color, edad, función ladrar (imprime por consola un ladrido), función popo (devuelve el valor: Math.random() * 3)'
// Contiene la propiedad nombre
// Contiene la propiedad raza
// Contiene la propiedad color
// Contiene la propiedad edad
// Contiene la propiedad función ladrar
// Contiene la propiedad función popo
// Lectura de propiedades

const Perro = {
    nombre: "Dax",
    raza: "Mastín",
    color: "Marron",
    edad: 8,

    ladrar: function() {
        console.log("Guau!");
    },

    popo: function() {
        return Math.random() * 3;
    }
}; 


// 5.- Dado un 'objeto' de nombre 'Portatil' obtén el valor de la propiedad 'marca con .marca' guardándolo en la variable 'marcaPortatil'

const marcaPortatil = Portatil.marca;


// 6.- Dado un 'objeto' de nombre 'Portatil' obtén el valor de la propiedad 'marca con ['marca'] guardándolo en la variable 'marcaPortatil2'

const marcaPortatil2 = Portatil["marca"];


// 7.- Dado un 'objeto' de nombre 'Concierto' obtén el valor de la propiedad 'grupos' guardándolo en la variable 'grupos'

const grupos = Concierto.grupos;


// 8.- Dado un 'objeto' de nombre 'Led' obtén el valor de las propiedades 'rojo, verde y azul' guardándolo en la variable 'array RGB[rojo, verde, azul]'
// Modificación de propiedades

const RGB = [Led.rojo, Led.verde, Led.azul];


// 9.- Dado un 'objeto' de nombre 'Portatil' modifica el valor de la propiedad 'modelo' por el valor 'P345'

Portatil.modelo = "P345";


// 10.- Dado un 'objeto' de nombre 'Concierto' añade el valor 'Guns N' Roses' a la propiedad 'cartelera'

Concierto.cartelera.push("Guns N' Roses");


// 11.- Dado un 'objeto' de nombre 'Concierto' modifica el valor de la propiedad 'fecha' por el valor new Date()

Concierto.fecha = new Date();


// 12.- Dado un 'objeto' de nombre 'Impresora' modifica el valor de la propiedad 'imprimiendo' por el valor 'objeto con propiedades: nombreArchivo, copias, numPaginas'

Impresora.imprimiendo = {nombreArchivo: "Attention Is All You Need", copias: 1, numPaginas: 15};



//////////////
// proyecto //
//////////////

// Objetos

// Declaración

// 13.- Crea un 'objeto' de nombre 'Noticia' que tenga las propiedades: 'titular, cuerpo'
// Contiene la propiedad titular
// Contiene la propiedad cuerpo

const Noticia = {
    titular: "I have a dream",
    cuerpo: "I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation. ..."
};


// 14.- Crea un 'objeto' de nombre 'Persona' que tenga las propiedades: 'nombre, apellidos, edad'
// Contiene la propiedad nombre
// Contiene la propiedad apellidos
// Contiene la propiedad edad

const Persona = {
    nombre: "Ilya",
    apellidos: "Sutskever",
    edad: 38
};


// 15.- Crea un 'objeto' de nombre 'Avion' que tenga las propiedades: 'numPasajeros, función despegar (imprime por consola 'despegando'), función volar (imprime por consola llegando al destino), función aterrizar (imprime por consola 'aterrizando')
// Contiene la propiedad numPasajeros
// Contiene la función despegar
// Contiene la función volar
// Contiene la función aterrizar

const Avion = {
    numPasajeros: 340,

    despegar: function() {
        console.log("despegando");
    },

    volar: function() {
        console.log("llegando al destino");
    },

    aterrizar: function() {
        console.log("aterrizando")
    }
};


// 16.- Crea un 'objeto' de nombre 'Paquete' que tenga la propiedad: 'array contenido con todos los objetos que contenga el paquete'
// Contiene la propiedad paquete de tipo array

const Paquete = {
    contenido: [1, 2, 3]
};


// 17.- Crea un 'objeto' de nombre 'Pais' que tenga las propiedades: 'numHabitantes, continente, gentilicio'
// Contiene la propiedad numHabitantes
// Contiene la propiedad continente
// Contiene la propiedad gentilicio
// Lectura de propiedades

const Pais = {
    numHabitantes: 89_000_000,
    continente: "Asia",
    gentilicio: "Singapurense"
};


// 18.- Dado un 'objeto' de nombre 'O_Error' obtén el valor de la propiedad 'codigo' guardándolo en la variable 'codError'

const codError = O_Error.codigo;


// 19.- Dado un 'objeto' de nombre 'Grupo' obtén el valor de la propiedad 'integrantes' guardándolo en la variable 'integrantes'

const integrantes = Grupo.integrantes;


// 20.- Dado un 'objeto' de nombre 'Impresora' obtén el valor de la propiedad 'tinta' guardándolo en la variable 'nivelesTinta'

const nivelesTinta = Impresora.tinta;


// 21.- Dado un 'objeto' de nombre 'Pantalla' obtén el valor de la propiedad 'pixeles' guardándolo en la variable 'pixeles'

const pixeles = Pantalla.pixeles;


// 22.- Dado un 'objeto' de nombre 'Movil' obtén el valor de la propiedad 'especificaciones con ['especificaciones']' guardándolo en la variable 'especificaciones'

const especificaciones = Movil['especificaciones'];



// Modificación de propiedades

// 23.- Dado un 'objeto' de nombre 'Grupo' modifica el valor de la propiedad 'numIntegrantes' por el valor '5'

Grupo.numIntegrantes = 5;


// 24.- Dado un 'objeto' de nombre 'Pantalla' modifica el valor de la propiedad 'dimensiones' por el valor '1920x1080'

Pantalla.dimensiones = '1920x1080';


// 25.- Dado un 'objeto' de nombre 'Led' modifica el valor de la propiedad 'encendido' por el valor 'false si vale true y true si vale false'

Led.encendido = !Led.encendido;


// 26.- Dado un 'objeto' de nombre 'Movil' modifica el valor de la propiedad 'temperatura' por el valor '20º'

Movil.temperatura = '20º'