import { Link } from 'react-router-dom'
import {ImGithub} from 'react-icons/im'
function Informacion() {
  return (
    <div className='informacion'>
      <h1>Bienvenido al 13° aniversario ESFE</h1>
      <p>Aqui podras votar por participantes en algunos de los concursos</p>

      <h2>¿Como votar?</h2>
        <p>Paso 1. <Link to={"/home"}>Registrate</Link> (Si ya lo hiciste puedes empezar a votar)</p>
      <p>Paso 2. <Link to={"/home"}>Votar</Link> Puedes usar escanera el QR de tu participante o escribi su codigo</p>
      <div>
        <img src="/images/take-qr.svg" alt="" />
      </div>
      <p>Paso 3. <Link to={"/concursos"}>Ver resultados</Link></p>
      <div>
        <img src="/images/tech.svg" alt="" />
      </div>
      <br />
      <h2>Creador por</h2>
      <a href="https://github.com/eliseodesign" className='link-a'>
        <ImGithub/> <p>Eliseo Arévalo Espinoza</p>
      </a>
      <a href="https://github.com/arev-dev" className='link-a'>
        <ImGithub/> <p>Daniel Rodrigez Arévalo</p>
      </a>

    </div>
  )
}
export default Informacion