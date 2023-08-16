import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login | The Universal News",
};

const LoginPage = () => {
  return (
    <div className="hero w-full">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-full max-w-lg">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;