import { useState } from 'react';
import { BarChart2, CheckCircle, Target, ChevronDown, ChevronUp } from 'lucide-react';

const KinerjaSales = () => {
  const [openSection, setOpenSection] = useState(null);

  const data = {
    prospek: 120,
    closingRate: 45,
    targetPenjualan: 100_000_000,
  };

  const formatRupiah = (number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const cards = [
    {
      key: 'prospek',
      label: 'Jumlah Prospek',
      value: `${data.prospek}`,
      icon: <BarChart2 className="text-purple-600" />,
      borderColor: 'border-purple-500',
      detail:
        'Terdapat 120 prospek potensial yang sedang dalam proses follow-up oleh tim sales.',
    },
    {
      key: 'closing',
      label: 'Closing Rate',
      value: `${data.closingRate}%`,
      icon: <CheckCircle className="text-green-600" />,
      borderColor: 'border-green-500',
      detail:
        'Closing rate saat ini adalah 45%, menunjukkan efektivitas tim sales dalam mengonversi prospek.',
    },
    {
      key: 'target',
      label: 'Target Penjualan',
      value: formatRupiah(data.targetPenjualan),
      icon: <Target className="text-blue-600" />,
      borderColor: 'border-blue-500',
      detail:
        `Target penjualan bulan ini adalah ${formatRupiah(data.targetPenjualan)}. Tim saat ini telah mencapai 60% dari target tersebut.`,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-purple-700 mb-6">Dashboard Kinerja Sales</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.key}
            onClick={() => toggleSection(card.key)}
            className={`bg-white rounded-xl shadow-sm cursor-pointer border-l-4 ${card.borderColor} transition-all duration-200 hover:shadow-md`}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-4">
                {card.icon}
                <div>
                  <p className="text-sm text-gray-500">{card.label}</p>
                  <p className="text-lg font-semibold">{card.value}</p>
                </div>
              </div>
              {openSection === card.key ? <ChevronUp /> : <ChevronDown />}
            </div>

            {openSection === card.key && (
              <div className="px-5 pb-4 text-sm text-gray-600">{card.detail}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KinerjaSales;
