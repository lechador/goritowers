'use client'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet';
import { useState } from 'react';

export default function LeafletMap({position, containerHeight}) {
    const [geoData, setGeoData] = useState(position);
    const customIcon = L.icon({
        iconUrl: '/marker.png',
        iconSize: [39, 52]
      });
    return (
        <MapContainer center={geoData} zoom={15} scrollWheelZoom={false} className={`w-full ${containerHeight}`}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                geoData && (
                    <Marker position={geoData} icon={customIcon}>
                        <Popup>
                            ტექსტი
                        </Popup>
                    </Marker>
                )
            }
        </MapContainer>
  )
}
