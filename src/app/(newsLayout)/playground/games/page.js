import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Games = () => {
    return (
        <div className="min-h-screen c-auto">
            <header className="bg-fuchsia-600 rounded-full my-16 text-white p-4 animate-pulse">
                <h1 className="text-xl md:text-2xl text-center font-semibold">Play Games</h1>
            </header>
            <div className="px-36 py-8">
                {/* Game cards */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* games1 */}
                    <div className="border p-6 rounded-2xl  shadow-md hover:scale-105 duration-500 bg-pink-500">
                        <div className='flex justify-center items-center'>
                            <Image width={460} height={510} src="https://i.ibb.co/qrVBxyF/new1.jpg" alt='banner' />
                        </div>
                        <div className="text-center space-y-3 text-white mt-4">
                            <p className='font-bold text-2xl py-6'>Memory Game</p>
                            <Link href={'/playground/games/memory-game'}><button className="btn ">Play Now</button></Link>
                        </div>
                    </div>

                    {/* games2 */}
                    <div className="border p-6 rounded-2xl  shadow-md hover:scale-105 duration-500 bg-yellow-400">
                        <div className='flex justify-center items-center'>
                            <Image width={460} height={510} src="https://i.ibb.co/tHJ7NcR/new2.jpg" alt='banner' />
                        </div>
                        <div className="text-center space-y-3 text-white mt-4">
                            <p className='font-bold text-2xl py-6'>Snake Game</p>
                            <Link href={'/playground/games/old-memory-snake-game'}><button className="btn ">Play Now</button></Link>
                        </div>
                    </div>

                    {/* games3 */}
                    <div className="border p-6 rounded-2xl  shadow-md hover:scale-105 duration-500 bg-purple-600">
                        <div className='flex justify-center items-center'>
                            <Image width={460} height={510} src="https://i.ibb.co/bFJ59T1/new4.jpg" alt='banner' />
                        </div>
                        <div className="text-center space-y-3 text-white mt-4">
                            <p className='font-bold text-2xl py-6'>Rock Paper Scissors</p>
                            <Link href={'/playground/games/rock-paper-scissor'}><button className="btn">Play Now</button></Link>
                        </div>
                    </div>

                    {/* games4 */}
                    <div className="border p-6 rounded-2xl shadow-md hover:scale-105 duration-500 bg-cyan-300">
                        <div className='flex justify-center items-center'>
                            <Image width={460} height={510} src="https://i.ibb.co/tsxRSqg/new-5.jpg" alt='banner' />
                        </div>
                        <div className="text-center space-y-3 text-white mt-4">

                            <p className='font-bold text-2xl py-6'>World Scramble Game</p>

                            <Link href={'/playground/games/word-scramble'}><button className="btn ">Play Now</button></Link>


                        </div>
                    </div>

                    {/* games5 */}
                    {/* <div className="border p-6 rounded-2xl  shadow-md hover:scale-105 duration-500 bg-slate-500">
                        <div className='flex justify-center items-center'>
                            <Image width={460} height={510} src="https://i.ibb.co/tHJ7NcR/new2.jpg" alt='banner' />
                        </div>
                        <div className="text-center space-y-3 text-white mt-4">

                            <p className='font-bold text-2xl py-6'>Snake Game</p>

                            <button className="btn ">Play Now</button>


                        </div>
                    </div> */}

                    {/* games6 */}
                    {/* <div className="border p-6 rounded-2xl  shadow-md hover:scale-105 duration-500 bg-green-400">
                        <div className='flex justify-center items-center'>
                            <Image width={460} height={510} src="https://i.ibb.co/bFJ59T1/new4.jpg" alt='banner' />
                        </div>
                        <div className="text-center space-y-3 text-white mt-4">

                            <p className='font-bold text-2xl py-6'>Snake Game</p>
                            <button className="btn ">Select Now</button>


                        </div>
                    </div> */}
                    {/* Repeat similar blocks for other games */}
                </section>
            </div>
        </div>
    )
}

export default Games