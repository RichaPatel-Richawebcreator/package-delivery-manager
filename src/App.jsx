import { useState } from "react";
import { PackageProvider } from "./context/PackageContext";
import { PackageList } from "./components/PackageList";
import { AddPackageModal } from "./components/AddPackageModal";
import { Button, Container } from "react-bootstrap";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <PackageProvider>
      <Container className="d-flex flex-column min-vh-100 mt-5">
        <div className="d-flex justify-content-between">
          <h2 className="text-center mb-4">Package Tracking System</h2>
          <Button
            variant="primary"
            className="mb-3"
            onClick={() => setShowModal(true)}
          >
            Add New Package
          </Button>
        </div>
        <PackageList />
        <AddPackageModal
          show={showModal}
          handleClose={() => setShowModal(false)}
        />
      </Container>
    </PackageProvider>
  );
}

export default App;
