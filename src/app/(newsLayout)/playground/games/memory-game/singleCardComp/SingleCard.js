import './SingleCard.css'
import Image from 'next/image';



export default function SingleCard({ card, handleChoice, flipped, disable }) {

    const handleClick = () => {
        if (!disable) {
            handleChoice(card)
        }
    }
    return (
        <div className='singleCard '>
            <div className={flipped ? "flipped" : ""}>
                <Image
                    className='singleImg front'
                    height={98}
                    width={100}
                    src={card.src}
                    alt="front image"
                ></Image>
                <Image
                    onClick={handleClick}
                    className='singleImg back'
                    height={300}
                    width={100}
                    src="https://i.ibb.co/PYK4qcd/cover.jpg"
                    alt="front image"
                ></Image>
            </div>
        </div>
    )
}