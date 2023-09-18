import CommunityLatestPosts from "./CommunityLatestPosts"
import CommunityPost from "./CommunityPost"
import CommunityTimeLine from "./CommunityTimeLine"
import Welcome from "./Welcome"

const CommunityHome = () => {
  return (
    <div>
      <div className="border-r border-l ">
        <Welcome />
        <CommunityPost />
        <CommunityLatestPosts />
        <CommunityTimeLine />
      </div>
    </div>
  )
}

export default CommunityHome