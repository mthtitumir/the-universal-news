"use client"
import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
import DeleteButton from "@/components/DashboardComponents/DeleteButton";
import EditVideo from "@/components/DashboardComponents/Moderator/EditVideoModal";
import MyModal from "@/components/HandleModal/Modal";
import useModeratorAllVideos from "@/hooks/TanStackHooks/ModeratorHooks/useModeratorAllVideos";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";

const ModeratorAllVideos = () => {
  const [myVideos] = useModeratorAllVideos();
  console.log(myVideos);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='p-3 md:pr-0'>
      <DashboardBanner text={"My Videos"} />
      <div className='mt-5 border rounded-lg border-cyan-500 py-2'>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>VideoId</th>
                <th>Title</th>
                <th>Channel</th>
                <th>Published Time</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className=''>
              {
                myVideos?.map(videos => (
                  <tr className="" key={videos?.videoId}>
                    <td>{videos?.videoId}</td>
                    <th>{videos?.title}</th>
                    <td>{videos?.channelTitle}</td>
                    <td>{videos?.publishTime}</td>
                    <>
                      <td className="text-center text-2xl text-cyan-600" onClick={() => setIsOpen(!isOpen)}>
                        <BiEdit />
                      </td>
                      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} >
                        <EditVideo singleVideo={videos} />
                      </MyModal>
                    </>
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

export default ModeratorAllVideos