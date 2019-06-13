import { createActions } from 'redux-actions';

import * as constants from './constants';

export const {
  changeDataTable,
  deleteTableRow,
} = createActions(
  constants.CHANGE_DATA_TABLE,
  constants.DELETE_TABLE_ROW,
);
