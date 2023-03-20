import {FILTER_ADD, FILTER_REMOVE, FILTER_CLEAR} from './filters-actions';

export const filterReducer = (state = [], action) => {
  switch (action.type){

    case FILTER_ADD: {
      if (!state.includes(action.filter)){
        return [...state, action.filter]
      }
      return state;
    }

    case FILTER_REMOVE: {
      return state.filter(item => item !== action.filter);
    }

    case FILTER_CLEAR: {
      return [];
    }

    default: {
      return state;
    }
  }
}