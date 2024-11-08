import { v4 as uuidv4 } from 'uuid';

import styles from './benefits.module.scss';

interface IBenefitsProps {
  benefits: string[];
}

export const BenefitsList = ({ benefits }: IBenefitsProps) => {
  return (
    <div className={styles.benefitsListWrapper}>
      <ul>
        {benefits.map((benefit) => (
          <li key={uuidv4()}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
};
