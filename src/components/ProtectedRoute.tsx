import { ReactNode, useEffect, useState } from 'react';
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';
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
  const [isClient, setIsClient] = useState(false);
  
  // Evitar hidratación incorrecta
  useEffect(() => {
    setIsClient(true);
  }, []);

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
  // con la ruta actual como parámetro de retorno
  if (!isSignedIn) {
    const currentPath = location.pathname + location.search;
    return <RedirectToSignIn afterSignInUrl={currentPath} />;
  }

  // Si se requiere premium y el usuario no lo tiene, redirigir a la página de premium
  if (requirePremium && !isPremium) {
    return <Navigate to="/premium" state={{ from: location }} replace />;
  }
  
  // Si todo está bien, renderizar los hijos
  return <>{children}</>;
};

export default ProtectedRoute;
