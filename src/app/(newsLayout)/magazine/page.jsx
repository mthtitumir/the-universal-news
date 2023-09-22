import Image from 'next/image';
import SingleMagazine from '@/components/Magazine/SingleMagazine';
import { GetAllMagazinesFromDB } from '@/services/GetAllNewsFromDB';

const Magazine = async () => {
    const magazineData = await GetAllMagazinesFromDB();

    return (
        <div className='c-auto py-10'>
            <div className='flex lg:flex-row flex-col-reverse items-center justify-between gap-4 w-full py-10'>
                <div className='lg:basis-1/2 basis-full'>
                    <h1 className='font-bold text-4xl'>The Kind On The Night Shift</h1>
                    <p className='text-2xl py-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Recusandae perspiciatis, voluptate assumenda consectetur dicta neque!</p>
                    <small>2023-09-19</small>
                </div>
                <div className='lg:basis-1/2 basis-full'>
                    <Image
                        className="rounded-lg w-full h-[500px]"
                        width={400}
                        height={400}
                        src="https://i.ibb.co/GsqJMtN/magazine2.jpg"
                        alt="banner"
                    />
                </div>

            </div>
            <div className='flex justify-center border-t-2 border-black py-8'>
                <div className='w-full border-black border-r-2 hover:scale-105 duration-500'>
                    <Image
                        className="rounded-lg mx-auto"
                        width={400}
                        height={500}
                        src="https://i.ibb.co/gMpDxDM/17764909-bologna-italy-11-04-2010-magazine-and-newspaper-stand-on-streets-of-bologna-Copy.jpg"
                        alt="banner"
                    />
                    <div className='px-14'>
                        <p>The magazine</p>
                        <p className='py-4 text-3xl font-bold'>The Kind On The Night Shift</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, dolore ea libero ipsa omnis animi nesciunt eos eaque maiores sint?</p>
                    </div>
                </div>
                <div className='w-full border-black border-r-2 hover:scale-105 duration-500'>
                    <Image
                        className="rounded-lg mx-auto"
                        width={400}
                        height={500}
                        src="https://i.ibb.co/bNJ4wkX/newsstand-bookstore-at-the-grove-a-retail-and-entertainment-complex-EBP9-W6-Copy.jpg"
                        alt="banner"
                    />
                    <div className='px-14'>
                        <p>The magazine</p>
                        <p className='py-4 text-3xl font-bold'>The Kind On The Night Shift</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, dolore ea libero ipsa omnis animi nesciunt eos eaque maiores sint?</p>
                    </div>
                </div>
                <div className='w-full hover:scale-105 duration-500'>
                    <Image
                        className="rounded-lg mx-auto"
                        width={400}
                        height={500}
                        src="https://i.ibb.co/xXK2Ffz/magazine-rack-newsstand-kiosk-kiosko-calle-florida-buenos-aires-buenos-A4-YFMK-Copy.jpg"
                        alt="banner"
                    />
                    <div className='px-14'>
                        <p>The magazine</p>
                        <p className='py-4 text-3xl font-bold'>The Kind On The Night Shift</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, dolore ea libero ipsa omnis animi nesciunt eos eaque maiores sint?</p>
                    </div>
                </div>

            </div>
            <div className='hlx'></div>
            <div className='grid md:grid-cols-10'>

                <div className='md:col-span-7'>
                    {
                        magazineData?.map(data => <SingleMagazine
                            key={data?.id}
                            id={data?.id}
                        ></SingleMagazine>)
                    }
                </div>
                <div className='md:col-span-3'>

                </div>
            </div>
        </div>
    );
};

export default Magazine;