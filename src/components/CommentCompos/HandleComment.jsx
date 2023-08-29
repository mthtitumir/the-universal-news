import Image from 'next/image';
import PostComment from './PostComment';
import DisplayComment from './DisplayComment';

const HandleComment = ({ id, comments }) => {
    // console.log(comments);

    return (
        <>
            <div className="divider"></div>
            <PostComment id={id} />
            {/* comment s display  */}
            <div className='flex flex-col gap-5'>
                {
                    comments.map(comment => <DisplayComment key={comment.id} comment={comment} />)
                }
            </div>
        </>
    );
};

export default HandleComment;