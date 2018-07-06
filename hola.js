function primera_suma(a,b){
    var c=a+b;
    var aux=document.getElementById("suma");
    aux.value=c;
    alert(c);
}


function sumar(){
    var x= document.getElementById("num1").value;
    x=Number(x);
    var y= document.getElementById("num2").value;
    y=Number(y);
    primera_suma(x,y);
}

