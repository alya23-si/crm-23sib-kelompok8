import React, { useState } from "react";
import { PlusCircle, Calendar, MapPin } from "lucide-react";

const dummyEvents = [
  {
    id: 1,
    title: "Seminar Travel Haji & Umrah",
    date: "2025-07-15",
    location: "Jakarta",
  },
  {
    id: 2,
    title: "Pameran Wisata Halal",
    date: "2025-08-10",
    location: "Bandung",
  },
];

const EventBasedMarketing = () => {
  const [events, setEvents] = useState(dummyEvents);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: "", date: "", location: "" });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editId) {
      setEvents(events.map(ev => ev.id === editId ? { ...ev, ...form } : ev));
    } else {
      setEvents([...events, { id: Date.now(), ...form }]);
    }
    setShowModal(false);
    setForm({ title: "", date: "", location: "" });
    setEditId(null);
  };

  const handleEdit = (event) => {
    setForm(event);
    setEditId(event.id);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setEvents(events.filter(ev => ev.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-800">Event-Based Marketing</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          <PlusCircle size={18} /> Tambah Event
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white border border-green-100 rounded-xl shadow p-5 space-y-2"
          >
            <h2 className="text-lg font-semibold text-gray-800">{event.title}</h2>
            <div className="text-gray-600 flex items-center gap-2">
              <Calendar size={16} /> {event.date}
            </div>
            <div className="text-gray-600 flex items-center gap-2">
              <MapPin size={16} /> {event.location}
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => handleEdit(event)}
                className="text-orange-600 hover:underline text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(event.id)}
                className="text-red-600 hover:underline text-sm"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl border border-green-100 shadow-xl w-full max-w-md space-y-4">
            <h2 className="text-lg font-semibold text-green-700 mb-2">
              {editId ? "Edit Event" : "Tambah Event"}
            </h2>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Judul Event"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-400"
            />
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-400"
            />
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Lokasi"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-400"
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => {
                  setShowModal(false);
                  setForm({ title: "", date: "", location: "" });
                  setEditId(null);
                }}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventBasedMarketing;
