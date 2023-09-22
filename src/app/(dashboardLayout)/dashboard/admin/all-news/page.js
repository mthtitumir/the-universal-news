import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
import DeleteNews from "@/components/DashboardComponents/DeleteNews";
import { GetAllNews } from "@/services/GetAllNews"

const allNews = async () => {
    const news = await GetAllNews();
    // console.log(news[0]._id);
    return (
        <div className="overflow-x-auto p-3">
            <DashboardBanner text={`Total News - ${news?.length}`} />
            <div className="border border-cyan-500 mt-5 p-3 rounded-lg">
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            news?.map(singleNews => (
                                <tr className="" key={singleNews._id}>
                                    <td>{singleNews?.id}</td>
                                    <th>{singleNews?.title.slice(0, 15)}...</th>
                                    <td>{singleNews?.author}</td>
                                    <td>{singleNews?.published_date}</td>
                                    <td>{singleNews?.category}</td>
                                    <td>{singleNews?.subcategory}</td>
                                    <td>{singleNews?.comments.length}</td>
                                    <td>{singleNews?.status || "None"}</td>
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

export default allNews


// const { img, _id, title, description, category, author, published_date, comments } = data;