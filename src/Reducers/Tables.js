import {
  CREATE_TABLE,
  DELETE_TABLE,
  GET_TABLES,
  GET_TABLE,
  UPDATE_TABLE,
} from "../Actions/Table";

const initialState = {
  tables: [],
  viewedTable: [],
};

export const getTablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TABLES:
      return {
        ...state,
        tables: action.tables,
      };
    case GET_TABLE:
      return {
        ...state,
        viewedTable: action.table,
      };
    case CREATE_TABLE:
      const tables = state.tables;
      return {
        ...state,
        tables: [...tables, action.table],
      };
    case UPDATE_TABLE:
      const oldtables = state.tables;
      const newTables = oldtables.filter(
        (table) => table.id !== action.table.id
      );
      return {
        ...state,
        tables: [...newTables, action.table],
      };
    case DELETE_TABLE:
      const updatedTables = state.tables.filter(
        (table) => table.id !== action.id
      );
      return {
        ...state,
        tables: updatedTables,
      };
    default:
      return state;
  }
};
