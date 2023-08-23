import CricInfo from "@/components/CricInfo/CricInfo";
import LiveScoreSlider from "@/components/LiveScoreSlider/LiveScoreSlider";

const Cricket = async() => {
    
    // console.log(liveScores);
    return (
        <div className="md:mt-11 container mx-auto">
            <div className=''>
                <LiveScoreSlider />
            </div>
            <div>
                <div>
                    <CricInfo/>
                </div>
            </div>
        </div>
    );
};

export default Cricket;