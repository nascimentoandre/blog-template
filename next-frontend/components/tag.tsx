import { TagStyle } from "../styles/tag"
import Link from "next/link"

interface Props {
  tag: string,
}

const randomColor: (() => string) = () => {
  let colors = ["gold", "#7FFFD4", "magenta", "#FAEBD7", "#A522A2A", "#8a2be2", "#d2691e", "#dc143c", "#dbd76b", "#e9967a", "#8fbc8f", "#adff2f", "#ff69b4"]
  return colors[Math.round(Math.random()*(colors.length-1))]
}

const Tag: React.FC<Props> = ({ tag }) => {
  let color = randomColor();
  return (
    <TagStyle style={{backgroundColor: color}}>
      <Link href="/">{tag}</Link>
    </TagStyle>
  )
}

export default Tag
