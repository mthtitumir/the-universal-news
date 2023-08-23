import CricInfo from "@/components/CricInfo/CricInfo";
import SingleScore from "@/components/SingleScore/SingleScore";

const Cricket = async() => {
    const scoreUrl = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=32c8bddb-0190-47ae-a781-61664a2f8783&offset=0')
    const liveScores = await scoreUrl.json()
    // console.log(liveScores);
    return (
        <div className="md:mt-11 cint">
            <h1>cricket Scorecard</h1>
            <div className='md:grid grid-cols-4 justify-between gap-1'>
                {
                   liveScores.data.map(liveScore=><SingleScore key={liveScore.id}
                    liveScore={liveScore}
                   ></SingleScore>) 
                }
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