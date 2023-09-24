import { GetAllJobsFromDB } from "@/services/GetAllNewsFromDB";
import HomeJobBanner from "@/components/homeComponents/HomeJobBanner/HomeJobBanner";
import { BiCategory, BiCheckboxChecked, BiCurrentLocation, BiFilterAlt } from "react-icons/bi";
import NavLink from "@/components/Navbar/NavLink";

export const metadata = {
    title: 'Jobs | The Universal News',
    description: 'Discover Opportunities: Your Next Career.',
}
const JobsLayout = async ({ children }) => {
    const jobsData = await GetAllJobsFromDB();
    let categories = [];
    jobsData?.forEach(item => {
        if (!categories.includes(item?.category)) {
            categories.push(item?.category);
        }
    });
    // console.log(categories);
    return (
        <div className='res c-auto'>
            <div className="my-3">
                <HomeJobBanner text={"jobsPage"} />
            </div>
            <div className='bg-gray-100 rounded-lg'>
                <h1 className='text-center md:pl-48 font-semibold text-slate-800 pt-10 text-lg'>{jobsData?.length} jobs and internships matching your preferences</h1>
                <div className='grid md:grid-cols-10 md:w-[90%] mx-auto gap-5 py-5 '>
                    {/* Filter */}
                    <div className='md:col-span-3 py-10 px-8 h-fit rounded bg-white'>
                        {/* headline */}
                        <div className='flex items-center justify-center gap-1 p-2 '>
                            <BiFilterAlt className='text-blue-600 text-lg'></BiFilterAlt>
                            <h1 className='font-semibold text-slate-900'>Filter</h1>
                        </div>
                        {/* filter by job location  */}
                        <div>
                            <h1 className="flex text-lg gap-2 "> <BiCurrentLocation /> Location </h1>
                            <div className="ml-3">
                                <h1><NavLink activeClassName={"text-pink-600 font-bold underline"}  className={"flex gap-1 hover:underline"} href={`/jobs/location/Remote`}><BiCheckboxChecked /> Remote</NavLink></h1>
                                <h1><NavLink activeClassName={"text-pink-600 font-bold underline"}  className={"flex gap-1 hover:underline"} href={`/jobs/location/On-site`}><BiCheckboxChecked /> Onsite</NavLink></h1>
                            </div>

                        </div>
                        {/* filter by category  */}
                        <div className="mt-5">
                            <h1 className="flex text-lg gap-2"> <BiCategory /> Filter by Category</h1>
                            <div className="ml-3">
                                {
                                    categories?.map(cat => <h1 className="flex gap-1 hover:underline" key={cat}><BiCheckboxChecked /><NavLink  activeClassName={"text-pink-600 font-bold underline"} href={`/jobs/category/${cat}`}>{cat}</NavLink></h1>)
                                }
                            </div>
                        </div>
                    </div>
                    {/* Jobs Options */}
                    <div className='md:col-span-7 rounded'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsLayout;