let list:number[]=[1,2,3];
//let list2:Array<number>=[1,2,3];
let list2:Array<string>=["hola","que","tal"];
let cadena:string;
cadena="Array1= "+list;
cadena+="<br>Array2= "+list2;

//Enumeraciones
enum Animals{cat,lion,monkey,rabbit,dog};
let c:Animals=Animals.cat;
console.log(Animals[3]);
console.log(Animals.monkey);
cadena+="<br>Animals[3]= "+Animals[3];
cadena+="<br>Animals.monkey= "+Animals.monkey;


document.body.innerHTML=cadena;