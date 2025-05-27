import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";
import { ReactNode, ReactElement } from "react";

interface WithAuthProps {
  children: ReactNode;
  redirectPath?: string;
}

// Componente de orden superior (HOC) para manejar la autenticación
export const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const WithAuth = (props: any) => {
    const { isSignedIn, isLoaded } = useUser();
    const location = useLocation();
    const redirectPath = props.redirectPath || '/signin';

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    if (!isSignedIn) {
      // Guardar la ruta actual para redirigir después del inicio de sesión
      const redirectTo = encodeURIComponent(
        location.pathname + location.search + location.hash
      );
      return (
        <Navigate 
          to={`${redirectPath}?redirect_url=${redirectTo}`} 
          replace 
          state={{ from: location }}
        />
      );
    }

    return <WrappedComponent {...props} />;
  };

  // Asignar un nombre de visualización para facilitar la depuración
  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithAuth.displayName = `withAuth(${wrappedComponentName})`;

  return WithAuth;
};

// Componente funcional para usar con withAuth
export const ProtectedContent = ({ children, redirectPath = '/signin' }: WithAuthProps): ReactElement | null => {
  const { isSignedIn, isLoaded } = useUser();
  const location = useLocation();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    // Guardar la ruta actual para redirigir después del inicio de sesión
    const redirectTo = encodeURIComponent(
      location.pathname + location.search + location.hash
    );
    return (
      <Navigate 
        to={`${redirectPath}?redirect_url=${redirectTo}`} 
        replace 
        state={{ from: location }}
      />
    );
  }

  return <>{children}</>;
};
