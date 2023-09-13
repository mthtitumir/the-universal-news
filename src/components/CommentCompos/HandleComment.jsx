"use client"
import PostComment from './PostComment';
import DisplayComment from './DisplayComment';
import useSingleNewsComments from '@/hooks/TanStackHooks/useSingleNewsComments';
import Spinner from '../ErrorComponents/Spinner';

const HandleComment = ({ id }) => {
    // console.log(comments);
    const [comments, isCommentsLoading, refetch] = useSingleNewsComments(id);
    if(isCommentsLoading){
        return <Spinner />
    }

    return (
        <>
            <div className="divider"></div>
            <PostComment id={id} refetch = {refetch} />
            {/* comment s display  */}
            <div className='flex flex-col gap-5'>
                {
                    comments?.map(comment => <DisplayComment key={comment.id} comment={comment} />)
                }
            </div>
        </>
    );
};

export default HandleComment;