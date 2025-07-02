import { useState } from 'react';
import { SubscriptionType } from '@/components/ui/subscription-form';

export function useSubscriptionForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [subscriptionType, setSubscriptionType] = useState<SubscriptionType>('general');

  const openForm = (type: SubscriptionType) => {
    setSubscriptionType(type);
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    subscriptionType,
    openForm,
    closeForm
  };
}