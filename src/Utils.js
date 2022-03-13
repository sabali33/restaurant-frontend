export const isEmail = (emailAddress) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    emailAddress
  );
};
export const parseQueryArgs = (options) => {
  if (!options || typeof options !== "object") {
    return "";
  }
  let query = "";
  for (let key in options) {
    query += query ? `&${key}=${options[key]}` : `?${key}=${options[key]}`;
  }
  return query;
};
/**
 *
 * @param {string} token
 * @param {string} method
 * @param {string} body
 * @returns
 */
export const prepareRequestPayload = (token, method = "GET", body = null) => {
  const requestOptions = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method,
  };
  if (body) {
    requestOptions.body = body;
  }
  return requestOptions;
};
