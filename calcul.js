
 function afficher(val) 
 { 
     document.getElementById("output").value+=val 
 } 

 function effacer() 
 { 
     document.getElementById("output").value = "" 
 } 

 function calculer() 
 { 
     let a = document.getElementById("output").value 
     let b = eval(a) 
     document.getElementById("output").value = b 
 } 
 
 function additionner (nomber1,nomber2){
    return nomber1+nomber2;
 }
 function soustraire  (nomber1,nomber2){
    return nomber1-nomber2;
 }
 function multiplier  (nomber1,nomber2){
    return nomber1*nomber2;
 }
 function diviser (nomber1,nomber2){
    return nomber1/nomber2;
 }
