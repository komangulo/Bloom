
import { ReactNode } from 'react';
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isSignedIn, isLoaded } = useUser();
  
  if (!isLoaded) {
    // You can show a loading state here
    return <div className="flex h-screen w-full items-center justify-center">Loading...</div>;
  }
  
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
