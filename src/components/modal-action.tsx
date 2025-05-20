import React from "react";

interface ModalActionProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  isSuccess: boolean;
}

const ModalAction: React.FC<ModalActionProps> = ({
  isOpen,
  onClose,
  message,
  isSuccess,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={overlayStyle}>
      <div className="modal-content" style={contentStyle}>
        <h2 style={{ color: isSuccess ? "green" : "red" }}>
          {isSuccess ? "Success" : "Failure"}
        </h2>
        <p>{message}</p>
        <button onClick={onClose} style={buttonStyle}>
          Close
        </button>
      </div>
    </div>
  );
};

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const contentStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const buttonStyle: React.CSSProperties = {
  marginTop: "15px",
  padding: "10px 20px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default ModalAction;
