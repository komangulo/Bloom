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
      routerPush={(to) => window.location.assign(to)}
      routerReplace={(to) => window.location.replace(to)}
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
