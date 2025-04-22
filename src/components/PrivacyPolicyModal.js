import React from "react";

const PrivacyPolicyModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 text-black bg-opacity-50 flex justify-center items-center z-50 px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white p-6 rounded-lg max-w-lg w-full overflow-y-auto max-h-[90vh] relative">
        {/* Close Icon Positioned Inside */}
        <button
          className="absolute top-3 right-3 text-black text-3xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Privacy Policy | गोपनीयता नीति</h2>
        <p className="text-sm mb-4">
          Ripuraj Agro Private Limited is committed to protecting your privacy and the security of your personal data. This policy outlines how we collect, use, store, and protect your information when you participate in our Gold & Silver Scheme or interact with us in any other way.
        </p>
        <hr className="my-4" />
        <h4 className="text-md font-semibold mb-2">1. What Information We Collect</h4>
        <ul className="list-disc pl-5 mb-4 text-sm">
          <li>Name, contact number, address (for prize verification and delivery)</li>
          <li>Any communication details shared with our customer service</li>
          <li>Data shared during participation in promotions, contests, or surveys</li>
        </ul>
        <h4 className="text-md font-semibold mb-2">2. How We Use Your Information</h4>
        <p className="text-sm mb-4">
          Your information is used strictly for:
          <ul className="list-disc pl-5">
            <li>Verifying your participation and distributing rewards in our scratch coupon scheme</li>
            <li>Improving our products, services, and promotions</li>
            <li>Customer support and dispute resolution</li>
          </ul>
          We <strong>do not</strong> sell, rent, or disclose your personal information to third parties without your consent unless required by law.
        </p>
        <h4 className="text-md font-semibold mb-2">3. Data Storage and Protection</h4>
        <p className="text-sm mb-4">
          - Stored securely with restricted access<br />
          - Retained only for as long as necessary<br />
          - Protected through reasonable technical and organizational measures
        </p>
        <h4 className="text-md font-semibold mb-2">4. Use of Anonymized Data</h4>
        <p className="text-sm mb-4">
          Aggregated, non-identifiable data may be used for analytics, internal reports, or marketing insights.
        </p>
        <h4 className="text-md font-semibold mb-2">5. Policy Updates</h4>
        <p className="text-sm mb-4">
          We may update this Privacy Policy from time to time. All changes will be published on this page with the updated date.
        </p>
        <h4 className="text-md font-semibold mb-2">6. Your Consent</h4>
        <p className="text-sm mb-4">
          By participating in our Gold & Silver Scheme or interacting with us, you agree to the collection and use of your information as outlined in this policy.
        </p>
        <h4 className="text-md font-semibold mb-2">7. Contact Us</h4>
        <p className="text-sm mb-4">
          For questions, concerns, or to request access to your personal data, please contact us at:<br />
          📧 <strong>Email:</strong> info@ripurajagro.com<br />
          📱 <strong>WhatsApp:</strong> (Insert Number)
        </p>
        <hr className="my-4" />
        <h4 className="text-md font-semibold mb-2">1. हम कौन सी जानकारी एकत्र करते हैं</h4>
        <ul className="list-disc pl-5 mb-4 text-sm">
          <li>नाम, संपर्क नंबर, पता (इनाम वितरण और सत्यापन के लिए)</li>
          <li>ग्राहक सेवा के दौरान साझा की गई जानकारी</li>
          <li>प्रचार या सर्वेक्षण में भाग लेने के दौरान दी गई जानकारी</li>
        </ul>
        <h4 className="text-md font-semibold mb-2">2. जानकारी का उपयोग कैसे किया जाता है</h4>
        <p className="text-sm mb-4">
          आपकी जानकारी का उपयोग निम्नलिखित के लिए किया जाता है:
          <ul className="list-disc pl-5">
            <li>कूपन योजना में भागीदारी की पुष्टि और पुरस्कार वितरण</li>
            <li>हमारे उत्पादों और सेवाओं को बेहतर बनाने के लिए</li>
            <li>ग्राहक सहायता और किसी भी विवाद के समाधान के लिए</li>
          </ul>
          हम आपकी जानकारी को आपकी सहमति के बिना किसी तीसरे पक्ष के साथ साझा नहीं करते, जब तक कि यह कानून द्वारा आवश्यक न हो।
        </p>
        <h4 className="text-md font-semibold mb-2">3. डेटा स्टोरेज और सुरक्षा</h4>
        <p className="text-sm mb-4">
          - आपकी जानकारी को सुरक्षित रूप से संग्रहीत किया जाता है<br />
          - केवल अधिकृत व्यक्तियों को ही इसकी पहुंच होती है<br />
          - जानकारी को आवश्यक अवधि तक ही रखा जाता है
        </p>
        <h4 className="text-md font-semibold mb-2">4. अनाम जानकारी का उपयोग</h4>
        <p className="text-sm mb-4">
          गैर-पहचान योग्य डेटा का उपयोग हमारे आंतरिक विश्लेषण या मार्केटिंग के उद्देश्य से किया जा सकता है।
        </p>
        <h4 className="text-md font-semibold mb-2">5. नीति में बदलाव</h4>
        <p className="text-sm mb-4">
          यह नीति समय-समय पर अपडेट की जा सकती है। किसी भी बदलाव को इस पेज पर अपडेट कर दिया जाएगा।
        </p>
        <h4 className="text-md font-semibold mb-2">6. आपकी सहमति</h4>
        <p className="text-sm mb-4">
          गोल्ड और सिल्वर योजना में भाग लेने या हमसे जुड़ने का मतलब है कि आप इस नीति में वर्णित तरीके से अपनी जानकारी के उपयोग के लिए सहमत हैं।
        </p>
        <h4 className="text-md font-semibold mb-2">7. संपर्क करें</h4>
        <p className="text-sm mb-4">
          यदि आपके पास कोई प्रश्न, सुझाव, या डेटा से संबंधित अनुरोध है, तो कृपया हमसे संपर्क करें:<br />
          📧 <strong>ईमेल:</strong> info@ripurajagro.com<br />
          📱 <strong>व्हाट्सएप:</strong> (Insert Number)
        </p>
        <hr className="my-4" />
        <p className="text-sm text-center mt-4">© Ripuraj Agro Private Limited. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
