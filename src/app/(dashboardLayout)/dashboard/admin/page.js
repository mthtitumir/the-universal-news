import ReadersChart from "@/components/DashboardComponents/ReadersChart";
import RevenueChart from "@/components/DashboardComponents/RevenueChart";
import AdminInfos from "@/hooks/useAdminInfos"; 

const AdminHome = async() => {
  const lengthInfo = await AdminInfos();
  // console.log(lengthInfo);
  return (
    <div className='p-3 md:pr-0 flex flex-col gap-5'>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 border border-cyan-600 rounded-lg p-5">
          {
            lengthInfo.map((singleLength, index) => <div className="flex flex-col justify-center items-center gap-3 bg-cyan-100 hover:bg-cyan-200 shadow-xl py-3 rounded-lg transition duration-800 ease-in-out" key={index+1}>
              <h1 className="text-xl md:text-2xl">{singleLength?.name}</h1>
              <h1 className="text-2xl md:text-4xl text-pink-600">{singleLength?.number}</h1>
            </div>)
          }
      </div>
      <ReadersChart />
      <RevenueChart />
    </div>
  )
}

export default AdminHome