import { ReactNode, useEffect, useState } from 'react';
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useUserPremiumStatus } from '@/lib/hooks/useUserPremiumStatus';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
  requirePremium?: boolean;
}

const ProtectedRoute = ({ children, requirePremium = true }: ProtectedRouteProps) => {
  const { isSignedIn, isLoaded: isUserLoaded } = useUser();
  const { isPremium, isLoading: isPremiumLoading } = useUserPremiumStatus();
  const location = useLocation();
  const navigate = useNavigate();
  const [isClient, setIsClient] = useState(false);
  
  // Evitar hidratación incorrecta
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Efecto para manejar la redirección después de la autenticación
  useEffect(() => {
    if (isClient && isUserLoaded && !isSignedIn) {
      // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
      // Clerk manejará la redirección de vuelta después del inicio de sesión
      const redirectUrl = `${window.location.pathname}${window.location.search}`;
      navigate(`/signin?redirect_url=${encodeURIComponent(redirectUrl)}`);
    }
  }, [isClient, isUserLoaded, isSignedIn, navigate]);

  // Mostrar un indicador de carga mientras se verifica la autenticación
  if (!isClient || !isUserLoaded || isPremiumLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-bloom-500" />
          <p className="text-gray-600 dark:text-gray-400">Loading your data...</p>
        </div>
      </div>
    );
  }
  
  // Si el usuario no ha iniciado sesión, redirigir a la página de inicio de sesión
  if (!isSignedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // Si se requiere premium y el usuario no lo tiene, redirigir a la página de premium
  if (requirePremium && !isPremium) {
    return <Navigate to="/premium" state={{ from: location }} replace />;
  }
  
  // Si todo está bien, renderizar los hijos
  return <>{children}</>;
};

export default ProtectedRoute;
