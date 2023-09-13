import CommunityPost from "./CommunityPost"
import CommunityTimeLine from "./CommunityTimeLine"
import Welcome from "./Welcome"

const CommunityHome = () => {
  return (
    <div>
      <div className="border-r border-l">
        <Welcome />
        <CommunityPost />
        <CommunityTimeLine />
        <h1>Hello</h1>
      </div>
    </div>
  )
}

export default CommunityHome