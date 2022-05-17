function Formulario() {
  return (
    <div className="container-login">
      <p>
        Crea una cuenta en Nombre_Empresa. Es gratis y solo te toma un minuto
      </p>
      <form>
        <label className="font-weight-bold" /> Nombre para mostrar
        <input className="text-dark rounded " type="text"></input>
        <label className="font-weight-bold" /> Correo Electrónico
        <input className="text-dark rounded " type="text"></input>
        <label /> Contraseña
        <input className="text-dark rounded" type="password"></input>
        <div className="div-button-log">
          <button className="button-login">Registrarse</button>
        </div>
      </form>
      <p>
        ¿Ya tienes Cuenta? <a href="/IniciarSesion">Inicia sesión</a>
      </p>
    </div>
  );
}

export default Formulario