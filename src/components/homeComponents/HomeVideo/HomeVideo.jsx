import Headline from "@/components/miniComponents/Headline";
import videosData from "@/utils/videos.json"

const HomeVideo = () => {
    // const video = videosData[0];
    return (
        <div>
            <div className=''>
                <Headline headline={"Videos"} seeMore={"Watch More"} path={'/videos'} />
                <div className="grid md:grid-cols-2 gap-3">
                    {
                        videosData?.slice(0, 4).map(video => <iframe key={video?.videoId} className='w-full h-full aspect-video ' src={`https://www.youtube.com/embed/${video?.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>)
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeVideo