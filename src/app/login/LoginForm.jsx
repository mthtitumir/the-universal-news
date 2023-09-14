"use client"
import useAuth from "@/hooks/useAuth";
import usejwt from "@/utils/usejwt";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import {AiFillEye, AiFillEyeInvisible  } from "react-icons/ai";


const LoginForm = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signIn, googleLogin } = useAuth();
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace, refresh } = useRouter();

    const onSubmit = async (data) => {
        const { email, password } = data;
        const toastId = toast.loading("Loading...");
        try {
            const user = await signIn(email, password);
            await usejwt({ email });
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

    const handleGoogleLogin = async () => {
        const toastId = toast.loading("Loading...");
        try {
            const { user } = await googleLogin();
            await usejwt({ email: user.email });
            startTransition(() => {
                refresh();
                toast.dismiss(toastId);
                toast.success("User signed in successfully");
                replace(from);
            });
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message, "ok" || "User not signed in");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="text-center text-2xl">Log in your account</h2>
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
                <div className="flex justify-between items-center">
                    <input
                        type={show ? "text" : "password"}
                        placeholder="password"
                        id="password"
                        name="password"
                        className="input input-bordered rounded w-full"
                        autoComplete="new-password"
                        {...register("password", { required: true, minLength: 6 })}
                    />
                    <p onClick={handleShow} className="-ml-14 cursor-pointer">{show ? <AiFillEye className="text-2xl"></AiFillEye> : <AiFillEyeInvisible className="text-2xl"></AiFillEyeInvisible>}</p>
                </div>

                {errors.password && (
                    <span className="text-red-500 text-base mt-1">
                        Please enter a password.
                    </span>
                )}
            </div>
            <div className="form-control mt-6">
                <button className="btn bg-slate-950 text-white hover:text-black rounded" type="submit">
                    Continue
                </button>
            </div>

            <p className="mt-3">
                Don&apos;t have an account?
                <Link className="text-black underline ml-1" href="/signup">
                    Signup
                </Link>
            </p>
            <div className="divider mt-5">OR</div>
            {/* google login  */}
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

export default LoginForm;