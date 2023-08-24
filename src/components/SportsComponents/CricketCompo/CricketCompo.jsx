import CricInfo from "@/components/SportsComponents/CricInfo/CricInfo";
import LiveScoreSlider from "@/components/SportsComponents/LiveScoreSlider/LiveScoreSlider";

const CricketCompo = () => {

    // console.log(liveScores);
    return (
        <div className="md:mt-11 c-auto">
            <div className=''>
                <LiveScoreSlider />
            </div>
            <div>
                <CricInfo />
            </div>
        </div>
    );
};

export default CricketCompo;