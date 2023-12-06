import useElement from "../../../shared/utils/store/elementStore";
import {Link, NavLink} from "react-router-dom"
import Menu from "./_Menu"
import logo from '/logo-esfe.png'
import logo2 from '/esfe-logo-sin-fondo-borde.png'

import { ImStatsDots, ImTrophy} from "react-icons/im";
import { FaBookOpen, FaQrcode} from "react-icons/fa";

const NavBar = () => {
  
  const { menu, setMenu } = useElement()
  
  const handleClick = () => {
    setMenu(false)
  }
    
  return ( 
    <>
    <div onClick={handleClick} className={`back-modal ${menu?"active":""}`}></div>
    <nav className="navbar">
      <Link to={"/"} className="title">ESFE</Link>

      <div className={`nav-list ${menu?"active":""}`} >
        <div to={"/home"} className="logo">
          <img src={logo2} />
          <p>Show Room</p>
        </div>

        <NavLink 
          className={({isActive})=>(isActive?"navlink-active":null)} 
          to={"/"}
          onClick={handleClick}
        > 
          <FaQrcode/>  Inicio  
        </NavLink>
        
        <NavLink 
          className={({isActive})=>(isActive?"navlink-active":null)} 
          to={"/concursos"}
          onClick={handleClick}
        > 
         <ImTrophy/> Concursos   
        </NavLink>
        
        <NavLink 
          className={({isActive})=>(isActive?"navlink-active":null)} 
          to={"/estadisticas"}
          onClick={handleClick}
        > 
         <ImStatsDots/> Estadísticas   
        </NavLink>

        <NavLink 
          className={({isActive})=>(isActive?"navlink-active":null)} 
          to={"/informacion"}
          onClick={handleClick}
        > 
         <FaBookOpen/> Información   
        </NavLink>

        
      </div>
      <Menu />

      
    </nav>
    </>
   );
}
 
export default NavBar;