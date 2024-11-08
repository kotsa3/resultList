import { TariffList } from './modules/tariffs/components/tariffList';
import { TariffProvider } from './modules/tariffs/context/tariffContext';

export const App = () => {
  return (
    <TariffProvider>
      <TariffList />
    </TariffProvider>
  );
};
