import { ITariff, SortType } from '../interfaces';
import { SORT_TYPE } from '../constants';

export const compareTariffs = (sortType: SortType) => {
  switch (sortType) {
    case SORT_TYPE.SORT_DOWNLOAD_SPEED_ASCENDING:
      return (previousItem: ITariff, nextItem: ITariff) =>
        previousItem.downloadSpeed - nextItem.downloadSpeed;
    case SORT_TYPE.SORT_DOWNLOAD_SPEED_DESCENDING:
      return (previousItem: ITariff, nextItem: ITariff) =>
        nextItem.downloadSpeed - previousItem.downloadSpeed;
    case SORT_TYPE.SORT_UPLOAD_SPEED_ASCENDING:
      return (previousItem: ITariff, nextItem: ITariff) =>
        previousItem.uploadSpeed - nextItem.uploadSpeed;
    case SORT_TYPE.SORT_UPLOAD_SPEED_DESCENDING:
      return (previousItem: ITariff, nextItem: ITariff) =>
        nextItem.uploadSpeed - previousItem.uploadSpeed;
    case SORT_TYPE.SORT_PRICE_ASCENDING:
      return (previousItem: ITariff, nextItem: ITariff) =>
        previousItem.price - nextItem.price;
    case SORT_TYPE.SORT_PRICE_DESCENDING:
      return (previousItem: ITariff, nextItem: ITariff) =>
        nextItem.price - previousItem.price;
    default:
      return () => 0;
  }
};
