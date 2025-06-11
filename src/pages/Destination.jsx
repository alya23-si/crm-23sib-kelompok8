import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Gambar destinasi
import masjidilHaram from "../assets/masjidilHaram.jpg";
import masjidNabawi from "../assets/masjidNabawi.jpg";
import jabalRahmah from "../assets/jabalRahmah.jpg";

// Gambar mall terdekat kakbah
import mall1 from "../assets/mall1.jpg"; // Makkah Mall
import mall2 from "../assets/mall2.jpg"; // Abraj Al Bait

// Gambar mall rekomendasi
import mall3 from "../assets/mall3.jpg"; // Red Sea Mall

// Gambar hotel terdekat kakbah
import hotel1 from "../assets/hotel1.jpg"; // Pullman Zamzam
import hotel2 from "../assets/hotel2.jpg"; // Swissôtel Makkah

// Data lokasi
const locations = [
  {
    name: "Masjidil Haram",
    image: masjidilHaram,
    position: [21.4225, 39.8262],
  },
  {
    name: "Masjid Nabawi",
    image: masjidNabawi,
    position: [24.4672, 39.6156],
  },
  {
    name: "Jabal Rahmah",
    image: jabalRahmah,
    position: [21.3556, 39.9633],
  },
];

// Data mall terdekat Kakbah
const mallsNearKaaba = [
  { name: "Makkah Mall", image: mall1 },
  { name: "Abraj Al Bait", image: mall2 },
];

// Data hotel terdekat Kakbah
const hotelsNearKaaba = [
  { name: "Pullman Zamzam Makkah", image: hotel1 },
  { name: "Swissôtel Makkah", image: hotel2 },
];

// Data mall rekomendasi umum
const recommendedMalls = [
  { name: "Red Sea Mall", image: mall3 },
];

export default function Destination() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Peta Destinasi Umroh</h1>

      {/* Map */}
      <MapContainer center={[21.4225, 39.8262]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, i) => (
          <Marker key={i} position={loc.position} icon={L.icon({ iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png", iconSize: [25, 41], iconAnchor: [12, 41] })}>
            <Popup>
              <strong>{loc.name}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Destinasi Pilihan */}
      <h2 className="text-xl font-semibold mt-8 mb-2 text-purple-700">Destinasi Pilihan:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {locations.map((loc, i) => (
          <div key={i} className="rounded overflow-hidden shadow-md border">
            <img src={loc.image} alt={loc.name} className="w-full h-48 object-cover" />
            <div className="p-3 text-center font-semibold text-gray-700">{loc.name}</div>
          </div>
        ))}
      </div>

      {/* Mall Terdekat Kakbah */}
      <h2 className="text-xl font-semibold mt-10 mb-2 text-purple-700">Mall Terdekat Kakbah:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mallsNearKaaba.map((mall, i) => (
          <div key={i} className="rounded overflow-hidden shadow-md border">
            <img src={mall.image} alt={mall.name} className="w-full h-48 object-cover" />
            <div className="p-3 text-center font-semibold text-gray-700">{mall.name}</div>
          </div>
        ))}
      </div>

      {/* Hotel Terdekat Kakbah */}
      <h2 className="text-xl font-semibold mt-10 mb-2 text-purple-700">Hotel Terdekat Kakbah:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {hotelsNearKaaba.map((hotel, i) => (
          <div key={i} className="rounded overflow-hidden shadow-md border">
            <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
            <div className="p-3 text-center font-semibold text-gray-700">{hotel.name}</div>
          </div>
        ))}
      </div>

      {/* Mall Rekomendasi */}
      <h2 className="text-xl font-semibold mt-10 mb-2 text-purple-700">Mall Rekomendasi:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recommendedMalls.map((mall, i) => (
          <div key={i} className="rounded overflow-hidden shadow-md border">
            <img src={mall.image} alt={mall.name} className="w-full h-48 object-cover" />
            <div className="p-3 text-center font-semibold text-gray-700">{mall.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
