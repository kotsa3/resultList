import { v4 as uuidv4 } from 'uuid';

import { ITariff } from '../modules/tariffs/interfaces';

export const TARIFFS: ITariff[] = [
  {
    id: uuidv4(),
    name: 'Tariff name',
    downloadSpeed: 16,
    uploadSpeed: 8,
    unit: 'Mbit/s',
    price: 123.45,
    benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
  },
  {
    id: uuidv4(),
    name: 'Tariff name',
    downloadSpeed: 100,
    uploadSpeed: 50,
    unit: 'Mbit/s',
    price: 345.12,
    benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
  },
  {
    id: uuidv4(),
    name: 'Tariff name',
    downloadSpeed: 50,
    uploadSpeed: 25,
    unit: 'Mbit/s',
    price: 234.51,
    benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
  },
  {
    id: uuidv4(),
    name: 'Tariff name',
    downloadSpeed: 250,
    uploadSpeed: 125,
    unit: 'Mbit/s',
    price: 451.23,
    benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
  },
  {
    id: uuidv4(),
    name: 'Tariff name',
    downloadSpeed: 500,
    uploadSpeed: 250,
    unit: 'Mbit/s',
    price: 512.34,
    benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
  },
];
