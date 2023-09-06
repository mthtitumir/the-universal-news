import Image from 'next/image'

const DisplayComment = ({ comment }) => {
    return (
        <div className='flex items-center gap-5 border py-3 rounded-xl px-3'>
            <div>
                <Image className='rounded-full' src={comment.userImg ? comment.userImg : "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} height={48} width={48} alt='user photo ' />
            </div>
            <div className='flex-1'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-md md:text-lg'>{comment?.author}</h1>
                    <p className='text-xs md:text-sm'>{comment?.date}</p>
                </div>
                <div>
                    <h1 className='text-sm md:text-md'>{comment.text}</h1>
                </div>
            </div>
        </div>
    )
}

export default DisplayComment