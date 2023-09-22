import { GetAllMagazinesFromDB, GetSingleMagazineFromDB } from '@/services/GetAllNewsFromDB';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MagazineDetails = async({ params }) => {

    const data = await GetSingleMagazineFromDB(params?.id);
    const allData = await GetAllMagazinesFromDB();
    // console.log(data);
 
    return (
        <div className='c-auto my-12 px-96'>
            <h1 className='text-3xl font-bold'>{data?.magazineTitle}</h1>
            <h1 className='text-2xl py-6 font-bold'>{data?.magazineDescription}</h1>
            <div className='py-8'>
            <Image
                        className="rounded-lg w-full h-[500px]"
                        width={400}
                        height={400}
                        src={data?.magazineImg}
                        alt="banner"
                    />
            </div>
            <p className='text-xl mt-12'> By {data?.magazineAuthorName}</p>
            <p className='py-8'>{data?.date}</p>

            <p className='text-2xl mb-16'>{data?.mainMagazine?.repeat(10)}</p>
            <h2 className='text-4xl font-bold my-6'>More Magazines</h2>
            <hr />
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    allData?.map(data=><Link
                    href={`/magazine/${data?.id}`}
                        key={data?.id}
                    >
                    <div
                        
                        
                    >
                        <div
                        
                        className={`border rounded-lg shadow-md hover:scale-105 duration-500`}
                      >
                        <div className="flex justify-center items-center">
                          <Image
                            className="rounded-lg h-96 w-full"
                            width={400}
                            height={500}
                            src={data?.magazineImg}
                            alt="banner"
                          />
                        </div>
                        <p className='text-2xl py-16 text-center font-bold'>{data?.magazineName}</p>
                      </div>
                    </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default MagazineDetails;