var nombre = document.getElementById('name');
var email = document.getElementById('mail');
var emailValido =/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
var contraseña = document.getElementById('clave');
var contraseña2 = document.getElementById('clave2');
const boton = document.getElementById('enviar');//Constante input submit
const failNombre =document.getElementById('errorNombre');
var x= "";
var y="";
var c=""; 
var A="";




boton.addEventListener('click',(evento)=>{
  correctName(nombre.value, nombre);
  correctEmail(email.value, email,emailValido);
  correctContraseña2(contraseña2.value, contraseña2,contraseña.value);
  correctContraseña(contraseña.value, contraseña);
  evento.preventDefault();
  enviar();
  x= "";
  y="";
  c=""; 
  A="";
 
});

 

//Nombre
function correctName(valueInput, divInput){
  if(valueInput.length == 0){
    showError(divInput);
    document.getElementById("falloImg").style.display = 'block';
    document.getElementById("textFallo").style.display = 'block';
    document.getElementById("aciertoImg").style.display = 'none';
    
    
    
  

  }else{
    hideError(divInput);
    document.getElementById("aciertoImg").style.display = 'block';
   document.getElementById("textFallo").style.display = 'none';
    x= 1;



  }
  
}

//Clave
function correctContraseña(valorInput,divInput){
  if (valorInput.length == 0) {
    showError(divInput);
    document.getElementById("falloClave").style.display = 'block';
    document.getElementById("textFallo3").style.display = 'block';
    document.getElementById("caracteres").style.display = 'none';
    document.getElementById("aciertoClave").style.display = 'none';
    
    
  } else if (valorInput.length >= 9 ) {
    showError(divInput);
    document.getElementById("falloClave").style.display = 'block';
    document.getElementById("caracteres").style.display = 'block';
    document.getElementById("aciertoClave").style.display = 'none';
    

  } else {
    hideError(divInput);
    document.getElementById("aciertoClave").style.display = 'block';
    document.getElementById("textFallo3").style.display = 'none';
    document.getElementById("caracteres").style.display = 'none';
    document.getElementById("falloClave").style.display = 'block';
    y=1;
    
  
    
  }
}
//clave2 
function correctContraseña2(valorInput,divInput,valor2){
  if (valorInput.length == 0  ) {
    showError(divInput);
    document.getElementById("falloClave2").style.display = 'block';
      document.getElementById("textFallo4").style.display = 'block';
      document.getElementById("aciertoClave2").style.display = 'none';
      document.getElementById("contIguales").style.display = 'none';
     

  } else if (valorInput == valor2) {
    hideError(divInput);
    document.getElementById("aciertoClave2").style.display = 'block';
    document.getElementById("textFallo4").style.display = 'none';
    document.getElementById("contIguales").style.display = 'none';
    c=1;
   
    
    
  } else{
    showError(divInput);
    document.getElementById("falloClave2").style.display = 'block';
    document.getElementById("textFallo4").style.display = 'none';
    document.getElementById("contIguales").style.display = 'block';
    document.getElementById("aciertoClave2").style.display = 'none';
    
  }
  

}
//Email
function correctEmail(valorInput,divInput,correctEmail){
  if (valorInput.length == 0  ) {
    showError(divInput);
    document.getElementById("falloEmail").style.display = 'block';
    document.getElementById("textFallo2").style.display = 'block';
    document.getElementById("invalido").style.display='none';
    document.getElementById("aciertoEmail").style.display = 'none';
    
  } else if (correctEmail.test(divInput.value)) {
    hideError(divInput);
    document.getElementById("aciertoEmail").style.display = 'block';
    document.getElementById("textFallo2").style.display = 'none';
    document.getElementById("invalido").style.display='none';
    A=1;
    
  } else{
    showError(divInput);
    document.getElementById("falloEmail").style.display = 'block';
    document.getElementById("aciertoEmail").style.display = 'none';
    document.getElementById("invalido").style.display='block';
    document.getElementById("textFallo2").style.display = 'none';
    
  
  }
  

}

function showError(divInput,){
  divInput.style.border = '3px solid red';
  
}
function hideError(divInput,){
  divInput.style.border = '3px solid green'

}




 function enviar(){
  if(x== 1 && y== 1 && c == 1 && A==1)
  alert("La inscripción ha sido correcta")
 }