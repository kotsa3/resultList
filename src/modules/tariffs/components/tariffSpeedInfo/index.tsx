import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';

import { useIsResolution } from '../../../../hooks/useIsResolution';
import { RESOLUTIONS } from '../../../../constants';

import styles from './tariffSpeedInfo.module.scss';

interface ITariffSpeedInfoProps {
  upload: number;
  download: number;
  unit: string;
}

export const TariffSpeedInfo = ({
  upload,
  download,
  unit,
}: ITariffSpeedInfoProps) => {
  const isNotMobile = useIsResolution(RESOLUTIONS.TABLET);

  return (
    <div className={styles.tariffSpeedInfoWrapper}>
      {isNotMobile && <h6>Download</h6>}
      <div className={styles.tariffSpeedInfoItem}>
        <div className={styles.tariffSpeedInfoIcon}>
          <DownloadIcon />
        </div>
        <div>
          {download} {unit}
        </div>
      </div>
      {isNotMobile && <h6>Upload</h6>}
      <div className={styles.tariffSpeedInfoItem}>
        <div className={styles.tariffSpeedInfoIcon}>
          <UploadIcon />
        </div>
        <div>
          {upload} {unit}
        </div>
      </div>
    </div>
  );
};
