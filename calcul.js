function addition(first_number,last_number){

    return first_number + last_number ;
 
}
function soustraction(first_number,last_number){

    return first_number - last_number ;
 
}
function multiplication(first_number,last_number){

    return first_number *  last_number ;
 
}
function diivision(first_number,last_number){
if (last_number =="0"){
   alert('Désolé... Nous ne pouvons pas diviser par zéro')
}else{
    return first_number /  last_number ;
 
}
    
}

  let operate =  function (first_number,operateur,last_number)  {
     
  switch(operateur){
      case'+':
      return addition (first_number,last_number);
      break;
      case'-':
      return soustraction (first_number,last_number);
      break;
      case'*':
      return multiplication (first_number,last_number);
      break;
      case'/':
      return diivision (first_number,last_number);
      break;
      default:
       //   console.log("mouchkila")
  }
}



let nomber1 = ""
let nomber2 = ""
let operater =""




let ecran = document.querySelector('#scran')

let les_number = document.querySelectorAll('.number')

les_number.forEach((number) => {
   number.addEventListener('click' , () =>{
       if(operater==""){
        if (nomber1 =="0"){
            nomber1 = number.innerHTML
        }else{
             nomber1 += number.innerHTML
        }
          
         
       }else{
           nomber2 += number.innerHTML
          

       }
       
       ecran.innerHTML = `${nomber1} ${operater} ${nomber2}`
   })

})

let operation = document.querySelectorAll('.operation')
operation.forEach((operation) => {
    operation.addEventListener('click' , () =>{
        if(nomber2==""){
            operater = operation.innerHTML
            
        
        }else{
           
            nomber1 = operate(Number(nomber1),operater,Number(nomber2)) 
            operater = operation.innerHTML
            nomber2=""
            
           
        }
        ecran.innerHTML = `${nomber1} ${operater} ${nomber2}`
    })
})

let egale = document.querySelector('#egale')
egale.addEventListener('click' , () => {

    ecran.innerHTML = operate(Number(nomber1),operater,Number(nomber2)) 
} )



let effacer = document.querySelector('#effacer')

effacer.addEventListener('click' , () => {
  
    nomber1 = "0"
    nomber2 = ""
    operater = ""
    ecran.innerHTML = `${nomber1} ${operater} ${nomber2}`
})

let vergule = document.querySelector('#vergule')
vergule.addEventListener('click' , () => {
  
    if(operater ==""){
        if(!nomber1.includes(".")){
              nomber1 += "."
        }
      
    }else{
        if(!nomber2.includes(".")){
            nomber2 += "."
      }
    }
    ecran.innerHTML = `${nomber1} ${operater} ${nomber2}`
})































