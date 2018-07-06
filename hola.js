function primera_suma(a,b){
    var c=a+b;
    document.getElementById("suma").value.innerHTML=c;
    alert(c);
}


function sumar(){
    var x= document.getElementById("num1").value;
    x=Number(x);
    var y= document.getElementById("num2").value;
    y=Number(y);
    primera_suma(x,y);
}

