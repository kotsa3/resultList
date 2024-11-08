import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';

import { ITariff } from '../interfaces';
import { SORT_TYPE } from '../constants';
import { SortType } from '../interfaces';
import { fetchTariffs } from '../api/fetchTariffs';
import { TARIFFS } from '../../../mock';

interface TariffContextType {
  tariffs: ITariff[];
  sortType: SortType;
  isLoading: boolean;
  changeSortType: (type: SortType) => void;
}

interface ITariffProviderProps {
  children: ReactNode;
}

export const TariffContext = createContext<TariffContextType | undefined>(
  undefined
);

export const TariffProvider = ({ children }: ITariffProviderProps) => {
  const [tariffs, setTariffs] = useState<ITariff[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sortType, setSortType] = useState<SortType>(SORT_TYPE.NOT_SORTED);

  useEffect(() => {
    setTariffs([]);
    setIsLoading(true);
    const fetchData = async () => {
      const loadedTariffs = await fetchTariffs(sortType, TARIFFS);

      setIsLoading(false);
      setTariffs(loadedTariffs);
    };

    fetchData();
  }, [sortType]);

  const changeSortType = useCallback(
    (type: SortType) => {
      setSortType(type);
    },
    [setSortType]
  );

  return (
    <TariffContext.Provider
      value={{ tariffs, sortType, isLoading, changeSortType }}
    >
      {children}
    </TariffContext.Provider>
  );
};
