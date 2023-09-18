"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const SwiperSection = () => {
    const swiperImages =["https://i.ibb.co/5Rzyf3Y/slide.jpg", "https://i.ibb.co/5Rzyf3Y/slide.jpg", "https://i.ibb.co/5Rzyf3Y/slide.jpg", "https://i.ibb.co/5Rzyf3Y/slide.jpg"]
    return (
        <div className='mt-10'>
            {/* auto sliders */}
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        swiperImages?.map(img => <SwiperSlide key={img}>
                            <Image
                                height={500}
                                width={800}
                                src={img}
                                alt='book image'
                            ></Image>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperSection;