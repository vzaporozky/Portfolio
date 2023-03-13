import React, {useCallback} from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import key from './keyAPI_example'
// import key from './keyAPI' // <<<<< uncommit this line if you have keyAPI 
import cl from './MapGoogle.module.css'
import {theme} from './theme.js'

const containerStyle = {
    width: '100%',
    height: '100%'
};
const center = {
    lat: -3.745,
    lng: -38.523
};

const libraries = ['places'];

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    styles: theme
};

const MapGoogle = () => {
    console.log(theme)
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

    return key !== 'YOUR_KEY' ? isLoaded ? (
        <div className={cl.container}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
            </GoogleMap>
        </div>
    ) : <h2>loading</h2>
    :   <h1>key</h1>
}

export default React.memo(MapGoogle)