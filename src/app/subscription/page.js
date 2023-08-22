import Footer from '@/components/Footer/Footer';
import Subscribe from '@/components/subsComponent/Subscribe';
import Subscribe2 from '@/components/subsComponent/Subscribe2';
import React from 'react';

const subscription = () => {
    return (
        <div className='container mx-auto'>
            <Subscribe></Subscribe>
            <Subscribe2></Subscribe2>
            <Footer></Footer>
        </div>
    );
};

export default subscription;