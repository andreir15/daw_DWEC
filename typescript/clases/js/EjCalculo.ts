function suma(form : any) :  void {
    var calculo=new Calculo(parseInt(form.numero1.value),parseInt(form.numero2.value));
    var resultado=calculo.sumar();
    document.getElementById("miDiv").innerHTML="El resultado de la suma de primer numero= "+form.numero1.value+" mas Segundo numero= "+form.numero2.value+" es igual a "+resultado;
}
function resta(form : any) :  void {
    var calculo=new Calculo(parseInt(form.numero1.value),parseInt(form.numero2.value));
    var resultado=calculo.restar();
    document.getElementById("miDiv").innerHTML="El resultado de la resta de primer numero= "+form.numero1.value+" menos Segundo numero= "+form.numero2.value+" es igual a "+resultado;
}