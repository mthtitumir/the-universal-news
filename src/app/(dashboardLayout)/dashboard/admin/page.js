import DashCard from "@/components/DashboardComponents/DashCard";
import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
import ReadersChart from "@/components/DashboardComponents/ReadersChart";
import RevenueChart from "@/components/DashboardComponents/RevenueChart";
import AdminInfos from "@/hooks/useAdminInfos"; 

const AdminHome = async() => {
  const lengthInfo = await AdminInfos();
  return (
    <div className='p-3 md:pr-0 flex flex-col gap-5'>
      <DashboardBanner text={`Welcome!`} />
      {/* {singleLength?.name} {singleLength?.number} */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 border border-cyan-600 rounded-lg p-5 ">
          {
            lengthInfo.map((singleLength, index) => <DashCard key={index+1} matrix={singleLength?.name} quantity={singleLength?.number} />)
          }
      </div>
      <ReadersChart />
      <RevenueChart />
    </div>
  )
}

export default AdminHome