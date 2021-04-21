import Link from "next/link"
import api from "../services/api"
import { BtnStyle } from "../styles/button"
import { useRouter } from "next/router"

interface Props {
  text: string
  link?: boolean
  to?: string
}

interface DelBtnInterface {
  id: number
}

export const EditBtn: React.FC = () => {
  return (
    <BtnStyle style={{backgroundColor: "#20EB48"}}>Edit</BtnStyle>
  )
}


export const DeleteBtn: React.FC<DelBtnInterface> = ({ id }) => {
  const router = useRouter()

  const handleDelete: ((id:number) => void) = async (id) => {
    try {
      const del = await api.delete(`/posts/delete/${id}`)
    } catch (err) {
      console.error(err.message)
    } finally {
      router.push("/")
    }
  }

  return (
    <BtnStyle style={{backgroundColor: "#EB2F23", marginRight: "3rem"}} onClick={() => handleDelete(id)}>Delete</BtnStyle>
  )
}

export const Btn1: React.FC<Props> = ({ text, to, link }) => {
  return (
    link ? 
    <BtnStyle><Link href={to}>{ text }</Link></BtnStyle> : 
    <BtnStyle>{ text }</BtnStyle>
  )
}
