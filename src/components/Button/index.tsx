import { ButtonHTMLAttributes } from 'react';

import styles from './button.module.scss';

export const Button = ({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};
