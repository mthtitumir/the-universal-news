import { myFont } from "@/components/Navbar/font";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login | The Universal News",
};

const LoginPage = () => {
  return (
    <div className="hero w-full">
      <div className="hero-content flex-col w-full">
        <h1 className={`${myFont.className} text-3xl`}>The Universal News</h1>
        <div className="card flex-shrink-0 w-full max-w-lg">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;