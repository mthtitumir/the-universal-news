import React from 'react';
import Image from 'next/image';


const Gallery = () => {
    return (
        <div>
            <Image
                height={500}
                width={1000}
                src="https://i.ibb.co/bmdkcCf/Desk-BHP-may-1500x300.jpg"
                alt='book image'
                className='mt-6'
            ></Image>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-6 mx-auto '>
                <div>
                    <Image
                        height={100}
                        width={250}
                        src="https://i.ibb.co/ZKpR5YC/g4.jpg"
                        alt='book image'
                    ></Image>
                </div>
                <div>
                    <Image
                        height={100}
                        width={250}
                        src="https://i.ibb.co/zFn8dHw/g3.jpg"
                        alt='book image'
                    ></Image>
                </div>
                <div>
                    <Image
                        height={100}
                        width={250}
                        src="https://i.ibb.co/BtW98rz/g2.jpg"
                        alt='book image'
                    ></Image>
                </div>
                <div>
                    <Image
                        height={100}
                        width={250}
                        src="https://i.ibb.co/7KTWnxm/g1.jpg"
                        alt='book image'
                    ></Image>
                </div>
            </div>
        </div>
    );
};

export default Gallery;