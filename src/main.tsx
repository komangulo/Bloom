import { createRoot } from 'react-dom/client';
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App';
import './index.css';

const PUBLISHABLE_KEY = "pk_test_c291Z2h0LWdob3N0LTMuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

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
};

createRoot(document.getElementById("root")!).render(
  <ClerkProvider 
    publishableKey={PUBLISHABLE_KEY}
    appearance={clerkAppearance}
    signInUrl="/signin"
    signUpUrl="/signup"
    signInFallbackRedirectUrl="/"
    signUpFallbackRedirectUrl="/premium"
    afterSignInUrl="/"
    afterSignUpUrl="/premium"
    afterSignOutUrl="/"
  >
    <App />
  </ClerkProvider>
);
