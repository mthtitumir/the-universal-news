import Headline from "@/components/miniComponents/Headline";
import { GetAllVideosFromDB } from "@/services/GetAllNewsFromDB";

const HomeVideo = async () => {
    const videos =await GetAllVideosFromDB();
    return (
        <div>
            <div className=''>
                <Headline headline={"Videos"} seeMore={"Watch More"} path={'/videos'} />
                <div className="grid md:grid-cols-2 gap-3">
                    {
                        videos?.slice(0, 4).map(video => <iframe key={video?.videoId} className='w-full h-full aspect-video ' src={`https://www.youtube.com/embed/${video?.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>)
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeVideo