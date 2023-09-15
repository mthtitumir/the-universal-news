"use client"
import useAuth from "@/hooks/useAuth";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";

const Welcome = () => {
    const {user} = useAuth();
    return (
        <div className="flex px-3 my-3 gap-3 justify-center items-center">
            <h1 className="text-center text-3xl">Whats Happening {user?.displayName} </h1>
            <BsEmojiSmileUpsideDown className="text-pink-600 font-semibold" />
        </div>
    );
};

export default Welcome;