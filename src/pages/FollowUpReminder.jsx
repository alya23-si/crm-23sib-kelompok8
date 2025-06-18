import React from 'react';
import dayjs from 'dayjs';
import { ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const FollowUpReminder = () => {
  const prospects = [
    {
      id: 1,
      name: "Ahmad Syahputra",
      contact: "08123456789",
      lastContact: "2025-05-20",
      status: "Prospek",
    },
    {
      id: 2,
      name: "Siti Aminah",
      contact: "08234567890",
      lastContact: "2025-05-25",
      status: "Booking",
    },
    {
      id: 3,
      name: "Hendra Wijaya",
      contact: "08198765432",
      lastContact: "2025-05-15",
      status: "Lunas",
    },
  ];

  const today = dayjs();
  const needFollowUp = prospects.filter(p =>
    dayjs(p.lastContact).add(3, 'day').isBefore(today)
  );

  return (
    <div className="bg-white border-l-4 border-orange-500 shadow p-6 rounded-lg mb-6">
      <div className="flex items-center mb-4">
        <ExclamationTriangleIcon className="w-6 h-6 text-orange-500 mr-2" />
        <h2 className="text-xl font-semibold text-green-700">🔔 Pengingat Follow-Up</h2>
      </div>

      {needFollowUp.length > 0 ? (
        <div className="space-y-4">
          {needFollowUp.map(p => (
            <div
              key={p.id}
              className="flex justify-between items-start bg-orange-50 border border-orange-300 p-4 rounded-md shadow-sm"
            >
              <div>
                <p className="font-semibold text-gray-800">{p.name}</p>
                <p className="text-sm text-gray-600">
                  Terakhir dihubungi: <span className="font-semibold text-gray-800">{p.lastContact}</span>
                </p>
                <p className="text-sm text-orange-600 font-medium">⚠️ Perlu follow-up segera!</p>
              </div>
              <button className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600 text-sm">
                Hubungi
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center text-green-700 bg-green-50 border border-green-300 p-4 rounded-md">
          <CheckCircleIcon className="w-5 h-5 mr-2" />
          <p className="text-sm font-medium">Semua prospek sudah di-follow-up dengan baik 🎉</p>
        </div>
      )}
    </div>
  );
};

export default FollowUpReminder;
