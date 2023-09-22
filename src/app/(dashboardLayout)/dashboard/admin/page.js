import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
import ReadersChart from "@/components/DashboardComponents/ReadersChart";
import RevenueChart from "@/components/DashboardComponents/RevenueChart";
import AdminInfos from "@/hooks/useAdminInfos"; 

const AdminHome = async() => {
  const lengthInfo = await AdminInfos();
  // console.log(lengthInfo);
  return (
    <div className='p-3 md:pr-0 flex flex-col gap-5'>
      <DashboardBanner text={`Welcome!`} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3  rounded-lg ">
          {
            lengthInfo.map((singleLength, index) => <div className="flex flex-col justify-center items-center gap-2 bg-gradient-to-r from-[#1E1D74] via-[#03030A] to-[#1E1D74] shadow-xl py-3 rounded-lg hover:transition hover:duration-800 hover:ease-in-out" key={index+1}>
              <h1 className="text-xl md:text-2xl text-white">{singleLength?.name}</h1>
              <h1 className="text-2xl md:text-4xl text-pink-500">{singleLength?.number}</h1>
            </div>)
          }
      </div>
      <ReadersChart />
      <RevenueChart />
    </div>
  )
}

export default AdminHome