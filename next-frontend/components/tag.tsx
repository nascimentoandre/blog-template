import { TagStyle } from "../styles/tag"
import Link from "next/link"

interface Props {
  tag: string,
  bgColor: string,
}

const Tag: React.FC<Props> = ({tag, bgColor}) => {
  return (
    <TagStyle style={{backgroundColor: bgColor}}>
      <Link href="/">{tag}</Link>
    </TagStyle>
  )
}

export default Tag