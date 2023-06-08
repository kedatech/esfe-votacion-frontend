// import { useState } from "react";
import useElement from "../../../shared/utils/store/elementStore"

const Menu = () => {

  // const [menu, setMenu] = useState(false)
  const { menu, setMenu } = useElement()
  const handleClick = () => {
    setMenu(!menu)
  }

  return ( 


    <div className={menu?"menu btn2 open":"menu btn2"} onClick={handleClick} data-menu="2">
        <div className="icon"></div>
    </div>

    
  )
}
 
export default Menu;