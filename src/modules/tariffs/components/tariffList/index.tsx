import { TariffItem } from '../tariffItem';
import { Filters } from '../filters';
import { useTariffContext } from '../../hooks';

import styles from './tariffList.module.scss';

export const TariffList = () => {
  const { isLoading, tariffs } = useTariffContext();

  return (
    <div className={styles.tariffListWrapper}>
      <Filters />
      {isLoading ? (
        <div className={styles.tariffListMessage}>
          <strong>Please wait. Data is loading</strong>
        </div>
      ) : (
        <ul className={styles.tariffListList}>
          {tariffs.map((tariff, index) => (
            <TariffItem
              key={tariff.id}
              tariffItem={{ ...tariff, index: index + 1 }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
