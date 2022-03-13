import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MainApp from "./container/MainApp";
import { logoutAction } from "./Actions/Auth";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Reservations from "./container/Reservations";
import Tables from "./container/Tables";
import { RequireAuth } from "./container/RequireAuth";
import TableReservations from "./container/TableReservations";

function App() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logouthandler = (e) => {
    e.preventDefault();
    e.persist();
    dispatch(logoutAction());
  };

  return (
    <Router>
      <div className="App pt-10">
        <header className="App-header mb-10 mx-auto container text-center">
          <div className="flex justify-items-start">
            <div className="w-1/3 text-left pl-4 lg:pl-0">
              <Link
                className="font-extrabold text-4xl"
                to="/"
                rel="noopener noreferrer"
              >
                Restaurant{" "}
                <span className="text-yellow-200 px-2 bg-gray-600 rounded">
                  App
                </span>
              </Link>
            </div>
            <div className="w-2/3 text-right">
              {user.token && (
                <span className="text-gray-500 font-bold">
                  {" "}
                  {`${user.user.first_name} ${user.user.last_name}`}
                  <Link
                    to="/"
                    className="text-red-400  ml-4"
                    onClick={logouthandler}
                  >
                    Logout
                  </Link>
                </span>
              )}
            </div>
          </div>
        </header>

        <main className="container mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <MainApp />
                </RequireAuth>
              }
            />

            <Route
              path="/reservations"
              element={
                <RequireAuth>
                  <Reservations />
                </RequireAuth>
              }
            />

            <Route
              path="/tables"
              element={
                <RequireAuth>
                  <Tables />
                </RequireAuth>
              }
            />
            <Route
              path="/reservations/:id"
              element={
                <RequireAuth>
                  <TableReservations />
                </RequireAuth>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
