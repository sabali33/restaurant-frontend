import React from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

const Navigation = (props) => {
  return (
    <ul className="flex flex-col p-8 rounded bg-gray-300">
      <li
        className={
          props.activeTab === "dashboard"
            ? `text-base cursor-pointer py-4 border-b-2 border-gray-700 rounded`
            : "text-gray-800 text-base cursor-pointer py-4 border-gray-700"
        }
      >
        <Link to="/">
          <i className="icon-dashboard"></i>
          <span className="pl-4"> Dashboard </span>
        </Link>
      </li>
      <li
        className={
          props.activeTab === "tables"
            ? `text-base cursor-pointer py-4 border-b-2 border-gray-700 rounded`
            : "text-gray-800text-base cursor-pointer py-4 border-gray-700"
        }
      >
        <Link to="/tables">
          <i className="icon-table"></i>
          <span className="pl-4"> Tables </span>
        </Link>
      </li>
      <li
        className={
          props.activeTab === "reservations"
            ? `text-base cursor-pointer py-4 border-b-2 border-gray-700 rounded `
            : "text-gray-800 text-base cursor-pointer py-4 border-gray-700"
        }
      >
        <Link to="/reservations">
          <i className="icon-table"></i>
          <span className="pl-4"> Reservations</span>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
