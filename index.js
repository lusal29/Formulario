var nombre = document.getElementById('name');
var email = document.getElementById('mail');
var emailValido =/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
var contraseña = document.getElementById('clave');
var contraseña2 = document.getElementById('clave2');
var boton = document.getElementById('boton');
var x=""; var y=""; var c=""; var A=""; 


boton.addEventListener('click',(evento)=>{
  correctName(nombre.value, nombre);
  correctEmail(email.value, email,emailValido);
  correctContraseña2(contraseña2.value, contraseña2,contraseña.value);
  correctContraseña(contraseña.value, contraseña);
  enviar();
  x= ""; y="";c=""; A="";
  evento.preventDefault();
 
});

 

// Validación Nombre
function correctName(valorInput,input){
  if(valorInput.length == 0){
    alertaError(input);
    document.getElementById("falloImg").style.display = 'block';
    document.getElementById("textFallo").style.display = 'block';
    document.getElementById("aciertoImg").style.display = 'none';
    
    
    
  

  }else{
    alertaAcierto(input);
    document.getElementById("aciertoImg").style.display = 'block';
   document.getElementById("textFallo").style.display = 'none';
    x= 1;



  }
  
}

//Validación Clave
function correctContraseña(valorInput,input){
  if (valorInput.length == 0) {
    alertaError(input);
    document.getElementById("falloClave").style.display = 'block';
    document.getElementById("textFallo3").style.display = 'block';
    document.getElementById("caracteres").style.display = 'none';
    document.getElementById("aciertoClave").style.display = 'none';
    
    
  } else if (valorInput.length >= 9 ) {
    alertaError(input);
    document.getElementById("falloClave").style.display = 'block';
    document.getElementById("caracteres").style.display = 'block';
    document.getElementById("aciertoClave").style.display = 'none';
    

  } else {
    alertaAcierto(input);
    document.getElementById("aciertoClave").style.display = 'block';
    document.getElementById("textFallo3").style.display = 'none';
    document.getElementById("caracteres").style.display = 'none';
    document.getElementById("falloClave").style.display = 'block';
    y=1;
    
  
    
  }
}
// Validación clave2 
function correctContraseña2(valorInput,input,valor2){
  if (valorInput.length == 0  ) {
    alertaError(input);
    document.getElementById("falloClave2").style.display = 'block';
      document.getElementById("textFallo4").style.display = 'block';
      document.getElementById("aciertoClave2").style.display = 'none';
      document.getElementById("contIguales").style.display = 'none';
     

  } else if (valorInput == valor2) {
    alertaAcierto(input);
    document.getElementById("aciertoClave2").style.display = 'block';
    document.getElementById("textFallo4").style.display = 'none';
    document.getElementById("contIguales").style.display = 'none';
    c=1;
   
    
    
  } else{
    alertaError(input);
    document.getElementById("falloClave2").style.display = 'block';
    document.getElementById("textFallo4").style.display = 'none';
    document.getElementById("contIguales").style.display = 'block';
    document.getElementById("aciertoClave2").style.display = 'none';
    
  }
  

}
//Valedación Email
function correctEmail(valorInput,input,correctEmail){
  if (valorInput.length == 0  ) {
    alertaError(input);
    document.getElementById("falloEmail").style.display = 'block';
    document.getElementById("textFallo2").style.display = 'block';
    document.getElementById("invalido").style.display='none';
    document.getElementById("aciertoEmail").style.display = 'none';
    
  } else if (correctEmail.test(input.value)) {
    alertaAcierto(input);
    document.getElementById("aciertoEmail").style.display = 'block';
    document.getElementById("textFallo2").style.display = 'none';
    document.getElementById("invalido").style.display='none';
    A=1;
    
  } else{
    alertaError(input);
    document.getElementById("falloEmail").style.display = 'block';
    document.getElementById("aciertoEmail").style.display = 'none';
    document.getElementById("invalido").style.display='block';
    document.getElementById("textFallo2").style.display = 'none';
    
  
  }
  

}

//Funciones cambio de color de borde
function alertaError(input,){
  input.style.border = '3px solid red';
  
}
function alertaAcierto(input,){
  input.style.border = '3px solid green'

}


//Función para que salte la alerta de correcto

 function enviar(){
  if(x== 1 && y== 1 && c == 1 && A==1)
  alert("La inscripción ha sido correcta")
 }