import { useState } from "react";
import useElement from "../../../shared/utils/store/elementStore"

const Menu = () => {

  const [menu, setMenu] = useState(false)
  const { modalMenu } = useElement()
  const handleClick = () => {
    setMenu(!menu)
    document.getElementById(modalMenu).classList.toggle("active")
  }

  return ( 


    <div className={menu?"menu btn2 open":"menu btn2"} onClick={handleClick} data-menu="2">
        <div className="icon"></div>
    </div>

    
  )
}
 
export default Menu;