import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import masjidilHaram from "../assets/masjidilHaram.jpg";
import masjidNabawi from "../assets/masjidNabawi.jpg";
import jabalRahmah from "../assets/jabalRahmah.jpg";
import mall1 from "../assets/mall1.jpg";
import mall2 from "../assets/mall2.jpg";
import mall3 from "../assets/mall3.jpg";
import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";

const locations = [
  {
    name: "Masjidil Haram",
    image: masjidilHaram,
    position: [21.4225, 39.8262],
    mapsLink: "https://goo.gl/maps/Xf5qqxvD8nJkcuWk7",
    description: "Masjid paling suci dalam Islam yang berada di kota Makkah. Menjadi tujuan utama ibadah haji dan umrah."
  },
  {
    name: "Masjid Nabawi",
    image: masjidNabawi,
    position: [24.4672, 39.6156],
    mapsLink: "https://goo.gl/maps/NwYoVThPpSP82KMw9",
    description: "Masjid kedua tersuci dalam Islam yang dibangun oleh Nabi Muhammad SAW di kota Madinah."
  },
  {
    name: "Jabal Rahmah",
    image: jabalRahmah,
    position: [21.3556, 39.9633],
    mapsLink: "https://goo.gl/maps/sDbUZdd2FYzZodDo6",
    description: "Bukit yang diyakini sebagai tempat pertemuan Nabi Adam dan Hawa di padang Arafah."
  },
];

const mallsNearKaaba = [
  { name: "Makkah Mall", image: mall1 },
  { name: "Abraj Al Bait", image: mall2 },
];

const hotelsNearKaaba = [
  { name: "Pullman Zamzam Makkah", image: hotel1 },
  { name: "Swissôtel Makkah", image: hotel2 },
];

const recommendedMalls = [
  { name: "Red Sea Mall", image: mall3 },
];

export default function Destination() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-700">🗺️ Peta Destinasi Umroh</h1>

      <MapContainer center={[21.4225, 39.8262]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, i) => (
          <Marker
            key={i}
            position={loc.position}
            icon={L.icon({
              iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })}
          >
            <Popup>
              <strong>{loc.name}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {[{ title: "Destinasi Pilihan", data: locations },
        { title: "Mall Terdekat Kakbah", data: mallsNearKaaba },
        { title: "Hotel Terdekat Kakbah", data: hotelsNearKaaba },
        { title: "Mall Rekomendasi", data: recommendedMalls }]
        .map((section, index) => (
          <div key={index} className="mt-10">
            <h2 className="text-xl font-semibold mb-3 text-orange-500">{section.title}:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {section.data.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow hover:shadow-lg border border-gray-200 transition"
                >
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-3 text-center">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    {item.description && <p className="text-sm text-gray-600 mb-2">{item.description}</p>}
                    {item.mapsLink && (
                      <a
                        href={item.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-white bg-green-600 hover:bg-green-700 px-4 py-1 rounded-full transition"
                      >
                        Lihat di Google Maps
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
