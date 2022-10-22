import React from "react"
import "./dropdown.css"

interface Props {
   children: React.ReactNode;
   visible: Boolean
}

function Dropdown ({children, visible}: Props) {
   return (
      <div className="dropdown">
         {visible && children}
      </div>
   )
}

export default Dropdown