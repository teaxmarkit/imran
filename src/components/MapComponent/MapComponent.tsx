import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center:{lng:number,lat:number} = {
  lng: -13.22992,
  lat: 8.483802
};

export const CustomMapComponent =()=>{

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC1naZC-IWN404rSFT5moe0Xr1TBGSLcto"
  })
  console.log(isLoaded);

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ):<div>
    <h1>Loading...</h1>
  </div>
}

