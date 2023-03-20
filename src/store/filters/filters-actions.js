export const FILTER_ADD = 'FILTER_ADD';
export const FILTER_REMOVE = 'FILTER_REMOVE';
export const FILTER_CLEAR = 'FILTER_CLEAR';

export const addFilter = (filter) => ({
  type: FILTER_ADD,
  filter
});

export const removeFilter = (filter) => ({
  type: FILTER_REMOVE,
  filter
});

export const clearFilter = () => ({
  type: FILTER_CLEAR
})