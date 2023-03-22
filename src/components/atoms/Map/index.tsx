import { GoogleMap, LoadScriptNext, MarkerF } from "@react-google-maps/api";
import React, { useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import GeoCode from "@/lib/Google-geocode";

const Wrapper = styled.div`
  .map-container {
    width: 100%;
    height: 540px;
  }
`;

const Map = ({ address }: any) => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    GeoCode(address).then((res) => {
      setLocation({
        lat: res?.lat,
        lng: res?.lng,
      });
    });
  }, [address]);

  const defaultCenter: any = {
    lat: location ? location.lat : 0.0,
    lng: location ? location.lng : 0.0,
  };
  const defaultZoom = 16;

  return (
    <Wrapper>
      <LoadScriptNext
        googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
      >
        <GoogleMap
          clickableIcons={true}
          zoom={defaultZoom}
          center={defaultCenter}
          mapContainerClassName="map-container"
        >
          <MarkerF position={defaultCenter} />
        </GoogleMap>
      </LoadScriptNext>
    </Wrapper>
  );
};

export default Map;
