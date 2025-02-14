import { useState } from "react";
import { usePackages } from "../context/PackageContext";
import { Modal, Button, Form } from "react-bootstrap";

export const UpdateStatusModal = ({ show, handleClose, pkg }) => {
  const { updatePackageStatus } = usePackages();
  const [status, setStatus] = useState(pkg.status);

  const handleSubmit = () => {
    updatePackageStatus(pkg.id, status);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Select
          className="mb-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Shipped</option>
          <option>In-Transit</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success modelBtn" onClick={handleSubmit}>
          Save
        </Button>
        <Button variant="outline-danger modelBtn" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
