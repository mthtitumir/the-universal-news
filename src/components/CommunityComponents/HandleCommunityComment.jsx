import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BiSolidPaperPlane } from 'react-icons/bi';

const HandleCommunityComment = ({ posts }) => {
    const { postId, comments, text, photo, authorName, authorImage } = posts;
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = async (data) => {
        if (!user) {
            return;
        }
        const text = data.text;
        const date = new Date().toISOString();
        const newsId = id;
        try {
            const response = await axios.post(`/api/add-comment/${newsId}`, { text, date });
            console.log(response.data, "from comment");
            refetch();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        reset()
    }
    return (
        
            <div className=" ">
            <div className="grid grid-cols-8 border-t border-b px-2 py-3 my-4">
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
            </div>
        </div>
                {/* user comment input functionality starts   */}
                <div className='my-5'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex items-center gap-5'>
                            <Image className='rounded-full' src={authorImage ? authorImage : "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} height={40} width={40} alt='user photo ' />
                            <input {...register("text")} type="text" placeholder='Write your comment!' className='border flex-1 px-5 py-2 rounded focus:outline-none' />
                        </div>
                        <div className='flex justify-end mt-3'>
                            <button type="submit" className='bg-cyan-500 text-white px-2 py-1 rounded flex items-center gap-1'> <BiSolidPaperPlane />Post</button>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default HandleCommunityComment;