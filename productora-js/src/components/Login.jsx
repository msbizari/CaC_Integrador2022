import { Button } from 'bootstrap';
import '../styles/Login.css'

function Login() {
  return (
    <div className="container-login">
        <form>
          <label className="font-weight-bold" /> User
          <input className="text-dark rounded " type="text"></input>
          <label /> Password
          <input className="text-dark rounded" type="password"></input>
          <div className="div-button-log">
            <button className="button-login">Iniciar sesión</button>
          </div>
        </form>
        <p>¿No tienes una cuenta? <a href="/Registro">Registrate</a></p>
    </div>
  );
}

export default Login