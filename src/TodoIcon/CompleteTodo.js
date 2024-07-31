import React from "react";
import { FaCheck } from "react-icons/fa";

const CompleteIcon = (props) => {
    const {className, onClick} = props
    
  return (
    <FaCheck
        className={className}
        onClick={onClick}
        type="check"
    />
  )
}

export { CompleteIcon };