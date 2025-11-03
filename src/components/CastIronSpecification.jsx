






import React from 'react';

const CastIronSpecification = () => {
  const data = [
    { material: "EN-GJL-150", india: "FG 150", germany: "GG 15", uk: "Grade 150", usa: "25B", international: "150", tensile: "150", hardness: "130-180" },
    { material: "EN-GJL-200", india: "FG 200", germany: "GG 20", uk: "Grade 200", usa: "30B", international: "200", tensile: "200", hardness: "160-220" },
    { material: "EN-GJL-250", india: "FG 250", germany: "GG 25", uk: "Grade 250", usa: "35B", international: "250", tensile: "250", hardness: "180-230" },
    { material: "EN-GJL-300", india: "FG 300", germany: "GG 30", uk: "Grade 300", usa: "45B", international: "300", tensile: "300", hardness: "180-230" },
    { material: "EN-GJL-350", india: "FG 350", germany: "GG 35", uk: "Grade 350", usa: "50B", international: "350", tensile: "350", hardness: "207-240" },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-[#C66739] mb-4">Cast Iron/ Grey Iron – Material Specification</h2>
        <p className="text-gray-600 mb-6">Mechanical properties as measured on separately cast test bars</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] bg-white border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">Material designation<br />(EN 1561)</th>
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">India<br />IS 210<br />1993</th>
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">Germany<br />DIN 1691<br />1973</th>
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">UK<br />BS 1452<br />1990</th>
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">USA<br />ASTM A48<br />1994</th>
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">International<br />ISO 1085<br />1987</th>
                <th className="border-b border-[#E2E2E2] px-4 py-2 text-left">Tensile Strength(min)<br />(N/mm²)</th>
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

export default CastIronSpecification;