import { ReactNode } from 'react';
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import { useUserPremiumStatus } from '@/lib/hooks/useUserPremiumStatus';

interface ProtectedRouteProps {
  children: ReactNode;
  requirePremium?: boolean;
}

const ProtectedRoute = ({ children, requirePremium = true }: ProtectedRouteProps) => {
  const { isSignedIn, isLoaded } = useUser();
  const { isPremium, isLoading: isPremiumLoading } = useUserPremiumStatus();
  
  if (!isLoaded || isPremiumLoading) {
    return <div className="flex h-screen w-full items-center justify-center">Loading...</div>;
  }
  
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  if (requirePremium && !isPremium) {
    return <Navigate to="/premium" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
