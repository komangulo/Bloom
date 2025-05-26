import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { supabase } from '@/lib/supabase';

export const useUserPremiumStatus = () => {
  const { user } = useUser();
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkPremiumStatus = async () => {
      if (!user) {
        setIsPremium(false);
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('subscribers')
          .select('subscription_tier')
          .eq('email', user.primaryEmailAddress?.emailAddress)
          .single();

        if (error) {
          console.error('Error checking premium status:', error);
          setIsPremium(false);
        } else {
          setIsPremium(data?.subscription_tier === 'premium');
        }
      } catch (error) {
        console.error('Error checking premium status:', error);
        setIsPremium(false);
      }

      setIsLoading(false);
    };

    checkPremiumStatus();
  }, [user]);

  return { isPremium, isLoading };
}; 