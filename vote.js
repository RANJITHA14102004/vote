function vote(){
var name=document.getElementById("name").value;
var age=document.getElementById("age").value;
var country=document.getElementById("country").value;
var p=document.getElementById("p");
var countryy="India";

    if(age>=18){
        if(country==countryy){
        p.innerHTML=name +" you are eligiable";
    }else{
        p.innerHTML=name +" you are not eligiable";
    }
}
else{
        p.innerHTML=name +" you are not eligiable";
    }

    
}