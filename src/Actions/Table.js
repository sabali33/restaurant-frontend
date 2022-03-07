import config from "../config";
import { prepareRequestPayload } from "../Utils";

export const GET_TABLES = "GET_TABLES";
export const CREATE_TABLE = "CREATE_TABLE";
export const UPDATE_TABLE = "UPDATE_TABLE";
export const DELETE_TABLE = "DELETE_TABLE";

export const getTablesAction = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const restaurant = getState().auth.user.store;
    const requestOptions = prepareRequestPayload(token.token);
    const response = await fetch(
      `${config.apiRoot}tables?restaurant_id=${restaurant.id}`,
      requestOptions
    );
    const tables = await response.json();
    if (tables.error) {
      throw new Error(tables.message);
    }
    return dispatch({
      type: GET_TABLES,
      tables,
    });
  };
};

export const createTableAction = (id, numberOfSeats) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const restaurant = getState().auth.user.store;
    const requestOptions = prepareRequestPayload(
      token.token,
      "POST",
      JSON.stringify({
        id,
        numberOfSeats: numberOfSeats,
        restaurantId: restaurant.id,
      })
    );
    const response = await fetch(`${config.apiRoot}table`, requestOptions);
    const table = await response.json();

    if (table.error) {
      throw new Error(table.message);
    }
    return dispatch({
      type: CREATE_TABLE,
      table: table,
    });
  };
};
export const updateTableAction = (id, numberOfSeats) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const restaurant = getState().auth.user.store;
    const requestOptions = prepareRequestPayload(
      token.token,
      "PUT",
      JSON.stringify({
        id,
        numberOfSeats: numberOfSeats,
        restaurantId: restaurant.id,
      })
    );
    const response = await fetch(
      `${config.apiRoot}table/${id}`,
      requestOptions
    );
    const table = await response.json();

    if (table.error) {
      throw new Error(table.message);
    }
    return dispatch({
      type: UPDATE_TABLE,
      table: {
        id,
        number_of_seats: numberOfSeats,
        restaurantId: restaurant.id,
      },
    });
  };
};
export const deleteTableAction = (id) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const requestOptions = prepareRequestPayload(token.token, "DELETE");
    const response = await fetch(
      `${config.apiRoot}table/${id}`,
      requestOptions
    );
    const deleted = response.json();
    if (deleted.error) {
      throw new Error("Couldn't delete table");
    }
    return dispatch({
      type: DELETE_TABLE,
      id: id,
    });
  };
};
