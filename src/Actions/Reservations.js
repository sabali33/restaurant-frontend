import config from "../config";
import { parseQueryArgs, prepareRequestPayload } from "../Utils";
export const GET_RESERVATION = "GET_RESERVATION";
export const GET_RESERVATIONS = "GET_RESERVATIONS";
export const CREATE_RESERVATION = "CREATE  _RESERVATION";
export const DELETE_RESERVATION = "DELETE  _RESERVATION";
export const UPDATE_RESERVATION = "UPDATE  _RESERVATION";

export const getTableReservationsAction = (options) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;

    const restaurant = getState().auth.user.store;
    const requestOptions = prepareRequestPayload(token.token);
    options.restaurant_id = restaurant.id;
    const query = parseQueryArgs(options);
    const response = await fetch(
      `${config.apiRoot}reservations${query}`,
      requestOptions
    );
    const tableReservations = await response.json();
    if (tableReservations.error) {
      throw new Error(tableReservations.message);
    }
    return dispatch({
      type: GET_RESERVATION,
      tableReservations,
    });
  };
};

export const createReservationAction = (data) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const restaurant = getState().auth.user.store;
    const body = JSON.stringify({
      customer_name: data.customer_name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      date: data.date.toISOString().split("T")[0],
      time: data.time,
      table_id: data.tableId,
      restaurant_id: restaurant.id,
    });
    const requestOptions = prepareRequestPayload(token.token, "POST", body);
    const response = await fetch(
      `${config.apiRoot}reservation`,
      requestOptions
    );
    const reservation = await response.json();
    if (reservation.error) {
      throw new Error(reservation.message);
    }
    return dispatch({
      type: CREATE_RESERVATION,
      reservation,
    });
  };
};
export const getReservationsAction = (options) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const restaurant = getState().auth.user.store;

    options.restaurant_id = restaurant.id;
    const query = parseQueryArgs(options);
    const requestOptions = prepareRequestPayload(token.token);
    const response = await fetch(
      `${config.apiRoot}reservations${query}`,
      requestOptions
    );
    const reservations = await response.json();
    if (reservations.error) {
      throw new Error(reservations.message);
    }
    return dispatch({
      type: GET_RESERVATIONS,
      reservations,
    });
  };
};

export const deleteReservationsAction = (id) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const requestOptions = prepareRequestPayload(token.token, "DELETE");
    const response = await fetch(
      `${config.apiRoot}reservation/${id}`,
      requestOptions
    );
    const reservation = await response.json();
    if (reservation.error) {
      throw new Error(reservation.message);
    }
    return dispatch({
      type: DELETE_RESERVATION,
      reservation_id: id,
    });
  };
};
export const updateReservationsAction = (id, data) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const body = JSON.stringify({
      ...data,
      date: new Date(data.date).toISOString().split("T")[0],
    });
    const requestOptions = prepareRequestPayload(token.token, "PUT", body);
    const response = await fetch(
      `${config.apiRoot}reservation/${id}`,
      requestOptions
    );
    const reservation = await response.json();
    if (reservation.error) {
      throw new Error(reservation.message);
    }
    return dispatch({
      type: UPDATE_RESERVATION,
      reservation,
    });
  };
};

export const moveTableReservationsAction = (oldTable, newTable) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const body = JSON.stringify({
      oldTable,
      newTable,
    });
    const requestOptions = prepareRequestPayload(token.token, "PUT", body);
    const response = await fetch(
      `${config.apiRoot}reservation/move`,
      requestOptions
    );
    const reservation = await response.json();
    if (reservation.error) {
      throw new Error(reservation.message);
    }
    return reservation;
  };
};
