import React from "react";

const TermsConditionModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 text-black bg-opacity-50 flex justify-center items-center z-50 px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white p-6 rounded-lg max-w-lg w-full overflow-y-auto max-h-[90vh] relative">
        {/* Close Icon */}
        <button
          className="absolute top-3 right-3 text-black text-3xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Terms & Conditions | नियम एवं शर्तें</h2>
        <p className="text-sm mb-4">
          These Terms & Conditions govern your participation in the Gold & Silver Scratch Coupon Scheme offered by Ripuraj Agro Private Limited. By participating in the scheme, you agree to be bound by these terms.
        </p>
        <h4 className="text-md font-semibold mb-2">Coupon Handling</h4>
        <ul className="list-disc pl-5 mb-4 text-sm">
          <li>Keep your scratch coupon safe and intact.</li>
          <li>Tampered or damaged coupons may be considered invalid.</li>
        </ul>
        <h4 className="text-md font-semibold mb-2">Prize Claim Process</h4>
        <ul className="list-disc pl-5 mb-4 text-sm">
          <li>You must present the original scratch coupon to the company representative at the time of claiming your reward.</li>
          <li>No claim will be entertained without a valid coupon.</li>
        </ul>
        <h4 className="text-md font-semibold mb-2">Verification</h4>
        <ul className="list-disc pl-5 mb-4 text-sm">
          <li>All entries and winners are subject to verification by Ripuraj Agro Private Limited.</li>
          <li>If the information provided is found to be false or misleading, the participant may be disqualified.</li>
        </ul>
        <h4 className="text-md font-semibold mb-2">Legal Jurisdiction</h4>
        <ul className="list-disc pl-5 mb-4 text-sm">
          <li>Any dispute or claim related to this scheme will fall under the jurisdiction of Motihari Court, Bihar.</li>
          <li>The decision of Ripuraj Agro Private Limited in case of any dispute shall be final and binding.</li>
        </ul>
        <h4 className="text-md font-semibold mb-2">Rights Reserved</h4>
        <ul className="list-disc pl-5 mb-4 text-sm">
          <li>Ripuraj Agro Private Limited reserves the right to modify, suspend, or terminate the scheme at any time without prior notice.</li>
          <li>Participation in the scheme implies full acceptance of these terms.</li>
        </ul>
        <hr className="my-4" />
        <p className="text-sm mb-4">
          ये नियम एवं शर्तें रिपुराज एग्रो प्राइवेट लिमिटेड द्वारा संचालित गोल्ड एवं सिल्वर स्क्रैच कूपन योजना में आपकी भागीदारी को नियंत्रित करती हैं। इस योजना में भाग लेने का अर्थ है कि आप इन शर्तों से सहमत हैं।
        </p>
        <h4 className="text-md font-semibold mb-2">कूपन को सुरक्षित रखें</h4>
        <ul className="list-disc pl-5 mb-4 text-sm">
          <li>स्क्रैच किया गया कूपन सही स्थिति में संभाल कर रखें।</li>
          <li>क्षतिग्रस्त या छेड़छाड़ किए गए कूपन अमान्य माने जा सकते हैं।</li>
        </ul>
        <h4 className="text-md font-semibold mb-2">पुरस्कार प्राप्ति प्रक्रिया</h4>
        <ul className="list-disc pl-5 mb-4 text-sm">
          <li>पुरस्कार प्राप्त करते समय कूपन कंपनी के प्रतिनिधि को दिखाना और सौंपना अनिवार्य है।</li>
          <li>बिना वैध कूपन के कोई भी दावा स्वीकार नहीं किया जाएगा।</li>
        </ul>
        <h4 className="text-md font-semibold mb-2">सत्यापन</h4>
        <ul className="list-disc pl-5 mb-4 text-sm">
          <li>सभी एंट्री और विजेताओं की पुष्टि रिपुराज एग्रो प्राइवेट लिमिटेड द्वारा की जाएगी।</li>
          <li>यदि दी गई जानकारी असत्य या भ्रामक पाई जाती है, तो भागीदारी अमान्य मानी जा सकती है।</li>
        </ul>
        <h4 className="text-md font-semibold mb-2">न्यायिक क्षेत्राधिकार</h4>
        <ul className="list-disc pl-5 mb-4 text-sm">
          <li>इस योजना से संबंधित किसी भी विवाद का समाधान मोतिहारी न्यायालय, बिहार के क्षेत्राधिकार में ही होगा।</li>
          <li>किसी भी विवाद में रिपुराज एग्रो प्राइवेट लिमिटेड का निर्णय अंतिम और बाध्यकारी होगा।</li>
        </ul>
        <h4 className="text-md font-semibold mb-2">अधिकार सुरक्षित</h4>
        <ul className="list-disc pl-5 mb-4 text-sm">
          <li>रिपुराज एग्रो प्राइवेट लिमिटेड बिना पूर्व सूचना के इस योजना को संशोधित, स्थगित या समाप्त करने का अधिकार सुरक्षित रखता है।</li>
          <li>इस योजना में भाग लेना, इन सभी शर्तों की स्वीकृति माना जाएगा।</li>
        </ul>
      </div>
    </div>
  );
};

export default TermsConditionModal;
