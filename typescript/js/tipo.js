var booleano = true;
var numero = 34;
var hex = 0xf00d; //para un numero hexadecimal 0x y el numero en hexadecimal
var binary = 10; //para un numero en binario 0b y el numero en binario
var octal = 484; //lo mismo para octal pero con 0o
var nombre = "Andrei";
var apellido = 'Olteanu';
var direccion = "Calle Vergara";
var frase = "Hola mi nombre es ".concat(nombre, " y tengo ").concat(numero, " a\u00F1os"); //esto solo se puede hacer con las comillas invertidas
var frase2 = "Hola me llamo " + nombre;
var cadena;
//var
var foo = 123;
if (true) {
    var foo = 345;
}
console.log(foo);
//let
var foo2 = 124;
if (true) {
    var foo2_1 = 567;
}
console.log(foo2);
var miVar = "Cadena";
miVar = 35;
var otraVar = "Cadena";
cadena = "Booleano= " + booleano + "<br>Numero= " + numero;
cadena += "<br>Nombre (" + nombre + "), Apellidos (" + apellido + ")";
cadena += "<br>Direccion= " + direccion + "<br>";
cadena += "sentencia= " + frase;
document.body.innerHTML = cadena;
