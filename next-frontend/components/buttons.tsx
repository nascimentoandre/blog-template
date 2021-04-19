import Link from "next/link"
import api from "../services/api"
import { BtnStyle } from "../styles/button"

interface Props {
  text: string
  link?: boolean
  to?: string
}

export const EditBtn: React.FC = () => {
  return (
    <BtnStyle style={{backgroundColor: "#20EB48"}}>Edit</BtnStyle>
  )
}

export const DeleteBtn: React.FC = () => {
  return (
    <BtnStyle style={{backgroundColor: "#EB2F23", marginRight: "3rem"}}>Delete</BtnStyle>
  )
}

export const Btn1: React.FC<Props> = ({ text, to, link }) => {
  return (
    link ? 
    <BtnStyle><Link href={to}>{ text }</Link></BtnStyle> : 
    <BtnStyle>{ text }</BtnStyle>
  )
}
