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

const Post: React.FC<Props> = ({ id, title, description, content, createdAt, tags }) => {
  if (!description) description = content.slice(0, 150);
  let d = new Date(createdAt)

  return(
      <PostStyle>
        <div className="info">
          <h1><Link href={`/posts/${id}`}>{title}</Link></h1>
          <p className="date">{d.toLocaleDateString()}, {d.toLocaleTimeString()}</p>
          <p className="description"> {description}...<Link href={`/posts/${id}`}>Read more</Link> </p>
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
