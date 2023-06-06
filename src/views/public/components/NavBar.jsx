import useElement from "../../../shared/store/elementStore";
import {Link} from "react-router-dom"
import Menu from "./_Menu"
const NavBar = () => {
  
  const { modalMenu } = useElement()
  console.log(modalMenu)

  return ( 
    <nav className="navbar">
      <h1 className="text-gradient">ESFE</h1>

      <div className="nav-list" id={modalMenu}>
        <Link to={"/home"}>Home</Link>
        <Link to={"/app"}>App</Link>
        <Link to={"/home"}>Home</Link>
      </div>
      <Menu />

      
    </nav>
   );
}
 
export default NavBar;