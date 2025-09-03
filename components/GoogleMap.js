import styles from "../styles/googlemap.module.css"

export default function Map() {
  return (
    <div className={styles.mapCard}>
      <div className={styles.mapWrapper}>
        <iframe
          className={styles.iframe}
          src="https://www.google.com/maps/embed?pb=GWF8+G95"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location"
        ></iframe>
      </div>
    </div>
  );
}




// // components/GoogleMap.js
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// export default function Map() {
//   const center = { lat: 6.5244, lng: 3.3792 }; // Example: Lagos

//   return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
//       <GoogleMap
//         mapContainerStyle={{ width: "100%", height: "400px" }}
//         center={center}
//         zoom={12}
//       >
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// }
