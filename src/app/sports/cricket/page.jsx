import SingleScore from "@/components/SingleScore/SingleScore";


const Cricket = async() => {
    const scoreUrl = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=32c8bddb-0190-47ae-a781-61664a2f8783&offset=0')
    const liveScores = await scoreUrl.json()
    return (
        <div>
            <div className='md:flex justify-between gap-2'>
                {
                   liveScores.data.map(liveScore=><SingleScore key={liveScore.id}
                    liveScore={liveScore}
                   ></SingleScore>) 
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default Cricket;