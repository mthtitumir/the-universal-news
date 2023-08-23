import CricInfo from "@/components/CricInfo/CricInfo";
import LiveScoreSlider from "@/components/LiveScoreSlider/LiveScoreSlider";

const Cricket = async() => {
    const scoreUrl = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=32c8bddb-0190-47ae-a781-61664a2f8783&offset=0')
    const liveScores = await scoreUrl.json()
    // console.log(liveScores);
    return (
        <div className="md:mt-11 container mx-auto">
            <div className=''>
                <LiveScoreSlider liveScores={liveScores.data} />
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