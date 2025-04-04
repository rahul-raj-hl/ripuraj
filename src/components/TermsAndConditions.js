const TermsAndConditions = () => {
  const sections = [
    {
      title: "नियम एवं शर्तें:",
      items: [
        "स्क्रैच किया गया कूपन संभाल कर रखें।",
        "इनाम प्राप्त करते समय कूपन को कंपनी कर्मचारी को लौटाएं।",
        "शिकायत या सुझाव के कमेंट के साथ Submit बटन दबाएं।",
        "अपने SMS और वॉट्सऐप पर Welcome Note प्राप्त करें।",
      ],
    },
    {
      title: "Terms & Conditions:",
      items: [
        "Keep the scratched coupon safe.",
        "Return the coupon to the company staff when claiming the prize.",
        "All disputes will be under the jurisdiction of the Motihari court.",
        "In case of any dispute, the decision made by RAPL will be final.",
      ],
    },
  ];

  return (
    <div className="bg-yellow-100 py-[4%]">
      <h2 className="text-center text-gray-800 text-2xl font-semibold font-bold pb-[2%]">
        भाग लेने से पहले जानें
      </h2>
      <div className="bg-white p-5 rounded-lg shadow-md w-[80%]   mx-auto">
        <div className="flex flex-col md:flex-row justify-between   my-[2%] gap-5">
          {sections.map((section, index) => (
            <div
              className={`
              relative md:px-5
              ${index !== 0 ? "pt-5 md:pt-0" : ""}
            `}
              key={index}
            >
              {/* Horizontal divider (for mobile) */}
              {index !== 0 && (
                <div className="block md:hidden absolute top-0 left-0 w-full h-px bg-gray-300"></div>
              )}

              {/* Vertical divider (for md and above) */}
              {index !== 0 && (
                <div className="hidden md:block absolute left-0 top-0 h-full w-px bg-gray-300"></div>
              )}
              <h3 className="text-gray-700 font-bold mb-3">{section.title}</h3>
              <ol className="list-decimal pl-5 text-gray-600 space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
