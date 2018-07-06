function primera_suma(){
    var aux=document.getElementById("suma");
    var num1=document.getElementById("num1");
    var num2=document.getElementById("num2");
    
    if(aux.value == ""|| (num1.value!=="" && num2.value!=="") ){
        aux.value=Number(num1.value)+Number(num2.value);
    }
    else if(aux.value!=="" && num1.value!=="" && num2.value==""){
        num2.value=aux.value-num1.value;
    }
    else if(aux.value!=="" && num2.value!=="" && num1.value==""){
        num1.value=aux.value-num2.value;
    }
    else if(aux.value !=="" && num1.value=="" && num2.value==""){
        num1.value=aux.value;
        num2.value=0;
    }
    
    
}


function sumar(){
    primera_suma();
}

