import { useState } from "react";
import { usePackages } from "../context/PackageContext";
import { Modal, Button, Form } from "react-bootstrap";

export const UpdateLocationModal = ({ show, handleClose, pkg }) => {
  const { updatePackageLocation } = usePackages();
  const [location, setLocation] = useState(pkg.location);

  const handleSubmit = () => {
    updatePackageLocation(pkg.id, location);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Location</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          className="mb-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="New Location"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleSubmit}>
          Save
        </Button>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
