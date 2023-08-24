import CricInfo from "@/components/SportsComponents/CricInfo/CricInfo";
import LiveScoreSlider from "@/components/SportsComponents/LiveScoreSlider/LiveScoreSlider";

const Cricket = () => {

    // console.log(liveScores);
    return (
        <div className="md:mt-11 c-auto">
            <div className=''>
                <LiveScoreSlider />
            </div>
            <div>
                <div>
                    <CricInfo />
                </div>
            </div>
        </div>
    );
};

export default Cricket;