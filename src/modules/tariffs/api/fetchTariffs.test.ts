import { ITariff } from '../interfaces';
import { SORT_TYPE } from '../constants';

import { fetchTariffs } from './fetchTariffs';

describe('sortTariffs', () => {
  const TARIFFS: ITariff[] = [
    {
      id: '1',
      name: 'Tariff name',
      downloadSpeed: 16,
      uploadSpeed: 8,
      unit: 'Mbit/s',
      price: 123.45,
      benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
    },
    {
      id: '2',
      name: 'Tariff name',
      downloadSpeed: 100,
      uploadSpeed: 50,
      unit: 'Mbit/s',
      price: 345.12,
      benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
    },
    {
      id: '3',
      name: 'Tariff name',
      downloadSpeed: 50,
      uploadSpeed: 25,
      unit: 'Mbit/s',
      price: 234.51,
      benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
    },
    {
      id: '4',
      name: 'Tariff name',
      downloadSpeed: 64,
      uploadSpeed: 16,
      unit: 'Mbit/s',
      price: 451.23,
      benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
    },
  ];

  it('should sort tariffs by price in ascending order', async () => {
    const expectedResult: ITariff[] = [
      {
        id: '1',
        name: 'Tariff name',
        downloadSpeed: 16,
        uploadSpeed: 8,
        unit: 'Mbit/s',
        price: 123.45,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '3',
        name: 'Tariff name',
        downloadSpeed: 50,
        uploadSpeed: 25,
        unit: 'Mbit/s',
        price: 234.51,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '2',
        name: 'Tariff name',
        downloadSpeed: 100,
        uploadSpeed: 50,
        unit: 'Mbit/s',
        price: 345.12,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '4',
        name: 'Tariff name',
        downloadSpeed: 64,
        uploadSpeed: 16,
        unit: 'Mbit/s',
        price: 451.23,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
    ];
    const sorted = await fetchTariffs(SORT_TYPE.SORT_PRICE_ASCENDING, TARIFFS);
    expect(sorted).toEqual(expectedResult);
  });

  it('should sort tariffs by price in descending order', async () => {
    const expectedResult: ITariff[] = [
      {
        id: '4',
        name: 'Tariff name',
        downloadSpeed: 64,
        uploadSpeed: 16,
        unit: 'Mbit/s',
        price: 451.23,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '2',
        name: 'Tariff name',
        downloadSpeed: 100,
        uploadSpeed: 50,
        unit: 'Mbit/s',
        price: 345.12,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '3',
        name: 'Tariff name',
        downloadSpeed: 50,
        uploadSpeed: 25,
        unit: 'Mbit/s',
        price: 234.51,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '1',
        name: 'Tariff name',
        downloadSpeed: 16,
        uploadSpeed: 8,
        unit: 'Mbit/s',
        price: 123.45,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
    ];
    const sorted = await fetchTariffs(SORT_TYPE.SORT_PRICE_DESCENDING, TARIFFS);
    expect(sorted).toEqual(expectedResult);
  });

  it('should sort tariffs by downloadSpeed in ascending order', async () => {
    const expectedResult: ITariff[] = [
      {
        id: '1',
        name: 'Tariff name',
        downloadSpeed: 16,
        uploadSpeed: 8,
        unit: 'Mbit/s',
        price: 123.45,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '3',
        name: 'Tariff name',
        downloadSpeed: 50,
        uploadSpeed: 25,
        unit: 'Mbit/s',
        price: 234.51,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '4',
        name: 'Tariff name',
        downloadSpeed: 64,
        uploadSpeed: 16,
        unit: 'Mbit/s',
        price: 451.23,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '2',
        name: 'Tariff name',
        downloadSpeed: 100,
        uploadSpeed: 50,
        unit: 'Mbit/s',
        price: 345.12,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
    ];
    const sorted = await fetchTariffs(
      SORT_TYPE.SORT_DOWNLOAD_SPEED_ASCENDING,
      TARIFFS
    );
    expect(sorted).toEqual(expectedResult);
  });

  it('should sort tariffs by downloadSpeed in descending order', async () => {
    const expectedResult: ITariff[] = [
      {
        id: '2',
        name: 'Tariff name',
        downloadSpeed: 100,
        uploadSpeed: 50,
        unit: 'Mbit/s',
        price: 345.12,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '4',
        name: 'Tariff name',
        downloadSpeed: 64,
        uploadSpeed: 16,
        unit: 'Mbit/s',
        price: 451.23,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '3',
        name: 'Tariff name',
        downloadSpeed: 50,
        uploadSpeed: 25,
        unit: 'Mbit/s',
        price: 234.51,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '1',
        name: 'Tariff name',
        downloadSpeed: 16,
        uploadSpeed: 8,
        unit: 'Mbit/s',
        price: 123.45,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
    ];
    const sorted = await fetchTariffs(
      SORT_TYPE.SORT_DOWNLOAD_SPEED_DESCENDING,
      TARIFFS
    );
    expect(sorted).toEqual(expectedResult);
  });

  it('should sort tariffs by uploadSpeed in ascending order', async () => {
    const expectedResult: ITariff[] = [
      {
        id: '1',
        name: 'Tariff name',
        downloadSpeed: 16,
        uploadSpeed: 8,
        unit: 'Mbit/s',
        price: 123.45,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '4',
        name: 'Tariff name',
        downloadSpeed: 64,
        uploadSpeed: 16,
        unit: 'Mbit/s',
        price: 451.23,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '3',
        name: 'Tariff name',
        downloadSpeed: 50,
        uploadSpeed: 25,
        unit: 'Mbit/s',
        price: 234.51,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '2',
        name: 'Tariff name',
        downloadSpeed: 100,
        uploadSpeed: 50,
        unit: 'Mbit/s',
        price: 345.12,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
    ];
    const sorted = await fetchTariffs(
      SORT_TYPE.SORT_UPLOAD_SPEED_ASCENDING,
      TARIFFS
    );
    expect(sorted).toEqual(expectedResult);
  });

  it('should sort tariffs by uploadSpeed in descending order', async () => {
    const expectedResult: ITariff[] = [
      {
        id: '2',
        name: 'Tariff name',
        downloadSpeed: 100,
        uploadSpeed: 50,
        unit: 'Mbit/s',
        price: 345.12,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '3',
        name: 'Tariff name',
        downloadSpeed: 50,
        uploadSpeed: 25,
        unit: 'Mbit/s',
        price: 234.51,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '4',
        name: 'Tariff name',
        downloadSpeed: 64,
        uploadSpeed: 16,
        unit: 'Mbit/s',
        price: 451.23,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
      {
        id: '1',
        name: 'Tariff name',
        downloadSpeed: 16,
        uploadSpeed: 8,
        unit: 'Mbit/s',
        price: 123.45,
        benefits: ['Tariff benefit 1', 'Tariff benefit 2', 'Tariff benefit 3'],
      },
    ];
    const sorted = await fetchTariffs(
      SORT_TYPE.SORT_UPLOAD_SPEED_DESCENDING,
      TARIFFS
    );
    expect(sorted).toEqual(expectedResult);
  });
});
