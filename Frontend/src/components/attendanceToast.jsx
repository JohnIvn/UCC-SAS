import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const AttendanceToastNotif = ({
  show,
  onClose,
  message,
  variant = "success",
}) => {
  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast show={show} onClose={onClose} bg={variant} delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default AttendanceToastNotif;
