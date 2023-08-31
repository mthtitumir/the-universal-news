import { GetAllUsers } from "@/services/GetAllNews"
import Image from "next/image";

const allUsers = async () => {
    const users = await GetAllUsers();
    // console.log(users);
    return (
        <div className="overflow-x-auto p-3">
            <div className=' border-2 border-cyan-500 h-40 rounded-lg flex items-center justify-center'>
                <h1 className="text-3xl text-red-600 font-semibold animate-pulse">{users.length} - Registered Users</h1>
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
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="">
                                            <div className="avatar mask mask-squircle w-12 h-12">
                                                <Image width={20} height={20} src={user?.img || "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} alt={user?.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.role}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default allUsers