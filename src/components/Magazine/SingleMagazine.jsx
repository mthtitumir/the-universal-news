import { GetSingleMagazineFromDB } from '@/services/GetAllNewsFromDB';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleMagazine = async ({ id }) => {
    const data = await GetSingleMagazineFromDB(id);
    
    return (
        <Link href={`/magazine/${data?.id}`}>
            <div className='flex py-6 border-b-2 border-black hover:scale-105 duration-500'>
                <div>
                    <p>{data?.date}</p>
                </div>
                <div className='w-full pl-16'>
                    <h4 className='text-2xl font-semibold py-4'>{data?.magazineName}</h4>
                    <p>{data?.magazineTitle}</p>
                    <p className='py-4 font-bold text-xl'>{data?.magazineDescription}</p>
                    <p>By {data?.magazineAuthorName}</p>
                </div>
                <div className=''>
                    <Image
                        className="rounded-lg h-44 w-56"
                        width={400}
                        height={400}
                        src={data?.magazineImg}
                        alt="banner"
                    />
                </div>
            </div>
        </Link>
    );
};

export default SingleMagazine;