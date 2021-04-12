import { PostStyle } from "../styles/pages/home"
//import Image from "next/image"
import Link from "next/link"
import Tag from "./tag"

interface Props {
  id?: number,
  title: string,
  description?: string,
  content: string,
  tags?: string[],
  createdAt: Date
  }

const Post: React.FC<Props> = ({ title, description, content, createdAt, tags }) => {
  if (!description) description = content.slice(0, 150);
  let d = new Date(createdAt);

  console.log(tags);

  return(
//    <PostStyle>
//      <Image src="https://picsum.photos/400/200" width={400} height={200}/>
//      <div className="info">
//        <h1>Post title</h1>
//        <p>Maecenas nulla enim, varius sit amet efficitur a, mollis vitae quam. Vestibulum sit amet posuere Donec nisi velit, hendrerit pharetra mauris vel, egestas dictum nisl ... <Link href="/">Read more</Link></p>
//        <div className="tags">
//          <p>Tags: </p>
//          <Tag tag="Sports" bgColor="yellow" />
//          <Tag tag="Health" bgColor="green" />
//          <Tag tag="Fitness" bgColor="cyan" />
//        </div>
//      </div>
//    </PostStyle>
      <PostStyle>
        <div className="info">
          <h1>{title}</h1>
          <p className="date">Created at: {d.toLocaleDateString()}, {d.toLocaleTimeString()}</p>
          <p className="description"> {description}...<Link href="/">Read more</Link> </p>
          <div className="tags">
            <p>Tags: </p>
            <div className="tag-container">
            {tags && tags.map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
            </div>
          </div>
        </div>
      </PostStyle>
  )
}

export default Post
