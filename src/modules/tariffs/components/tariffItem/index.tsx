import { useState } from 'react';

import { ITariffItem } from '../../interfaces';
import { TariffSpeedInfo } from '../tariffSpeedInfo';
import { Button } from '../../../../components/Button';
import { BenefitsList } from '../benefitsList';
import { useIsResolution } from '../../../../hooks/useIsResolution';
import { RESOLUTIONS } from '../../../../constants';

import styles from './tariffItem.module.scss';

interface ITariffItemProps {
  tariffItem: ITariffItem;
}

export const TariffItem = ({ tariffItem }: ITariffItemProps) => {
  const isDesktop = useIsResolution(RESOLUTIONS.DESKTOP);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const showMessage = () => {
    setIsMessageVisible(!isMessageVisible);
  };

  return (
    <li className={styles.tariffItemWrapper}>
      <div className={styles.tariffItemIndex}>{tariffItem.index}.</div>
      <div className={styles.tariffItemDetails}>
        <div className={styles.tariffItemName}>
          <h4>{tariffItem.name}</h4>
        </div>
        <TariffSpeedInfo
          download={tariffItem.downloadSpeed}
          upload={tariffItem.uploadSpeed}
          unit={tariffItem.unit}
        />
        {isDesktop && <BenefitsList benefits={tariffItem.benefits} />}
        <div className={styles.tariffItemPrice}>
          <div>
            <strong>{tariffItem.price} &euro;</strong>
          </div>
          <div>
            <Button onClick={showMessage}>To tariff &gt;</Button>
            {isMessageVisible && (
              <p>It will be redirect to tariff page functionality here</p>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
