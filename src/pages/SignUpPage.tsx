import { SignUp, useAuth } from "@clerk/clerk-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const SignUpPage = () => {
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
  
  // Construir la URL de inicio de sesión con el redirect_url actual
  const signInUrl = `/signin${redirectUrl ? `?redirect_url=${encodeURIComponent(redirectUrl)}` : ''}`;

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
          <Link to={signInUrl} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Sign In
          </Link>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md">
          <SignUp 
            appearance={{
              elements: {
                formButtonPrimary: "bg-[#EE45C0] hover:bg-[#d93aaf] text-white",
                card: "border-0 shadow-xl dark:bg-gray-800",
              }
            }}
            routing="path"
            path="/signup"
            signInUrl={signInUrl}
            afterSignUpUrl={redirectUrl}
            afterSignInUrl={redirectUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
