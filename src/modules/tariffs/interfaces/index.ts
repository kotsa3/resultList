import { SORT_TYPE } from '../constants';

export interface ITariff {
  id: string;
  name: string;
  downloadSpeed: number;
  uploadSpeed: number;
  unit: string;
  price: number;
  benefits: string[];
}

export interface ITariffItem extends ITariff {
  index: number;
}

export type SortType = (typeof SORT_TYPE)[keyof typeof SORT_TYPE];
