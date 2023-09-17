import Link from "next/link";

const Headline = ({headline, seeMore, path}) => {
    return (
        <div className='flex justify-between items-center px-3 md:px-0 my-5'>
            <h1 className='text-2xl font-semibold'>{headline}</h1>
            <h1 className='text-base hover:underline'><Link href={path}>{seeMore}</Link></h1>
        </div>
    );
};

export default Headline;