import ReactDOM from "react-dom";

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80" />
      <div className="fixed inset-0 p-10">
        <button
          className="px-5 py-2 bg-red-400 text-white rounded"
          onClick={onClose}
        >
          {" "}
          close
        </button>
        {children}
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
