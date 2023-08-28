// import GetAllNews from "@/services/GetAllNews";
import Headline from "../miniComponents/Headline";
import UserInfo from "./UserInfo";
import NewsCardThree from "../newsCards/NewsCardThree";
// import GetSingleNews from "@/services/GetSingleNews";
import DisplayComment from "../CommentCompos/DisplayComment";
import { GetAllNews, GetSingleNews } from "@/services/GetAllNews";

const ProfilePage = async () => {
    const savedNews = await GetAllNews();
    const singleNews = await GetSingleNews('64e5a2f54c36b1a1c9171075');
    const { comments } = singleNews;
    return (
        <div className='p-4'>
            {/* user information */}
            <UserInfo />
            {/* interest section  */}
            <div className="mt-8">
                <Headline headline={"Interests"} />
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 justify-between">
                    <button className="primary-btn animate-pulse">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                    <button className="primary-btn">politics</button>
                </div>
            </div>
            {/* saved articles section  */}
            <div className="mt-8">
                <Headline headline={"Saved Articles"} />
                <div className="grid md:grid-cols-2 gap-3">
                    {
                        savedNews.slice(30, 36).map(news => <NewsCardThree key={news._id} item={news} />)
                    }
                </div>
            </div>
            {/* Your comments  */}
            <div className="mt-8">
                <Headline headline={"Your Comments"} />
                <div className="grid md:grid-cols-2 gap-3">
                    {
                        comments.map(comment => <DisplayComment key={comment.id} comment={comment} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfilePage