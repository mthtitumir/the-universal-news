import Image from 'next/image';

const Gallery = () => {
    const galleryImages = ["https://i.ibb.co/bmdkcCf/Desk-BHP-may-1500x300.jpg", "https://i.ibb.co/ZKpR5YC/g4.jpg", "https://i.ibb.co/zFn8dHw/g3.jpg", "https://i.ibb.co/BtW98rz/g2.jpg", "https://i.ibb.co/7KTWnxm/g1.jpg"]
    return (
        <div>
            <div className='mt-6'>
                <Image
                    height={500}
                    width={1000}
                    src={galleryImages[0]}
                    alt='book image'
                    className=' w-full'
                ></Image>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-6 mx-auto '>
                {
                    galleryImages?.slice(1, 5).map(img => <div key={img}>
                        <Image
                            height={100}
                            width={250}
                            src={img}
                            alt='book image'
                        ></Image>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;