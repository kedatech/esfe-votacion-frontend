import useElement from "../../../shared/utils/store/elementStore";
import {Link} from "react-router-dom"
import Menu from "./_Menu"
import logo from './../../../../public/logo-esfe.png'

import { ImStatsDots, ImTrophy } from "react-icons/im";
import { FaBookOpen} from "react-icons/fa";

const NavBar = () => {
  
  const { modalMenu } = useElement()
  console.log(modalMenu)

  return ( 
    <nav className="navbar">
      <Link to={"/"} className="title">ESFE/Agapé</Link>

      <div className="nav-list" id={modalMenu}>
        <div to={"/"} className="logo">
          <img src={logo} />
          <p>Concurso Aniversario</p>
        </div>
        
          
          <Link to={"/concursos"}><ImTrophy/>Concursos</Link>
          <Link to={"/estadisticas"}><ImStatsDots/>Estadisticas</Link>
          {/* <Link to={"/gestionar"}><FaLock/>Gestionar</Link> */}
          <Link to={"/que-es-"}><FaBookOpen/> Información</Link>
        
      </div>
      <Menu />

      
    </nav>
   );
}
 
export default NavBar;