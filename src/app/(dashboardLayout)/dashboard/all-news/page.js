import { GetAllNews } from "@/services/GetAllNews"

const allNews = async () => {
    const news = await GetAllNews();
    return (
        <div className="overflow-x-auto p-3">
            <div className=' border-2  border-cyan-500 h-40 rounded-lg flex items-center justify-center'>
                <h1 className="text-3xl text-red-600 font-semibold animate-pulse">{news.length} - Live News</h1>
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
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        news.map(singleNews => (
                            <tr key={singleNews._id}>
                                <td>{singleNews?.id}</td>
                                <th>{singleNews?.title}</th>
                                <td>{singleNews?.author}</td>
                                <td>{singleNews?.published_date}</td>
                                <td>{singleNews?.category}</td>
                                <td>{singleNews?.subcategory}</td>
                                <td>{singleNews?.comments.length}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default allNews


// const { img, _id, title, description, category, author, published_date, comments } = data;