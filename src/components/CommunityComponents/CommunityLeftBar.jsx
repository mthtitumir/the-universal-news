import { BiHome, BiPencil, BiSearch } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { MdOutlineArticle } from "react-icons/md"
import CommunityProfileDown from "./CommunityProfileDown";

const CommunityLeftBar = () => {
  const f = "flex gap-4 text-xl md:text-2xl px-4 py-1 rounded-lg hover:bg-cyan-100 hover:underline";
  return (
    <div>
      <div className=" flex flex-col gap-4 py-2 ">
        <button className={f}><BiHome /> Home</button>
        <button className={f}><BiSearch /> Explore</button>
        <button className={f}><CgProfile /> Profile</button>
        <button className={f}><MdOutlineArticle />My Posts</button>
        <button className={f}><BiPencil /> Comments</button>
      </div>
      <div className="divider px-2"></div>
      <CommunityProfileDown />
    </div>
  )
}

export default CommunityLeftBar