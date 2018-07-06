function primera_suma(a,b){
    var c=a+b;
    var aux=document.getElementById("suma");
    var num=document.getElementById("num1");
    var num3=document.getElementById("num2");
    
    if(aux.value == ""|| (a!=="" && b!=="") ){
        aux.value=c;
    }
    else if(aux.value!=="" && a!=="" && b==""){
        num3.value=aux.value-a;
    }
    else if(aux.value!=="" && b!=="" && a==""){
        num.value=aux.value-b;
    }
    else if(aux.value !=="" && a=="" && b==""){
        num.value=aux.value;
        num3.value=0;
    }
    
    
}


function sumar(){
    var x= document.getElementById("num1").value;
    x=Number(x);
    var y= document.getElementById("num2").value;
    y=Number(y);
    primera_suma(x,y);
}

