const NOMBRE_USUARIO= admin;
const CONTRASENIA= 1230;
let intentos=3;
let condition=true;
let usuario=prompt(`Ingrese su usuario `);
let contrasenia=prompt(`Ingrese su contraseña `);


function  usuarioValido(usuario, NOMBRE_USUARIO){
  return (usuario===NOMBRE_USUARIO);
} 

function contraseniaValida(CONTRASENIA, contrasenia){
    return (contrasenia===CONTRASENIA);
}