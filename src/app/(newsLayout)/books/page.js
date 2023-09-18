import BooksRightBar from '@/components/Books/BooksRightBar';
import BooksCategory from '@/components/Books/booksComponent/BooksCategory';
import bookCategories from "@/utils/booksCategory.json";


const Books = () => {
    // console.log(bookCategories);
    return (
        <div className='flex-row md:flex c-auto gap-4'>
            {/* left bar */}
            <div style={{ borderRight: '1px solid #000' }} className='md:w-[20%] mt-10 pl-9'>
                {
                    bookCategories.map(data => <BooksCategory
                        key={data?.id}
                        data={data}
                    ></BooksCategory>)
                }
            </div>

            {/* right bar */}
            <div className='md:w-[80%]'>
                <BooksRightBar></BooksRightBar>
            </div>
        </div>
    );
};

export default Books;