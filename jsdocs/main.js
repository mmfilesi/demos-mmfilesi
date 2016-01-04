'use strict';

/** @function
 * @name bazinga
 * @param {number} foo Un número formidable.
 * @returns {boolean} Si foo es 1, devuelve true.
 * @description Esta función comprueba si foo es 1 o no
 */

function bazinga(foo) {
    if (foo === 1) {
        return true;
    }
    return false;
}

/**
 * @namespace - miObjeto.
 * @description - Este es un objeto formidable.
 */
var miObjeto = {
    
   /** @memberof miObjeto.
    * @name - miMetodo.
    * @param {string} foo - Lore Ipsum.
    * @param {string} [bar] - Este parámetro es opcional.
    * @description - Este método consologuea foo.
    * @example
    * // Da por consola "Hola Mundo"
    * miObjeto.miObjeto("Hola Mundo");
    */ 
    miMetodo: function (foo) {
        console.log(foo);
    },
    
    /** @memberof miObjeto.
      * @name - otroMetodo.
      * @deprecated since version 1.0
    */
    otroMetodo: function() {
        console.log("Soy un método que ya no se usa");
    }
};

/** @class 
 * @name MiClase.
 * @param {string} unDatoInicial - Lore Ipsum.
 * @param {string} otroDatoInicial - Lore Ipsum.
 * @classdesc - Ejemplo documentación de clase.
*/
function MiClase (unDatoInicial, otroDatoInicial) {    

    this.unDatoInical = unDatoInicial;
    this.otroDatoInicial = otroDatoInicial;
    
    /** 
     * @memberof MiClase.
     * @name metodoClase. */
    this.metodoClase = function (bar) {
        console.log(bar+this.unDatoInical);
    };
};

var miInstancia = new MiClase();
miInstancia.miMetodo("foo", "bar");


/**
 * @namespace
 * @property {array}  libros               - Listado de libros.
 * @property {number}  libros.id      - Id del libro
 * @property {string}  libros.autor        - Autor.
 * @property {string}  libros.titulo       - Título.
 */
var todoLibros = {
    libros: [
        {
        id: 1,
        autor: 'Robert Louis Stevenson',
        titulo: 'El doctor Jekyll y el señor Hyde'
        }
    ]
};