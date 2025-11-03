import React from 'react';

const MaterialSpecification = () => {
  const data = [
    { material: "EN-GJS-350-22", india: "SG 350/22", germany: "GGG 35.3", uk: "350-22", usa: "ASTM A536", international: "ISO 1083", tensile: "350", elongation: "22", hardness: "<150" },
    { material: "EN-GJS-350-22LT", india: "SG 350/22 L", germany: "GGG 35.3", uk: "350-22L40", usa: "350-22L", international: "350-22L", tensile: "350", elongation: "22", hardness: "<150" },
    { material: "EN-GJS-400-18", india: "SG 400/18", germany: "GGG 40.3", uk: "400-18", usa: "60-40-18", international: "400-18", tensile: "400", elongation: "18", hardness: "130-180" },
    { material: "EN-GJS-400-18LT", india: "SG 400/18L", germany: "GGG 40.3", uk: "400-18L20", usa: "400-18L", international: "400-18L", tensile: "400", elongation: "18", hardness: "130-180" },
    { material: "EN-GJS-400-15", india: "SG 420/15", germany: "GGG 40", uk: "420-12", usa: "65-45-12", international: "400-15", tensile: "400", elongation: "15", hardness: "130-180" },
    { material: "EN-GJS-450-10", india: "SG 450/10", germany: "", uk: "450-10", usa: "70-50-05", international: "450-10", tensile: "450", elongation: "10", hardness: "160-210" },
    { material: "EN-GJS-500-7", india: "SG 500/7", germany: "GGG 50", uk: "500-7", usa: "80-55-06", international: "500-7", tensile: "500", elongation: "7", hardness: "170-230" },
    { material: "EN-GJS-600-3", india: "SG 600/3", germany: "GGG 60", uk: "600-3", usa: "100-70-03", international: "600-3", tensile: "600", elongation: "3", hardness: "190-270" },
    { material: "EN-GJS-700-2", india: "SG 700/2", germany: "GGG 70", uk: "700-2", usa: "", international: "700-2", tensile: "700", elongation: "2", hardness: "225-305" },
    { material: "EN-GJS-800-2", india: "SG 800/2", germany: "GGG 80", uk: "800-2", usa: "120-90-02", international: "800-2", tensile: "800", elongation: "2", hardness: "245-335" },
    { material: "EN-GJS-900-2", india: "SG 900/2", germany: "", uk: "900-2", usa: "", international: "900-2", tensile: "900", elongation: "2", hardness: "280-360" },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Spheroidal Graphite/Ductile Iron: Material Specification</h2>
        <p className="text-gray-600 mb-6">Mechanical properties as measured on separately cast test bars</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] bg-white border-collapse">
            <thead>
              <tr className="bg-gray-100 space-x-4">
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">Material designation<br />(EN 1563/Symbol)</th>
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">India<br />IS 210<br />1978</th>
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">Germany<br />DIN 1693<br />1973</th>
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">UK<br />BS 2789<br />1985</th>
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">USA<br />ASTM A536<br />1993</th>
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">International<br />ISO 1083<br />1987</th>
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">Tensile Strength<br />(N/mm²)</th>
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">Elongation(%)</th>
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">Hardness(BHN)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border-b border-[#E2E2E2] px-4 py-2">{row.material}</td>
                  <td className="border-b border-[#E2E2E2] px-4 py-2">{row.india}</td>
                  <td className="border-b border-[#E2E2E2] px-4 py-2">{row.germany}</td>
                  <td className="border-b border-[#E2E2E2] px-4 py-2">{row.uk}</td>
                  <td className="border-b border-[#E2E2E2] px-4 py-2">{row.usa}</td>
                  <td className="border-b border-[#E2E2E2] px-4 py-2">{row.international}</td>
                  <td className="border-b border-[#E2E2E2] px-4 py-2">{row.tensile}</td>
                  <td className="border-b border-[#E2E2E2] px-4 py-2">{row.elongation}</td>
                  <td className="border-b border-[#E2E2E2] px-4 py-2">{row.hardness}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MaterialSpecification;

