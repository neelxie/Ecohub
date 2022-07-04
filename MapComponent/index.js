import { GoogleMap, MarkerF } from "@react-google-maps/api";

const center = {
  lat: 0.32219903018220497,
  lng: 32.59106383073049,
};

function Map({ markers }) {
  return (
    <GoogleMap
      mapContainerStyle={{
        height: "100%",
        width: "100%",
      }}
      zoom={13}
      center={center}
    >
      {markers.map((mark) => (
        <MarkerF key={mark.key} position={mark.location} icon={mark.icon} />
      ))}
    </GoogleMap>
  );
}
export default Map;
