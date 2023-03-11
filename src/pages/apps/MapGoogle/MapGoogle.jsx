import React, {useCallback} from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import key from './keyAPI_example'
import cl from './MapGoogle.module.css'

const containerStyle = {
    width: '100%',
    height: '100%'
};
const center = {
    lat: -3.745,
    lng: -38.523
};

const libraries = ['places']

const MapGoogle = () => {
    const mapRef = React.useRef(undefined);

    const onLoad = useCallback(function callback(map){
        mapRef.current = map;
    }, [])

    const onUnmount = useCallback(function callback(map){
        mapRef.current = undefined;
    }, [])

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: key,
        libraries
      })

    return isLoaded ? (
        <div className={cl.container}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
            </GoogleMap>
        </div>
    ) : <h2>loading</h2>
}

export default React.memo(MapGoogle)