const NOMBRE_USUARIO = admin;
const CONTRASENIA = 1230;
let intentos = 3;
let condition = true;


while (intentos > 0) {

    let usuario = prompt(`Ingrese su usuario `);
    let contrasenia = prompt(`Ingrese su contraseña `);

    if (usuarioValido && contraseniaValida) {
        console.log(`Bienvenido al sistema `);
        condition = false
    } else {
        prompt(`Datos incorrectos, intento  ${intentos} de  ${intentos + 1} `)
        intentos--;
    }

}
console.log(`Salimos del ciclo`);

function usuarioValido(usuario, NOMBRE_USUARIO) {
    return (usuario === NOMBRE_USUARIO);
}

function contraseniaValida(CONTRASENIA, contrasenia) {
    return (contrasenia === CONTRASENIA);
}

let vallidadcionUsuario = usuarioValido(NOMBRE_USUARIO, usuario);
let validacionContrasenia = contraseniaValida(contrasenia, CONTRASENIA);