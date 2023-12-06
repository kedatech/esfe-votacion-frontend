import { Link } from 'react-router-dom'
import {ImGithub} from 'react-icons/im'
function Informacion() {
  return (
    <div className='informacion'>
      <h1>Bienvenido al sitio de Votaciones ESFE</h1>
      <p>Aquí podrás votar por participantes en algunos de los concursos</p>

      <h2>¿Cómo votar?</h2>
        <p>Paso 1. <Link to={"/home"}>Inicia sesión</Link> (Si ya lo hiciste puedes empezar a votar)</p>
      <p>Paso 2. <Link to={"/home"}>Votar</Link> Puedes escanear con tu cámara el QR de tu participante o escribe su código</p>
      <div>
        <img src="/images/take-qr.svg" alt="" />
      </div>
      <p>Paso 3. <Link to={"/concursos"}>Ver resultados</Link></p>
      <div>
        <img src="/images/tech.svg" alt="" />
      </div>
      <br />
      <br />
      <h2>Creado por</h2>
      <a href="https://github.com/eliseodesign" className='link-a'>
        <ImGithub/> <p>Eliseo Arévalo Espinoza</p>
      </a>
      <a href="https://github.com/arev-dev" className='link-a'>
        <ImGithub/> <p>Daniel Rodríguez Arévalo</p>
      </a>
      <br />
      <br />

    </div>
  )
}
export default Informacion