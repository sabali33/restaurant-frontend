import React, { useState, useEffect, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector, useDispatch } from "react-redux";
import { getTablesAction } from "../Actions/Table";
import Grid from "../Components/Grid";
import { LayoutWithNav } from "../Components/Layout";

const Reservations = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [error, setError] = useState(null);
  const tables = useSelector((state) => state.tables.tables);
  const dispatch = useDispatch();
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
