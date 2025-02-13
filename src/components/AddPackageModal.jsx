import { useState, useEffect } from "react";
import { usePackages } from "../context/PackageContext";
import { Modal, Button, Form } from "react-bootstrap";

export const AddPackageModal = ({ show, handleClose }) => {
  const { addPackage } = usePackages();
  const [formData, setFormData] = useState({
    sender: "",
    receiver: "",
    source: "",
    destination: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!show) {
      setFormData({ sender: "", receiver: "", source: "", destination: "" });
      setErrors({});
    }
  }, [show]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.sender.trim()) newErrors.sender = "Sender Name is required";
    if (!formData.receiver.trim())
      newErrors.receiver = "Receiver Name is required";
    if (!formData.source.trim())
      newErrors.source = "Source Location is required";
    if (!formData.destination.trim())
      newErrors.destination = "Destination Location is required";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    addPackage({
      ...formData,
      status: "Shipped",
      location: formData.source,
    });

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">Add New Package</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-2">
            <Form.Control
              name="sender"
              placeholder="Sender Name"
              value={formData.sender}
              onChange={handleChange}
              isInvalid={!!errors.sender}
            />
            <Form.Control.Feedback type="invalid">
              {errors.sender}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control
              name="receiver"
              placeholder="Receiver Name"
              value={formData.receiver}
              onChange={handleChange}
              isInvalid={!!errors.receiver}
            />
            <Form.Control.Feedback type="invalid">
              {errors.receiver}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control
              name="source"
              placeholder="Source Location"
              value={formData.source}
              onChange={handleChange}
              isInvalid={!!errors.source}
            />
            <Form.Control.Feedback type="invalid">
              {errors.source}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control
              name="destination"
              placeholder="Destination Location"
              value={formData.destination}
              onChange={handleChange}
              isInvalid={!!errors.destination}
            />
            <Form.Control.Feedback type="invalid">
              {errors.destination}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
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
