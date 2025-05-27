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

// Proveedor de Clerk simplificado
const ClerkWithNavigate = ({ children }: { children: React.ReactNode }) => (
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={clerkAppearance}>
    {children}
  </ClerkProvider>
);

createRoot(document.getElementById("root")!).render(
  <ClerkWithNavigate>
    <App />
  </ClerkWithNavigate>
);
