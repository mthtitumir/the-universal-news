import NavLink from "@/components/Navbar/NavLink";
import { GetAllBooksFromDB } from "@/services/GetAllNewsFromDB";

export const metadata = {
    title: 'Books | The Universal News',
    description: 'Books: Your Imaginations Greatest Adventure',
}

const BooksLayout = async ({ children }) => {
    const booksData = await GetAllBooksFromDB();
    // console.log(booksData);
    let categories = [];
    booksData?.forEach(item => {
        if (!categories.includes(item?.category)) {
            categories.push(item?.category);
        }
    });
    return (
        <div className="grid grid-cols-10 c-auto gap-3">
            <div style={{ borderRight: '1px solid #000' }} className='col-span-2 mt-10'>

                <h2 className="text-2xl font-semibold mb-2 underline">Book Categories</h2>
                <div className='flex flex-col gap-3'>
                    {
                        categories?.map(category => <h1 key={category}><NavLink href={`/books/category/${category}`} className="hover:text-cyan-600 text-lg hover:font-semibold" exact activeClassName={"text-pink-600 "}>{category}</NavLink></h1>)
                    }
                </div>
            </div>
            <div className="col-span-8">
                {children}
            </div>
        </div>
    );
};

export default BooksLayout;