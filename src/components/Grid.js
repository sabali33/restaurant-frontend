import React, { useCallback } from "react";
import Cell from "../container/Cell";
import AddTableForm from "../container/AddTableForm";
import Modal from "../container/Modal";

const Grid = (props) => {
  const { data, editingTable } = props;
  const findTable = useCallback(
    (table_id) => {
      return data.find((table) => table_id === table.id);
    },
    [data]
  );
  const cellsWithTables = () => {
    return props.data ? props.data.map((table) => table.id) : [];
  };

  const cells = {};
  let cell_id = 1;
  for (let i = 1; i <= props.rows; i++) {
    cells[i] = cells[i] !== undefined ? cells[i] : [];
    for (let k = 1; k <= props.columns; k++) {
      const data = cellsWithTables().includes(cell_id)
        ? findTable(cell_id)
        : null;
      cells[i].push(
        <Cell
          key={cell_id}
          id={cell_id}
          data={data}
          editingMode={props.editingMode}
          onAdd={props.addData}
          onEdit={props.editData}
        />
      );
      cell_id++;
    }
  }
  const cells_arr = [];
  for (let row in cells) {
    cells_arr.push(
      <div
        className="flex flex-wrap lg:flex-nowrap lg:last:border-b border-gray-300"
        key={row}
      >
        {cells[row]}
      </div>
    );
  }
  const foundTable = findTable(editingTable);

  return (
    <div className="relative">
      {cells_arr}
      {props.editingMode && props.editingTable && (
        <Modal open={!!props.editingTable} onClose={props.closeEditingModal}>
          <AddTableForm
            id={props.editingTable}
            table={foundTable}
            onCloseEditingModal={props.closeEditingModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default Grid;
