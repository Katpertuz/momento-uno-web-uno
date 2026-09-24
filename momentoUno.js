const NOMBRE_USUARIO = "admin";
const CONTRASENIA = 1230;
let intentos = 3;
let condition = true;

while (condition) {

    let usuario = prompt(`Ingrese su usuario `);
    let contrasenia = parseInt(prompt(`Ingrese su contraseña `));

    if (usuarioValido(usuario, NOMBRE_USUARIO) && contraseniaValida(contrasenia, CONTRASENIA)) {
        console.log(`Bienvenido al sistema `);
        condition = false
    } else {
        intentos--

        if (intentos > 0) {
            console.log(`Datos incorrectos, intento  ${intentos} de 3 ingrese nuevamente sus datos `);
        }}
        if (intentos === 0) {
            console.log(`Usuario bloqueado, has superado el número de intentos`);
            condition = false;
        }

    }

    function usuarioValido(usuario, NOMBRE_USUARIO) {
        return (usuario === NOMBRE_USUARIO);
    }

    function contraseniaValida(CONTRASENIA, contrasenia) {
        return (contrasenia === CONTRASENIA)
    } 