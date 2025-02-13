import { Card, Button, Col, Stack } from "react-bootstrap";
import { FaMapMarkerAlt, FaSyncAlt } from "react-icons/fa";
export const PackageCard = ({
  pkg,
  getStatusBadge,
  setSelectedPackage,
  setShowStatusModal,
  setShowLocationModal,
}) => {
  return (
    <Col md={6} lg={4} className="d-flex justify-content-center">
      <Card className="shadow-sm p-3 mb-4" style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>Package #{pkg.id}</Card.Title>
          <Stack direction="horizontal" gap={3}>
            <Card.Text className="mb-0">
              <strong>From:</strong> {pkg.sender} ({pkg.source})
            </Card.Text>
            <Card.Text className="mb-0">
              <strong>To:</strong> {pkg.receiver} ({pkg.destination})
            </Card.Text>
          </Stack>
          <Card.Text className="mt-2">
            <strong>Current Location:</strong> {pkg.location}
          </Card.Text>
          {getStatusBadge(pkg.status)}
          <div className="mt-3">
            <Button
              variant="outline-primary"
              className="me-2"
              disabled={
                pkg.status === "Cancelled" || pkg.status === "Delivered"
              }
              onClick={() => {
                setSelectedPackage(pkg);
                setShowStatusModal(true);
              }}
            >
              <FaSyncAlt /> Update Status
            </Button>
            <Button
              variant="outline-secondary"
              disabled={
                pkg.status === "Cancelled" || pkg.status === "Delivered"
              }
              onClick={() => {
                setSelectedPackage(pkg);
                setShowLocationModal(true);
              }}
            >
              <FaMapMarkerAlt /> Update Location
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
