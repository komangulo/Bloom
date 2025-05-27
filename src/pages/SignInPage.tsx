
import { SignIn, useAuth } from "@clerk/clerk-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const SignInPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useAuth();
  
  // Obtener la URL de redirección o usar /dashboard como valor por defecto
  const redirectUrl = searchParams.get('redirect_url') || '/dashboard';
  
  // Si el usuario ya está autenticado, redirigir a la URL de redirección
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate(redirectUrl);
    }
  }, [isLoaded, isSignedIn, navigate, redirectUrl]);
  
  // Construir la URL de registro con el redirect_url actual
  const signUpUrl = `/signup${redirectUrl ? `?redirect_url=${encodeURIComponent(redirectUrl)}` : ''}`;
  
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
          <Link to={signUpUrl}>
            <button className="bg-[#EE45C0] hover:bg-[#d93aaf] text-white px-6 py-2 rounded-full font-medium transition-colors">
              Get Started
            </button>
          </Link>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center p-4 bg-gray-50">
        <div className="w-full max-w-md">
          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: "bg-[#EE45C0] hover:bg-[#d93aaf] text-white",
                card: "border-0 shadow-xl",
              }
            }}
            routing="path"
            path="/signin"
            signUpUrl={signUpUrl}
            afterSignInUrl={redirectUrl}
            afterSignUpUrl={redirectUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
