import { useContext } from 'react';

import { TariffContext } from '../context/tariffContext';

export const useTariffContext = () => {
  const context = useContext(TariffContext);
  if (!context) {
    throw new Error('useTariffContext must be used within a TariffProvider');
  }
  return context;
};
