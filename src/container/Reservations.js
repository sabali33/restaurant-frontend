import React, { useState, useEffect, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector, useDispatch } from "react-redux";
import { getTableReservationsAction } from "../Actions/Reservations";
import { getTablesAction } from "../Actions/Table";
import Grid from "../Components/Grid";
import { LayoutWithNav } from "../Components/Layout";
import LoginSignup from "../Components/LoginSignup";
import CreateRestaurantForm from "./CreateRestaurantForm";
import TableReservations from "./TableReservations";

const Reservations = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [error, setError] = useState(null);
  const tables = useSelector((state) => state.tables.tables);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const selectedReservationHandler = (id, data) => {
    if (!data) {
      setError("There are no seats available");
      return;
    }
    setSelectedTable(data);
  };
  const getTables = useCallback(async () => {
    try {
      await dispatch(getTablesAction());
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }, [dispatch]);
  useEffect(() => {
    getTables();
  }, [getTables]);
  //check for authentication
  if (!user.token) {
    return <LoginSignup />;
  }
  if (!user.user.store) {
    return <CreateRestaurantForm />;
  }
  const filterReservations = async (arg) => {
    if (!selectedTable) {
      return;
    }
    try {
      await dispatch(
        getTableReservationsAction({ sort: arg, table_id: selectedTable.id })
      );
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };
  const backHere = () => {
    setSelectedTable(null);
    setError("");
  };

  if (selectedTable) {
    return (
      <TableReservations
        table={selectedTable}
        onFilterReservations={filterReservations}
        onBackHere={backHere}
      />
    );
  }

  const editReservation = () => {};
  return (
    <LayoutWithNav activeTab={"reservations"}>
      <DndProvider backend={HTML5Backend}>
        <div>
          {error && <div className="text-red-400">{error}</div>}
          <Grid
            columns={15}
            rows={10}
            data={tables}
            addData={selectedReservationHandler}
            editingMode={false}
            editData={editReservation}
          />
        </div>
      </DndProvider>
    </LayoutWithNav>
  );
};

export default Reservations;
