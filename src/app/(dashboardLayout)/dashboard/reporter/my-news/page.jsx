"use client"
import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
import DeleteNews from "@/components/DashboardComponents/DeleteNews";
import Spinner from "@/components/ErrorComponents/Spinner";
import useCourses from "./useCourses";
import { BiEdit } from "react-icons/bi";
import MyModal from "@/components/HandleModal/Modal";
import EditNews from "@/components/DashboardComponents/Reporter/EditNews";
import { useState } from "react";

const MyNews = () => {
    const [myNews, loading, isMyNewsLoading] = useCourses();
    const [isOpen, setIsOpen] = useState(false);
    // console.log(myNews);
    if (loading || isMyNewsLoading) {
        return <Spinner />
    }
    return (
        <div className="overflow-x-auto p-3 flex flex-col gap-3">
            <DashboardBanner text={` Your News - ${myNews.length} `} />
            <div className="border border-cyan-500 rounded-lg p-3">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Reporter</th>
                            <th>Time</th>
                            <th>Category</th>
                            <th>Subcategory</th>
                            <th>Comments</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myNews?.map(singleNews => (
                                <tr className="" key={singleNews._id}>
                                    <td>{singleNews?.id}</td>
                                    <th>{singleNews?.title.slice(0, 15)}...</th>
                                    <td>{singleNews?.author}</td>
                                    <td>{singleNews?.published_date}</td>
                                    <td>{singleNews?.category}</td>
                                    <td>{singleNews?.subcategory}</td>
                                    <td>{singleNews?.comments.length}</td>
                                    <td>{singleNews?.status || "None"}</td>
                                    <td className="text-center text-2xl text-cyan-600" onClick={() => setIsOpen(!isOpen)}>
                                        <BiEdit />
                                    </td>
                                    <MyModal isOpen={isOpen} setIsOpen={setIsOpen} >
                                        <EditNews singleNews={singleNews} />
                                    </MyModal>
                                    <DeleteNews id={singleNews?._id.toString()} what={"news"} />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyNews;

