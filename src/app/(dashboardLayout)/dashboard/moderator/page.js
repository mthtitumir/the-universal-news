const ModeratorHome = () => {
    const moderatorInfo = [
        { name: "videos", number: 33 },
        { name: "books", number: 93 },
        { name: "videos", number: 33 },
    ];
    return (
        <div className='p-3 md:pr-0'>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 border border-cyan-600 rounded-lg p-5">
                {
                    moderatorInfo.map((singleLength, index) => <div className="flex flex-col justify-center items-center gap-3 bg-cyan-100 hover:bg-cyan-200 shadow-xl py-3 rounded-lg transition duration-800 ease-in-out" key={index + 1}>
                        <h1 className="text-xl md:text-2xl">{singleLength?.name}</h1>
                        <h1 className="text-2xl md:text-4xl text-pink-600">{singleLength?.number}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ModeratorHome;



