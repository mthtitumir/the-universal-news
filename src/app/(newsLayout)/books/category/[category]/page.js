import SingleBooks from "@/components/Books/SingleBooks";
import HomeBookBanner from "@/components/homeComponents/HomeBookBanner/HomeBookBanner";
import { GetCategoryBooksFromDB } from "@/services/GetAllNewsFromDB";

const BookCategory = async ({params}) => {
    const categoriesData = await GetCategoryBooksFromDB(params?.category);
    return (
        <div className="mt-10">
            <HomeBookBanner text={"booksPage"} text2={params?.category.toUpperCase()} />
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                {
                    categoriesData?.map(books => <SingleBooks
                        key={books.id}
                        books={books}
                    ></SingleBooks>)
                }
            </div>
        </div>
    );
};

export default BookCategory;