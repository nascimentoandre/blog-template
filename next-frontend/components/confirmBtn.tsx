import Link from "next/link"
import { BtnStyle } from "../styles/button"

interface Props {
  text: string
  link?: boolean
  to?: string
}

const Btn1: React.FC<Props> = ({ text, to, link }) => {
  return (
    link ? 
    <BtnStyle><Link href={to}>{ text }</Link></BtnStyle> : 
    <BtnStyle>{ text }</BtnStyle>
  )
}

export default Btn1