import { NavbarFlexbox } from "../styles/navbar"
import Link from "next/link"

const Navbar: React.FC = () => {
  return (
    <NavbarFlexbox>
      <Link href="/">BLOG</Link>
      <div className="options">
        <Link href="/create">Create</Link>
        <input type="text" name="searchBar" id="searchBar" placeholder="  Search..." />
      </div>
    </NavbarFlexbox>
  )
}

export default Navbar