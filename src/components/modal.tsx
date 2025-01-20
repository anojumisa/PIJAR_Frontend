import React from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-10 max-w-md mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Oops...</h2>
          <div className="text-gray-700 mb-6">{children}</div>
          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
