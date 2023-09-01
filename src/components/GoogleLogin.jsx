import useAuth from "@/hooks/useAuth";
import usejwt from "@/utils/usejwt";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();

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
      toast.error(error.message || "User not signed in");
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="btn bg-transparent text-black border-black rounded mx-auto"

    >
      <FcGoogle className="text-2xl " /> <span className="text-xs">Continue with google</span>
    </button>
  );
};

export default GoogleLogin;