import { GetAllVideosFromDB } from '@/services/GetAllNewsFromDB';
import SingleVideoCard from '@/components/VedioComponent/SingleVideoCard';

const Videos = async () => { 
    const videosData = await GetAllVideosFromDB();  
    // console.log(videosData);
    return (
        <div className='c-auto my-6'>
             <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-6">
                {
                    videosData?.map(data => <SingleVideoCard
                        key={data?.videoId}
                        data={data}
                    ></SingleVideoCard>)
                }
            </div>

        </div>
    );
};

export default Videos;