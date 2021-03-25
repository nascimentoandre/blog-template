import { FooterContainer } from "../styles/footer"

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>André Nascimento</p>
      <p>© {new Date().getFullYear()}</p>
    </FooterContainer>  
  )
}

export default Footer