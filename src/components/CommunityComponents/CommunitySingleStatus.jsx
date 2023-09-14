import Image from "next/image";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiDislikeLine } from "react-icons/ri";
import CommunityReaction from "./CommunityReaction";

const CommunitySingleStatus = ({postId, post}) => {
    const iconStyles = "text-xl flex gap-3 text-gray-600";
    const { text, photo, authorName, authorImage, likes, dislikes, comments } = post;
    return (
        <div className="grid grid-cols-8 border-t border-b px-2 py-3">
            <div className="col-span-1 mx-auto">
                <Image className="rounded-full" height={40} width={40} alt="profile pic" src={authorImage || "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} />
            </div>

            <div className="col-span-7 ">
                <div className="flex items-center gap-2"> {/*name box*/}
                    <h1 className="text-lg font-semibold">{authorName}</h1>
                    <h1 className="font-semibold text-gray-500">{`@${authorName?.toLowerCase()}`}</h1>
                </div>
                <div> {/*text box*/}
                    <p>{text}</p>
                    {
                        photo !== "empty" && <Image height={300} width={400} alt="post image" src={photo} />
                    }
                </div>
                {/*bottom like comment share nav*/}
                <CommunityReaction key={post?.postId} id={postId} />
                {/* <div className="flex justify-evenly items-center mt-2"> 
                    <h3 className={iconStyles}><AiOutlineHeart /> {likes}</h3>
                    <h3 className={iconStyles}><RiDislikeLine /> {dislikes}</h3>
                    <h3 className={iconStyles}><BiCommentDetail /> {comments?.length}</h3>
                    <h3 className={iconStyles}><AiOutlineShareAlt /></h3>
                </div> */}
            </div>
        </div>
    );
};

export default CommunitySingleStatus;