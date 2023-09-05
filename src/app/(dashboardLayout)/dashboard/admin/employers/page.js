import { GetAllEmployers, GetAllReporters } from '@/services/GetAllNews'
import Image from 'next/image'

const Employers = async () => {
  const employers = await GetAllEmployers();
  // console.log(employers);

  return (
    <div className="overflow-x-auto p-3">
      <div className=' border-2 border-cyan-500 h-40 rounded-lg flex items-center justify-center'>
        <h1 className="text-3xl text-red-600 font-semibold animate-pulse">{employers?.length} - Happy Employers</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table mt-5">
          <thead className="border rounded-lg">
            <tr>
              <th>Index</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody className="border">
            { employers &&
              employers?.map((employer, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="">
                      <div className="avatar mask mask-squircle w-12 h-12">
                        <Image width={20} height={20} src={employer?.img || "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} alt={employer?.name} />
                      </div>
                    </div>
                  </td>
                  <td>{employer?.name}</td>
                  <td>{employer?.email}</td>
                  <td>{employer?.role}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Employers