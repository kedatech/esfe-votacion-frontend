import useElement from "../../../shared/store/elementStore";
import {Link} from "react-router-dom"
import Menu from "./_Menu"
import logo from './../../../../public/logo-esfe.png'
import { FaBookOpen, FaThumbsUp, FaLock} from "react-icons/fa";

const NavBar = () => {
  
  const { modalMenu } = useElement()
  console.log(modalMenu)

  return ( 
    <nav className="navbar">
      <h2 className="title">ESFE/Agapé</h2>

      <div className="nav-list" id={modalMenu}>
        <div className="logo">
          <img src={logo} />
          <p>Concurso Aniversario</p>
        </div>
        
          
          <Link to={"/app"}><FaBookOpen/>  ¿Cómo Funciona?</Link>
          
          <Link to={"/app"}><FaThumbsUp/> Creadores</Link>
           
          <Link to={"/app"}><FaLock/>Gestionar</Link>
        
      </div>
      <Menu />

      
    </nav>
   );
}
 
export default NavBar;