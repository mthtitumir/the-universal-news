
import ApproveNews from "@/components/DashboardComponents/ApproveNews";
import DeleteNews from "@/components/DashboardComponents/DeleteNews";
import { GetPendingNews } from "@/services/GetAllNews";

const PendingNews = async () => {
    const pendingNews = await GetPendingNews();
    return (
        <div className="overflow-x-auto p-3">
            <div className=' border-2  border-cyan-500 h-40 rounded-lg flex items-center justify-center'>
                <h1 className="text-3xl text-red-600 font-semibold animate-pulse">{pendingNews?.length} - Pending News</h1>
            </div>
            <table className="table table-xs mt-5">
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
                                <ApproveNews id= {singleNews._id.toString()} />
                                <DeleteNews id={singleNews._id.toString()} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PendingNews