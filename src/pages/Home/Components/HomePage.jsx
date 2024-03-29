import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { changeDataTable, deleteTableRow } from '../actions';
import cloneDeep from 'lodash/cloneDeep';

const tableIcons = {
  Add: AddBox,
  Check,
  Clear,
  Delete: DeleteOutline,
  DetailPanel: ChevronRight,
  Edit,
  Export: SaveAlt,
  Filter: FilterList,
  FirstPage,
  LastPage,
  NextPage: ChevronRight,
  PreviousPage: ChevronLeft,
  ResetSearch: Clear,
  Search,
  SortArrow: ArrowUpward,
  ThirdStateCheck: Remove,
  ViewColumn,
};


const Table = () => {
  const { dataTable, columnsTable } = useSelector(state =>({
    dataTable: state.home.data,
    columnsTable: state.home.columnsTable
  }));
  const dispatch = useDispatch();
  return (
    <MaterialTable
      icons={tableIcons}
      title="Table"
      columns={columnsTable}
      data={dataTable}
      editable={{
        onRowAdd: newData => new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            dispatch(changeDataTable(newData));
          }, 600);
        }),
        onRowUpdate: (newData, oldData) => new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            dispatch(changeDataTable(newData));
          }, 600);
        }),
        onRowDelete: oldData => new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            const data = dataTable.slice();
            data.splice(data.indexOf(oldData), 1);
            dispatch(deleteTableRow(data));
          }, 600);
        }),
      }}
    />
  );
};

export default React.memo(Table);
