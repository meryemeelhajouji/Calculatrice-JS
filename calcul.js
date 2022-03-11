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

    return first_number /  last_number ;
 
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



let nomber1 = "0"
let nomber2 = ""
let operater =""



let ecran = document.querySelector('#scran')

let les_number = document.querySelectorAll('.number')
les_number.forEach((number) => {
   number.addEventListener('click' , () =>{
       if(operater===""){
           nomber1 = number.innerHTML
           ecran.innerHTML += nomber1 
       }else{
           nomber2 = number.innerHTML
           ecran.innerHTML += nomber2

       }
   })

})

let operation = document.querySelectorAll('.operation')
operation.forEach((operation) => {
    operation.addEventListener('click' , () =>{
        if(nomber2===""){
            operater = operation.innerHTML
          
        
        }else{
            nomber1 =operate(Number(nomber1),operater,Number(nomber2)) 
            
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
  
    nomber1 = ""
    nomber2 = ""
    operater = ""
    ecran.innerHTML = `${nomber1} ${operater} ${nomber2}`
})































