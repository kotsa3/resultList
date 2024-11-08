import { memo, useState, useEffect, ChangeEvent } from 'react';

import { useTariffContext } from '../../hooks';
import { SPEED_SORT_TYPE, PRICE_SORT_TYPE } from '../../constants';

import styles from './filters.module.scss';

export const Filters = memo(() => {
  const { sortType, changeSortType } = useTariffContext();
  const [speedOption, setSpeedOption] = useState(SPEED_SORT_TYPE.NOT_SORTED);
  const [priceOption, setPriceOption] = useState(PRICE_SORT_TYPE.NOT_SORTED);

  useEffect(() => {
    const defineFilterState = () => {
      if (Object.values(SPEED_SORT_TYPE).includes(sortType)) {
        setSpeedOption(sortType);
        setPriceOption(PRICE_SORT_TYPE.NOT_SORTED);

        return;
      }

      setPriceOption(sortType);
      setSpeedOption(SPEED_SORT_TYPE.NOT_SORTED);
    };
    defineFilterState();
  }, [sortType, setSpeedOption, setPriceOption]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    changeSortType(event.target.value);
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filtersItem}>
        <label htmlFor="speed-filter">Sort by speed</label>
        <select id="speed-filter" value={speedOption} onChange={handleChange}>
          {Object.values(SPEED_SORT_TYPE).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filtersItem}>
        <label htmlFor="price-filter">Sort By price</label>
        <select id="price-filter" value={priceOption} onChange={handleChange}>
          {Object.values(PRICE_SORT_TYPE).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
});
