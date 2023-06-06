import {Link} from "react-router-dom"
import { useState } from "react";


const NavBar = () => {

  const [menu, setMenu] = useState(false)
  const handleClick = () => {
    setMenu(!menu)
    document.getElementById("modalMenu").classList.toggle("active")
  }
  
  return ( 
    <nav className="navbar" id="modalMenu">
      <h1 className="text-gradient">ESFE/Agape</h1>

      <div className="nav-list">
        <Link to={"/home"}>¿Como Funciona?</Link>
        <Link to={"/app"}>Creadores</Link>
        <Link to={"/home"}>Gestionar</Link>
      </div>
      
      <div className={menu?"menu btn2 open":"menu btn2"} onClick={handleClick} data-menu="2">
          <div className="icon"></div>
      </div>
    </nav>
   );
}
 
export default NavBar;

