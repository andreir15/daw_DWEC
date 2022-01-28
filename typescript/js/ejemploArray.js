var list = [1, 2, 3];
//let list2:Array<number>=[1,2,3];
var list2 = ["hola", "que", "tal"];
var cadena;
cadena = "Array1= " + list;
cadena += "<br>Array2= " + list2;
//Enumeraciones
var Animals;
(function (Animals) {
    Animals[Animals["cat"] = 0] = "cat";
    Animals[Animals["lion"] = 1] = "lion";
    Animals[Animals["monkey"] = 2] = "monkey";
    Animals[Animals["rabbit"] = 3] = "rabbit";
    Animals[Animals["dog"] = 4] = "dog";
})(Animals || (Animals = {}));
;
var c = Animals.cat;
console.log(Animals[3]);
console.log(Animals.monkey);
cadena += "<br>Animals[3]= " + Animals[3];
cadena += "<br>Animals.monkey= " + Animals.monkey;
document.body.innerHTML = cadena;
