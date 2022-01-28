let booleano: boolean=true;
let numero:number=34;
let hex:number=0xf00d; //para un numero hexadecimal 0x y el numero en hexadecimal
let binary:number=0b1010;//para un numero en binario 0b y el numero en binario
let octal: number=0o744;//lo mismo para octal pero con 0o
let nombre:string="Andrei";
let apellido:string='Olteanu';
let direccion:string=`Calle Vergara`;
let frase:string=`Hola mi nombre es ${nombre} y tengo ${numero} años`; //esto solo se puede hacer con las comillas invertidas
let frase2:string="Hola me llamo "+nombre;
let cadena:string;

//var
var foo=123;
if(true){
    var foo=345;
}
console.log(foo);
//let
let foo2=124;
if(true){
    let foo2=567;
}
console.log(foo2);

let miVar: string|number="Cadena";
miVar=35;

type letrasYNumeros=string|number;
let otraVar: letrasYNumeros="Cadena";


cadena="Booleano= "+booleano+"<br>Numero= "+numero;
cadena+="<br>Nombre ("+nombre+"), Apellidos ("+apellido+")";
cadena+="<br>Direccion= "+direccion+"<br>";
cadena+="sentencia= "+frase;
document.body.innerHTML=cadena;