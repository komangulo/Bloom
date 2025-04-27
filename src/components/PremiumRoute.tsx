
import { ReactNode, useEffect, useState } from 'react';
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface PremiumRouteProps {
  children: ReactNode;
}

const PremiumRoute = ({ children }: PremiumRouteProps) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkSubscription = async () => {
      if (!user?.emailAddresses[0]?.emailAddress) return;

      const { data: subscriber } = await supabase
        .from('subscribers')
        .select('*')
        .eq('email', user.emailAddresses[0].emailAddress)
        .single();

      if (!subscriber) {
        // New user - start trial
        const trialEnd = new Date();
        trialEnd.setDate(trialEnd.getDate() + 3); // 3 days trial

        const { error } = await supabase
          .from('subscribers')
          .insert({
            user_id: user.id,
            email: user.emailAddresses[0].emailAddress,
            is_trial: true,
            trial_start: new Date().toISOString(),
            trial_end: trialEnd.toISOString(),
          });

        if (!error) {
          toast({
            title: "¡Bienvenido a tu prueba gratuita!",
            description: "Tienes 3 días para probar todas las funciones premium.",
          });
          setHasAccess(true);
          return;
        }
      }

      const now = new Date();
      const hasActiveSubscription = subscriber?.subscribed;
      const hasActiveTrial = subscriber?.is_trial && 
        new Date(subscriber.trial_end) > now;

      setHasAccess(hasActiveSubscription || hasActiveTrial);
    };

    if (isSignedIn && user) {
      checkSubscription();
    } else if (isLoaded && !isSignedIn) {
      // Show premium message after a short delay if not signed in
      const timer = setTimeout(() => setShowMessage(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isSignedIn, user, isLoaded]);

  if (!isLoaded) {
    return <div className="flex h-screen w-full items-center justify-center">Cargando...</div>;
  }

  if (!isSignedIn) {
    if (showMessage) {
      return (
        <div className="flex flex-col items-center justify-center h-screen w-full px-4">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <Lock className="mx-auto h-16 w-16 text-gray-400" />
              <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-gray-100">Contenido Premium</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Esta funcionalidad solo está disponible para usuarias con suscripción premium.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <Button 
                className="w-full bg-bloom-500 hover:bg-bloom-600"
                onClick={() => navigate('/premium')}
              >
                Ver Opciones Premium
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/signin')}
              >
                Iniciar Sesión
              </Button>
            </div>
          </div>
        </div>
      );
    }
    return <div className="flex h-screen w-full items-center justify-center">Cargando...</div>;
  }

  if (hasAccess === false) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Lock className="mx-auto h-16 w-16 text-gray-400" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-gray-100">Contenido Premium</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Esta funcionalidad solo está disponible para usuarias con suscripción premium.
            </p>
          </div>
          <Button 
            className="w-full bg-bloom-500 hover:bg-bloom-600"
            onClick={() => navigate('/premium')}
          >
            Ver Opciones Premium
          </Button>
        </div>
      </div>
    );
  }

  if (hasAccess === null) {
    return <div className="flex h-screen w-full items-center justify-center">Verificando suscripción...</div>;
  }

  return <>{children}</>;
};

export default PremiumRoute;
