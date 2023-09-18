"use client";

import useAuth from "@/hooks/useAuth";
import usejwt from "@/utils/usejwt";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SignupForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
    } = useForm();

    const { createUser, profileUpdate, googleLogin } = useAuth();
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace, refresh } = useRouter();

    const uploadImage = async (event) => {
        const formData = new FormData();
        if (!event.target.files[0]) return;
        formData.append("image", event.target.files[0]);
        const toastId = toast.loading("Image uploading...");
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

    const handleGoogleLogin = async () => {
        const toastId = toast.loading("Loading...");
        try {
            const { user } = await googleLogin();
            const name = user?.displayName;
            console.log(name);
            const photo = user?.photoURL;
            const email = user?.email;
            const role = 'user';
            const myArtical = [];
            try {
                const response = await axios.post(`/api/save-user`, { name, email, photo, role,myArtical });
                console.log(response.data);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
            await usejwt({ email: user.email });
            startTransition(() => {
                refresh();
                toast.dismiss(toastId);
                toast.success("User signed in successfully");
                replace(from);
            });
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "User not signed in");
        }
    };

    const onSubmit = async (data, event) => {
        const { name, email, password, photo } = data;
        const toastId = toast.loading("Loading...");
        const role = 'user';

        try {
            const user = await createUser(email, password);
            const myArtical = [];
            try {
                const response = await axios.post(`/api/save-user`, { name, email, photo, role,myArtical });
                console.log(response.data);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
            await usejwt({ email });
            await profileUpdate({
                displayName: name,
                photoURL: photo,
            });
            startTransition(() => {
                refresh();
                toast.dismiss(toastId);
                toast.success("User signed in successfully");
                replace(from);
            });
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "User not signed in");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="text-center text-2xl">Register here</h2>
            <div className="form-control">
                <label htmlFor="name" className="label label-text">
                    Name
                </label>
                <input
                    type="text"
                    placeholder="name"
                    id="name"
                    name="name"
                    className="input input-bordered rounded"
                    {...register("name", { required: true })}
                />
                {errors.name && (
                    <span className="text-red-500 text-base mt-1">
                        Please enter your name.
                    </span>
                )}
            </div>
            <div className="form-control">
                <label htmlFor="email" className="label label-text">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="email"
                    id="email"
                    name="email"
                    className="input input-bordered rounded"
                    autoComplete="email"
                    {...register("email", {
                        required: true,
                        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                    })}
                />
                {errors.email && (
                    <span className="text-red-500 text-base mt-1">
                        Please enter a valid email address.
                    </span>
                )}
            </div>
            <div className="form-control">
                <label htmlFor="password" className="label label-text">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    name="password"
                    className="input input-bordered rounded"
                    autoComplete="new-password"
                    {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && (
                    <span className="text-red-500 text-base mt-1">
                        Please enter a password.
                    </span>
                )}
            </div>
            <div className="form-control">
                <label htmlFor="confirmPassword" className="label label-text">
                    Confirm Password
                </label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="input input-bordered rounded"
                    autoComplete="new-password"
                    {...register("confirmPassword", {
                        required: true,
                        minLength: 6,
                        validate: (value) =>
                            value === getValues("password") || "The passwords do not match.",
                    })}
                />
                {errors.confirmPassword && (
                    <span className="text-red-500 text-base mt-1">
                        {errors.confirmPassword.message || "Please confirm your password."}
                    </span>
                )}
            </div>
            <div className="form-control">
                <label htmlFor="photo" className="label label-text">
                    Photo
                </label>
                <input
                    type="file"
                    id="photo"
                    onChange={uploadImage}
                    className="file-input file-input-bordered rounded file-input-black w-full"
                />
            </div>
            <div className="form-control mt-6">
                <button className="btn bg-slate-950 text-white hover:text-black rounded" type="submit">
                    Register
                </button>
            </div>

            <p className="mt-3">
                Already have an account?{" "}
                <Link className="text-black underline ml-1" href="/login">
                    Login
                </Link>
            </p>
            <div className="divider mt-5">OR</div>
            <button
                onClick={handleGoogleLogin}
                type="button"
                className="btn bg-transparent text-black border-black rounded mx-auto"

            >
                <FcGoogle className="text-2xl " /> <span className="text-xs">Continue with google</span>
            </button>
        </form>
    );
};

export default SignupForm;