
import { SignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-4 py-3 flex items-center justify-between border-b">
        <Link to="/" className="flex items-center">
          <div className="h-8 w-8 mr-2">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-bloom-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
              B
            </div>
          </div>
          <span className="font-bold text-xl text-bloom-600 dark:text-bloom-400">Bloom</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/signup">
            <button className="bg-bloom-500 hover:bg-bloom-600 text-white px-6 py-2 rounded-full font-medium">
              Get Started
            </button>
          </Link>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center p-4">
        <SignIn routing="path" path="/signin" redirectUrl="/dashboard" />
      </div>
    </div>
  );
};

export default SignInPage;
