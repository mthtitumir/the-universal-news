import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
import DeleteButton from "@/components/DashboardComponents/DeleteButton";
import { GetAllVideos } from "@/services/GetAllNews";

const AllVideos = async () => {
const allVideos = await GetAllVideos();
  return (
    <div className='p-3 md:pr-0'>
      <DashboardBanner text= {`All Videos Videos - ${allVideos?.length}`} />
      <div className='mt-5 border rounded-lg border-cyan-500 p-3'>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>VideoId</th>
                <th>Title</th>
                <th>Channel</th>
                <th>Published Time</th>
                <th>Moderator</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className=''>
              {
                allVideos?.map(videos => (
                  <tr className="" key={videos?.videoId}>
                    <td>{videos?.videoId}</td>
                    <th>{videos?.title}</th>
                    <td>{videos?.channelTitle}</td>
                    <td>{videos?.publishTime}</td>
                    <td>{videos?.moderatorEmail || "none"}</td>
                    <DeleteButton path={`/api/moderator/video-delete-edit/${videos?.videoId}`} />
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AllVideos