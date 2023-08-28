"use client"
import useAuth from "@/hooks/useAuth"
import Image from "next/image";
import { AiFillAndroid, AiOutlineMail, AiOutlinePhone, AiOutlineProfile } from "react-icons/ai";
import {MdLocationPin} from "react-icons/md";

const UserInfo = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1 className="text-xl md:text-3xl mt-5 text-center">Welcome <span className="text-cyan-600">{user ? user.displayName : "Sir"}</span> !</h1>
            <div className="flex flex-col md:flex-row mt-10 gap-5 items-center justify-center">
                <figure className=" p-3 flex justify-center rounded-lg border-r-1"><Image className="rounded-full" height={250} width={250} src={"https://i.ibb.co/BqDXqHd/Titumir-1.jpg"} alt={`${user?.displayName}'s profile photo`} /></figure>
                
                <div className="flex flex-col gap-5">
                    <h1 className="info-h1"><AiOutlineProfile />UserId: {user?.uid}</h1>
                    <h1 className="info-h1"><AiFillAndroid />Name: {user?.displayName}</h1>
                    <h1 className="info-h1"><AiOutlineMail />Email:  {user?.email}</h1>
                    <h1 className="info-h1"><AiOutlinePhone />Phone: {user?.phoneNumber ? user.phoneNumber : "null"}</h1>
                    <h1 className="info-h1"><MdLocationPin />Country: {user?.phoneNumber ? user.phoneNumber : "null"}</h1>
                </div>
            </div>
        </div>
    )
}

export default UserInfo