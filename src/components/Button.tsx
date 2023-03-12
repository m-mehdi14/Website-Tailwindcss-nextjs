import { FC } from "react"


const Button:FC<{text:string}> = ({text}) => {
  return (
    <div >{text}</div>
  )
}

export default Button