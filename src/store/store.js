import { createStore } from 'redux';

const store = createStore(reducer);

function reducer(state, action) {
  switch (action.type) {
    case 'CHOICE_SERVICES':
      return {
        value: action.value,
      };
    default:
      return state;
  }
}

export default store;
