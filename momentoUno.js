const NOMBRE_USUARIO = "admin";
const CONTRASENIA = 1230;
let intentos = 3;
let condition = true;
let totalIntentos = 3;


while (condition) {

    let usuario = prompt(`Ingrese su usuario `);
    let contrasenia = parseInt(prompt(`Ingrese su contraseña `));

    if (usuarioValido(usuario, NOMBRE_USUARIO) && contraseniaValida(contrasenia, CONTRASENIA)) {
        console.log(`Bienvenido al sistema `);
        condition = false
    } if(intentos > 1 && intentos <= totalIntentos)
    {
        intentos--
        console.log(`Datos incorrectos, te quedan  ${intentos} de  ${totalIntentos}  ingrese nuevamente sus datos `)
    }
else {
        console.log(`Usuario bloqueado, has superado el número de intentos`);
        condition = false
    }



}


function usuarioValido(usuario, NOMBRE_USUARIO) {
    return (usuario === NOMBRE_USUARIO);
}

function contraseniaValida(CONTRASENIA, contrasenia) {
    return (contrasenia === CONTRASENIA)
} 