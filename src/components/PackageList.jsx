import { useState } from "react";
import { usePackages } from "../context/PackageContext";
import { UpdateStatusModal } from "./UpdateStatusModal";
import { UpdateLocationModal } from "./UpdateLocationModal";
import { Row, Badge, Container } from "react-bootstrap";
import {
  FaShippingFast,
  FaTruckMoving,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { PackageCard } from "./PackageCard";

export const PackageList = () => {
  const { packages } = usePackages();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Shipped":
        return (
          <Badge pill bg="warning" className="customBadge">
            <FaShippingFast /> Shipped
          </Badge>
        );
      case "In-Transit":
        return (
          <Badge pill bg="info" className="customBadge">
            <FaTruckMoving /> In-Transit
          </Badge>
        );
      case "Delivered":
        return (
          <Badge pill bg="success" className="customBadge">
            <FaCheckCircle /> Delivered
          </Badge>
        );
      case "Cancelled":
        return (
          <Badge bg="danger">
            <FaTimesCircle /> Cancelled
          </Badge>
        );
      default:
        return (
          <Badge pill bg="secondary">
            Unknown
          </Badge>
        );
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center mt-3">
      <h4 className="text-center my-5 text-decoration-underline">
        📦 Package List
      </h4>
      <Row className="justify-content-center w-100">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            getStatusBadge={getStatusBadge}
            setSelectedPackage={setSelectedPackage}
            setShowStatusModal={setShowStatusModal}
            setShowLocationModal={setShowLocationModal}
          />
        ))}
      </Row>

      {selectedPackage && (
        <>
          <UpdateStatusModal
            show={showStatusModal}
            handleClose={() => setShowStatusModal(false)}
            pkg={selectedPackage}
          />
          <UpdateLocationModal
            show={showLocationModal}
            handleClose={() => setShowLocationModal(false)}
            pkg={selectedPackage}
          />
        </>
      )}
    </Container>
  );
};
