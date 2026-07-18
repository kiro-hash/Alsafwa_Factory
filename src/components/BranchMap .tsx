import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import branches from "../Data/Branches.js";

const BranchMap = () => {
  return (
    <MapContainer
      center={[30.8, 30.8]}
      zoom={7}
      style={{
        width: "90%",
        height: "80vh",
        borderRadius: "20px",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {branches.map((branch) => (
        <Marker key={branch.id} position={branch.position}>
          <Popup>
            <h3>{branch.title}</h3>

            {branch.phones?.map((phone) => (
              <p key={phone}>📞 {phone}</p>
            ))}

            {branch.telephone && (
              <p>☎ {branch.telephone}</p>
            )}

            {branch.fax && <p>📠 {branch.fax}</p>}

            {branch.email && <p>✉ {branch.email}</p>}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default BranchMap;
