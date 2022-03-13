import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteReservationsAction,
  getTableReservationsAction,
} from "../Actions/Reservations";
import ReservationFilter from "./ReservationFilter";
import ReservationForm from "./ReservationForm";
import ReservationListItem from "../Components/ReservationListItem";
import Modal from "./Modal";
import { Link, useParams } from "react-router-dom";
import { getTableAction } from "../Actions/Table";
import { LayoutWithNav } from "../Components/Layout";

const TableReservations = (props) => {
  const navParams = useParams();

  const tableReservations = useSelector(
    (state) => state.reservations.tableReservations
  );

  const [showReservationForm, setShowReservationForm] = useState(false);
  const [editingReservation, setEditingReservation] = useState({});
  const [error, setError] = useState("");
  const viewedTable = useSelector((state) => state.tables.viewedTable);

  const dispatch = useDispatch();
  const { id } = navParams;
  const getTableReservations = useCallback(async () => {
    try {
      await dispatch(
        getTableReservationsAction({ table_id: id, sort: "future" })
      );
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }, [dispatch, id]);
  const getTable = useCallback(async () => {
    try {
      await dispatch(getTableAction(id));
    } catch (err) {
      setError(err.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    getTableReservations();
    getTable();
  }, [getTableReservations, getTable]);

  const deleteReservation = async (reservation_id) => {
    try {
      await dispatch(deleteReservationsAction(reservation_id));
    } catch (err) {
      console.log(err);
    }
  };
  const filterReservations = useCallback(
    async (arg) => {
      if (!viewedTable) {
        return;
      }
      try {
        await dispatch(
          getTableReservationsAction({ sort: arg, table_id: viewedTable.id })
        );
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [viewedTable]
  );
  const showReservationEditForm = (reservation) => {
    setEditingReservation({
      customer_name: reservation.customer_name,
      email: reservation.email,
      address: reservation.address,
      phone: reservation.phone,
      id: reservation.id,
      date: reservation.date,
      time: reservation.time,
      table_id: reservation.table_id,
    });
    setShowReservationForm(true);
  };
  const ReservationList = () => {
    return tableReservations.map((reservation) => {
      return (
        <ReservationListItem
          key={reservation.id}
          {...reservation}
          onDeleteReservation={deleteReservation}
          onShowReservationEditForm={showReservationEditForm}
        />
      );
    });
  };
  const showReservationFormHandler = () => {
    setShowReservationForm(true);
    if (!!editingReservation) {
      setEditingReservation({});
    }
  };
  const closeFormModal = () => {
    setShowReservationForm(false);
  };

  return (
    <LayoutWithNav activeTab={"reservations"}>
      <div className="ml-8">
        {error && <div className="text-red-400">{error}</div>}
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-10 mt-8 lg:mt-0">
            Reservations for table #{id}
          </h1>
          <div className="my-4">
            <Link
              to="/reservations"
              className="px-4 py-2 border border-gray-400 rounded"
            >
              Back to Reservations
            </Link>
          </div>
          <ReservationFilter
            onFilterReservations={filterReservations}
            onShowReservationFormHandler={showReservationFormHandler}
          />
        </header>
        <section className="mt-8">
          {tableReservations.length > 0 ? (
            ReservationList()
          ) : (
            <span className="mx-auto text-gray-500">No Reservations </span>
          )}
          {
            <Modal
              open={showReservationForm}
              onClose={() => setShowReservationForm(false)}
            >
              <ReservationForm
                table={viewedTable}
                closeFormModal={closeFormModal}
                reservation={editingReservation}
                reservations={tableReservations}
              />
            </Modal>
          }
        </section>
      </div>
    </LayoutWithNav>
  );
};

export default TableReservations;
