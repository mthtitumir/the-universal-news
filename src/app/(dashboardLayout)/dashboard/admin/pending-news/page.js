import ApproveNews from "@/components/DashboardComponents/ApproveNews";
import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
import DeleteNews from "@/components/DashboardComponents/DeleteNews";
import { GetPendingNews } from "@/services/GetAllNews";

const PendingNews = async () => {
    const pendingNews = await GetPendingNews();
    return (
        <div className="overflow-x-auto p-3">
            <DashboardBanner text={`Pending News - ${pendingNews?.length}`} />
            <div className="border border-cyan-500 mt-5 p-3 rounded-lg">
                <table className="table table-sm ">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Reporter</th>
                            <th>Time</th>
                            <th>Category</th>
                            <th>Subcategory</th>
                            <th>Approve</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pendingNews.map(singleNews => (
                                <tr className="" key={singleNews._id}>
                                    <td>{singleNews?.id}</td>
                                    <th>{singleNews?.title.split(0, 30)}</th>
                                    <td>{singleNews?.author}</td>
                                    <td>{singleNews?.published_date}</td>
                                    <td>{singleNews?.category}</td>
                                    <td>{singleNews?.subcategory}</td>
                                    <ApproveNews id={singleNews._id.toString()} />
                                    <DeleteNews id={singleNews._id.toString()} what={"news"} />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PendingNews