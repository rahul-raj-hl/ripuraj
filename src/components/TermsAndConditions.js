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
    <div>
      <h2 className="text-center text-gray-800 text-xl font-semibold mb-5">
        भाग लेने से पहले जानें
      </h2>
      <div className="bg-white p-5 rounded-lg my-5 shadow-md max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-gray-700 font-medium mb-3">
                {section.title}
              </h3>
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
