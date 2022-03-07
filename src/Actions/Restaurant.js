import config from "../config";
import { prepareRequestPayload } from "../Utils";
export const CREATE_RESTAURANT = "CREATE_RESTAURANT";

export const CreateRestaurantAction = (name) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.auth.token;
    const requestOptions = prepareRequestPayload(
      token.token,
      "POST",
      JSON.stringify({ name })
    );
    const response = await fetch(`${config.apiRoot}restaurant`, requestOptions);
    const restaurant = await response.json();
    if (restaurant.error) {
      throw new Error(restaurant.message);
    }
    return dispatch({
      type: CREATE_RESTAURANT,
      restaurant: restaurant,
    });
  };
};
