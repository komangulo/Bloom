import { createRoot } from 'react-dom/client';
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App';
import './index.css';

const PUBLISHABLE_KEY = "pk_test_c291Z2h0LWdob3N0LTMuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

// Configuración de apariencia para Clerk
const clerkAppearance = {
  elements: {
    rootBox: {
      width: '100%',
    },
    card: {
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto',
    },
  },
  variables: {
    colorPrimary: '#EE45C0',
  },
};

// Componente para manejar la navegación personalizada
const ClerkWithNavigate = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      appearance={clerkAppearance}
      routerPush={(to: string) => {
        // Redirect all navigation to signup if not authenticated
        if (to.startsWith('/sign-in') || to.startsWith('/sign-up')) {
          window.location.href = 'https://www.period.click/signup';
          return Promise.resolve(false);
        }
        window.location.href = to;
        return Promise.resolve(false);
      }}
      routerReplace={(to: string) => {
        window.location.href = to;
        return Promise.resolve(false);
      }}
      signInUrl="https://www.period.click/signup"
      signUpUrl="https://www.period.click/signup"
      afterSignInUrl="https://www.period.click/dashboard"
      afterSignUpUrl="https://www.period.click/dashboard"
    >
      {children}
    </ClerkProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <ClerkWithNavigate>
    <App />
  </ClerkWithNavigate>
);
