import {
  UserIcon,
  CalendarDaysIcon,
  CheckBadgeIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

const stages = ["Prospek", "Booking", "Lunas", "Berangkat"];
const stageIcons = {
  Prospek: <UserIcon className="w-5 h-5 text-blue-600 mr-1" />,
  Booking: <CalendarDaysIcon className="w-5 h-5 text-yellow-600 mr-1" />,
  Lunas: <CheckBadgeIcon className="w-5 h-5 text-green-600 mr-1" />,
  Berangkat: <PaperAirplaneIcon className="w-5 h-5 text-purple-600 mr-1" />,
};

const colors = {
  Prospek: "from-blue-100 to-blue-200 border-blue-400",
  Booking: "from-yellow-100 to-yellow-200 border-yellow-400",
  Lunas: "from-green-100 to-green-200 border-green-400",
  Berangkat: "from-purple-100 to-purple-200 border-purple-400",
};

// Dummy data
const prospects = [
  { id: 1, name: "Ahmad F", contact: "081234567890", status: "Prospek" },
  { id: 2, name: "Budi S", contact: "081212345678", status: "Booking" },
  { id: 3, name: "Citra L", contact: "081298765432", status: "Lunas" },
  { id: 4, name: "Dian T", contact: "081234123412", status: "Berangkat" },
  { id: 5, name: "Eka W", contact: "081211122233", status: "Prospek" },
];

const SalesPipeline = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stages.map(stage => {
        const filtered = prospects.filter(p => p.status === stage);
        return (
          <div
            key={stage}
            className={`border-l-4 ${colors[stage]} bg-gradient-to-b p-5 rounded-lg shadow hover:shadow-md transition-shadow duration-300`}
          >
            <div className="flex items-center mb-3">
              {stageIcons[stage]}
              <h3 className="text-md font-bold text-gray-700">{stage}</h3>
              <span className="ml-auto bg-white text-xs text-gray-700 px-2 py-0.5 rounded-full border">
                {filtered.length}
              </span>
            </div>

            {filtered.length > 0 ? (
              <div className="space-y-3 max-h-[240px] overflow-y-auto">
                {filtered.map(p => (
                  <div
                    key={p.id}
                    className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 transition"
                  >
                    <p className="text-sm font-semibold text-gray-800">{p.name}</p>
                    <p className="text-xs text-gray-500">{p.contact}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 mt-2">Tidak ada data</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SalesPipeline;
