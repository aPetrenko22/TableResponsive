import { handleActions } from 'redux-actions';
import reduceReducers from 'reduce-reducers';
import dataTable from './Components/dataTable';
import {
  changeDataTable,
  deleteTableRow,
} from './actions';
import columnsTable from './Components/dataTitle';

const initialState = {
  data: dataTable,
  columnsTable,
};


const reducers = handleActions(
  {
    [changeDataTable]: (state, action) => ({
      ...state,
      data: [ ...state.data, action.payload]
    }),
    [deleteTableRow]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
  initialState,
);

export default reduceReducers(reducers);
