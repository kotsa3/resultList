import cloneDeep from 'lodash.clonedeep';

import { SortType, ITariff } from '../interfaces';
import { compareTariffs } from '../helpers/compareTariffs';

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fetchTariffs = async (
  sortingType: SortType,
  tariffs: ITariff[]
) => {
  const clonedTariffs = cloneDeep(tariffs);
  await delay(1500);

  return clonedTariffs.sort(compareTariffs(sortingType));
};
