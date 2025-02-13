import { createContext, useContext, useState } from "react";

const PackageContext = createContext();

export const PackageProvider = ({ children }) => {
  const [packages, setPackages] = useState([
    {
      id: 123,
      sender: "Smith",
      receiver: "John",
      source: "Vadodara",
      destination: "Bangalore",
      status: "Shipped",
      location: "Vadodara",
    },
    {
      id: 986,
      sender: "Victor",
      receiver: "Brian",
      source: "Delhi",
      destination: "Mumbai",
      status: "In-Transit",
      location: "Delhi",
    },
    {
      id: 423,
      sender: "Jennifer",
      receiver: "Harry",
      source: "Kolkata",
      destination: "Chennai",
      status: "Delivered",
      location: "Chennai",
    },
  ]);

  const addPackage = (newPackage) =>
    setPackages([...packages, { id: Date.now(), ...newPackage }]);

  const updatePackageStatus = (id, status, location) => {
    setPackages(
      packages.map((pkg) =>
        pkg.id === id ? { ...pkg, status, location } : pkg
      )
    );
  };

  const updatePackageLocation = (id, location) => {
    setPackages(
      packages.map((pkg) => (pkg.id === id ? { ...pkg, location } : pkg))
    );
  };

  return (
    <PackageContext.Provider
      value={{
        packages,
        addPackage,
        updatePackageStatus,
        updatePackageLocation,
      }}
    >
      {children}
    </PackageContext.Provider>
  );
};

export const usePackages = () => useContext(PackageContext);
