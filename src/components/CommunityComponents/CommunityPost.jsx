"use client"

import useAuth from "@/hooks/useAuth";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { startTransition, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiSolidPaperPlane, BiSolidPhotoAlbum } from "react-icons/bi";

const CommunityPost = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset
    } = useForm();
    const { replace, refresh } = useRouter();
    const { user } = useAuth();
    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();    // ADDED
    };
    const handleChange = async event => {
        const formData = new FormData();
        if (!event.target.files[0]) return;
        formData.append("image", event.target.files[0]);
        const toastId = toast.loading("Image uploading...");
        // handleFile(fileUploaded);
        try {
            const res = await fetch(
                `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            if (!res.ok) throw new Error("Failed to upload image");
            const data = await res.json();
            toast.dismiss(toastId);
            toast.success("Image uploaded successfully!");
            setValue("photo", data.data.url);
        } catch (error) {
            toast.error("Image not uploaded!");
            toast.dismiss(toastId);
        }
    };
    const onSubmit = async (data, event) => {
        const postId = Math.floor(1000000000 + Math.random() * 9000000000);
        const post = {
            postId,
            text:data?.text,
            photo: data?.photo || "empty",
            authorName: user?.displayName,
            authorEmail: user?.email,
            authorImage: user?.photoURL || "https://i.ibb.co/3Mrx6Fg/blank-profile.webp",
            likes: 0,
            dislikes: 0,
            comments: []
        };
        // console.log(post);
        const toastId = toast.loading("Loading...");
        try {
            try {
                const response = await axios.post(`/api/community/post`, post);
                console.log(response.data);
                reset();
            } catch (error) {
                console.error('Error submitting post:', error);
            }
            startTransition(() => {
                refresh();
                toast.dismiss(toastId);
                toast.success("Posted successfully");
            });
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || " invalid ! ");
        }
    };
    return (
        <div className="border-t border-b grid grid-cols-8 py-5">
            <div className="col-span-1 mx-auto">
                <Image className="rounded-full" height={40} width={40} alt="profile" src={user?.photoURL || "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} />
            </div>
            <div className="col-span-7">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="text" className="">
                        <textarea id="text" placeholder="What's on your mind?!" cols="30" rows="1" name="text" {...register("text", { required: true })} className="focus:outline-none w-full card1 resize-none" type="text" ></textarea>
                    </label>
                    {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                    <div className="divider"></div>
                    <div className="px-3 flex justify-between items-center">
                        <div>
                            {/* ADDED FROM HERE */}
                            <button onClick={handleClick} className="  text-cyan-600 flex  gap-2"><BiSolidPhotoAlbum className="text-xl" /><span className="text-lg">Add Photo</span></button>
                            {/* ADDED UNTIL HERE */}
                            <input
                                type="file"
                                ref={hiddenFileInput}
                                onChange={handleChange}
                                style={{ display: 'none' }}
                            />
                        </div>
                        <button type="submit" className="primary-btn flex items-center gap-1"><BiSolidPaperPlane />Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CommunityPost;