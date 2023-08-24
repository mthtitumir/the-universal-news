const Headline = ({headline, seeMore}) => {
    return (
        <div className='flex justify-between items-center mb-5'>
            <h1 className='text-2xl font-semibold'>{headline}</h1>
            <h1 className='text-base'>{seeMore}</h1>
        </div>
    );
};

export default Headline;