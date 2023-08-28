import BooksRightBar from '@/components/Books/BooksRightBar';

const Books = () => {
    return (
        <div className='flex-row md:flex c-auto'>
            {/* left bar */}
            <div className='md:w-[20%]'>
                books left bar
            </div>

            {/* right bar */}
            <div className='md:w-[80%]'>
                <BooksRightBar></BooksRightBar>
            </div>
        </div>
    );
};

export default Books;