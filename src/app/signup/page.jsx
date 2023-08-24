// import SignupForm from "./SignupForm";

import SignupForm from "./SignupFrom";

export const metadata = {
    title: "Register | The Universal News",
};

const SignupPage = () => {
    return (
        <div className="hero w-full">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 w-full max-w-lg">
                    <SignupForm></SignupForm>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;