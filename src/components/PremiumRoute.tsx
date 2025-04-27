
import { ReactNode, useEffect, useState } from 'react';
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface PremiumRouteProps {
  children: ReactNode;
}

const PremiumRoute = ({ children }: PremiumRouteProps) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
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
    }
  }, [isSignedIn, user]);

  if (!isLoaded) {
    return <div className="flex h-screen w-full items-center justify-center">Cargando...</div>;
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  if (hasAccess === false) {
    navigate('/premium');
    return null;
  }

  if (hasAccess === null) {
    return <div className="flex h-screen w-full items-center justify-center">Verificando suscripción...</div>;
  }

  return <>{children}</>;
};

export default PremiumRoute;
