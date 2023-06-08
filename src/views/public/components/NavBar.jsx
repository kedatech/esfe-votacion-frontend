import useElement from "../../../shared/utils/store/elementStore";
import {Link, NavLink} from "react-router-dom"
import Menu from "./_Menu"
import logo from './../../../../public/logo-esfe.png'

import { ImStatsDots, ImTrophy } from "react-icons/im";
import { FaBookOpen} from "react-icons/fa";

const NavBar = () => {
  
  const { menu, setMenu } = useElement()
  
  const handleClick = () => {
    setMenu(false)
  }
    
  return ( 
    <>
    <div onClick={handleClick} className={`back-modal ${menu?"active":""}`}></div>
    <nav className="navbar">
      <Link to={"/"} className="title">ESFE/Agapé</Link>

      <div className={`nav-list ${menu?"active":""}`} >
        <div to={"/"} className="logo">
          <img src={logo} />
          <p>Concurso Aniversario</p>
        </div>
        
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
         <ImStatsDots/> Estadisticas   
        </NavLink>

        <NavLink 
          className={({isActive})=>(isActive?"navlink-active":null)} 
          to={"/que-es"}
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