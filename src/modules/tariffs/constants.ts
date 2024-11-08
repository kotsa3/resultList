export const PRICE_SORT_TYPE = {
  NOT_SORTED: 'not sorted',
  SORT_PRICE_ASCENDING: 'price ascending',
  SORT_PRICE_DESCENDING: 'price descending',
};

export const SPEED_SORT_TYPE = {
  NOT_SORTED: 'not sorted',
  SORT_DOWNLOAD_SPEED_ASCENDING: 'download speed ascending',
  SORT_DOWNLOAD_SPEED_DESCENDING: 'download speed descending',
  SORT_UPLOAD_SPEED_ASCENDING: 'upload speed ascending',
  SORT_UPLOAD_SPEED_DESCENDING: 'upload speed descending',
};

export const SORT_TYPE = {
  ...PRICE_SORT_TYPE,
  ...SPEED_SORT_TYPE,
};
