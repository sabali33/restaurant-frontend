"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveTableReservationsAction = exports.updateReservationsAction = exports.deleteReservationsAction = exports.getReservationsAction = exports.createReservationAction = exports.getTableReservationsAction = exports.UPDATE_RESERVATION = exports.DELETE_RESERVATION = exports.CREATE_RESERVATION = exports.GET_RESERVATIONS = exports.GET_RESERVATION = void 0;

var _config = _interopRequireDefault(require("../config"));

var _Utils = require("../Utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GET_RESERVATION = "GET_RESERVATION";
exports.GET_RESERVATION = GET_RESERVATION;
var GET_RESERVATIONS = "GET_RESERVATIONS";
exports.GET_RESERVATIONS = GET_RESERVATIONS;
var CREATE_RESERVATION = "CREATE  _RESERVATION";
exports.CREATE_RESERVATION = CREATE_RESERVATION;
var DELETE_RESERVATION = "DELETE  _RESERVATION";
exports.DELETE_RESERVATION = DELETE_RESERVATION;
var UPDATE_RESERVATION = "UPDATE  _RESERVATION";
exports.UPDATE_RESERVATION = UPDATE_RESERVATION;

var getTableReservationsAction = function getTableReservationsAction(options) {
  return function _callee(dispatch, getState) {
    var token, restaurant, query, response, tableReservations;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = getState().auth.token;
            restaurant = getState().auth.user.store;
            options.restaurant_id = restaurant.id;
            query = (0, _Utils.parseQueryArgs)(options);
            _context.next = 6;
            return regeneratorRuntime.awrap(fetch("".concat(_config["default"].apiRoot, "reservations").concat(query), {
              headers: {
                Authorization: "Bearer ".concat(token.token)
              }
            }));

          case 6:
            response = _context.sent;
            _context.next = 9;
            return regeneratorRuntime.awrap(response.json());

          case 9:
            tableReservations = _context.sent;

            if (!tableReservations.error) {
              _context.next = 12;
              break;
            }

            throw new Error(tableReservations.message);

          case 12:
            return _context.abrupt("return", dispatch({
              type: GET_RESERVATION,
              tableReservations: tableReservations
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.getTableReservationsAction = getTableReservationsAction;

var createReservationAction = function createReservationAction(data) {
  return function _callee2(dispatch, getState) {
    var token, restaurant, response, reservation;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = getState().auth.token;
            restaurant = getState().auth.user.store;
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_config["default"].apiRoot, "reservation"), {
              method: "POST",
              headers: {
                'Content-type': 'application/json',
                Authorization: "Bearer ".concat(token.token)
              },
              body: JSON.stringify({
                customer_name: data.customer_name,
                email: data.email,
                phone: data.phone,
                address: data.address,
                date: data.date.toISOString().split('T')[0],
                time: data.time,
                table_id: data.tableId,
                restaurant_id: restaurant.id
              })
            }));

          case 4:
            response = _context2.sent;
            _context2.next = 7;
            return regeneratorRuntime.awrap(response.json());

          case 7:
            reservation = _context2.sent;

            if (!reservation.error) {
              _context2.next = 10;
              break;
            }

            throw new Error(reservation.message);

          case 10:
            return _context2.abrupt("return", dispatch({
              type: CREATE_RESERVATION,
              reservation: reservation
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.createReservationAction = createReservationAction;

var getReservationsAction = function getReservationsAction(options) {
  return function _callee3(dispatch, getState) {
    var token, restaurant, query, response, reservations;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = getState().auth.token;
            restaurant = getState().auth.user.store;
            options.restaurant_id = restaurant.id;
            query = (0, _Utils.parseQueryArgs)(options);
            _context3.next = 6;
            return regeneratorRuntime.awrap(fetch("".concat(_config["default"].apiRoot, "reservations").concat(query), {
              headers: {
                Authorization: "Bearer ".concat(token.token)
              }
            }));

          case 6:
            response = _context3.sent;
            _context3.next = 9;
            return regeneratorRuntime.awrap(response.json());

          case 9:
            reservations = _context3.sent;

            if (!reservations.error) {
              _context3.next = 12;
              break;
            }

            throw new Error(reservations.message);

          case 12:
            return _context3.abrupt("return", dispatch({
              type: GET_RESERVATIONS,
              reservations: reservations
            }));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.getReservationsAction = getReservationsAction;

var deleteReservationsAction = function deleteReservationsAction(id) {
  return function _callee4(dispatch, getState) {
    var token, response, reservation;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            token = getState().auth.token;
            _context4.next = 3;
            return regeneratorRuntime.awrap(fetch("".concat(_config["default"].apiRoot, "reservation/").concat(id), {
              headers: {
                Authorization: "Bearer ".concat(token.token)
              },
              method: "DELETE"
            }));

          case 3:
            response = _context4.sent;
            _context4.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            reservation = _context4.sent;

            if (!reservation.error) {
              _context4.next = 9;
              break;
            }

            throw new Error(reservation.message);

          case 9:
            return _context4.abrupt("return", dispatch({
              type: DELETE_RESERVATION,
              reservation_id: id
            }));

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    });
  };
};

exports.deleteReservationsAction = deleteReservationsAction;

var updateReservationsAction = function updateReservationsAction(id, data) {
  return function _callee5(dispatch, getState) {
    var token, response, reservation;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            token = getState().auth.token;
            _context5.next = 3;
            return regeneratorRuntime.awrap(fetch("".concat(_config["default"].apiRoot, "reservation/").concat(id), {
              headers: {
                Authorization: "Bearer ".concat(token.token),
                'Content-type': 'application/json'
              },
              method: "PUT",
              body: JSON.stringify(_objectSpread({}, data, {
                date: new Date(data.date).toISOString().split('T')[0]
              }))
            }));

          case 3:
            response = _context5.sent;
            _context5.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            reservation = _context5.sent;

            if (!reservation.error) {
              _context5.next = 9;
              break;
            }

            throw new Error(reservation.message);

          case 9:
            return _context5.abrupt("return", dispatch({
              type: UPDATE_RESERVATION,
              reservation: reservation
            }));

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    });
  };
};

exports.updateReservationsAction = updateReservationsAction;

var moveTableReservationsAction = function moveTableReservationsAction(old_table_id, new_table_id) {};

exports.moveTableReservationsAction = moveTableReservationsAction;