import { PostStyle } from "../styles/pages/home"
import Image from "next/image"

const Post: React.FC = () => {
  return(
    <PostStyle>
      <Image src="https://picsum.photos/400/200" width={400} height={200}/>
    </PostStyle>
  )
}

export default Post