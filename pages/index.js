import Head from "next/head";
import { useLoadScript } from "@react-google-maps/api";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Map from "./Map";
import { redMarker, addIconAttribute } from "./utils";

export default function Home({ data: { organisations } }) {
  {/* Set intial markers state from props*/}
  const [markers, setMarkers] = useState(() => addIconAttribute(organisations));

  const handleClick = (organisation) => {
    setMarkers((prevState) => {
      const newState = prevState.map((marker) => {
        if (organisation.key === marker.key) {
          return { ...marker, icon: redMarker };
        }
        return marker;
      });

      return newState;
    });
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Eco Hub</title>
        <meta name="description" content="Ecohub Organisations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* The key below is for the React diffing algorithm so the props
         changes can be not just seen but rendered */}
        <Map markers={markers} key={JSON.stringify(markers)} />
        <div className={styles.Panel}>
          <div className={styles.PanelHead}>Organisations</div>
          <div>
            {organisations.map((organisation) => (
              <div
                className={styles.Organisation}
                key={organisation.key}
                onClick={() => handleClick(organisation)}
              >
                {organisation.organisationName}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// Get staticprops from data.json
export const getStaticProps = async () => {
  const data = (await import("./api/data.json")).default;
  return {
    props: { data },
  };
};
