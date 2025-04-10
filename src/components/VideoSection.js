import Image from "next/image";
import Link from "next/link";

const t = {
  en: {
    winningPriceText: "How to use the coupon",
  },
  hindi: {
    winningPriceText: "कूपन का इस्तेमाल कैसे करें ?",
  },
};
const VideoSection = () => {
  const lan = "hindi";

return (
    <div className="bg-white flex flex-col justify-center items-center p-4 sm:p-8 pb-16 min-h-0 sm:min-h-screen">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-900 mb-3">
            {t[lan].winningPriceText}
        </h2>
        <p className="text-sm sm:text-l text-gray-800 text-center mb-5">
            अब इनाम जितना हुआ आसान! देखिए ये वीडियो और जानिए कैसे आप{" "}
            <strong>Ripuraj Gold /</strong>
            <strong>Silver Scheme</strong>
             में भाग लेकर बन सकते हैं <strong>Lucky Winner</strong>!
        </p>
        <div
            className="relative flex justify-center items-center w-full max-w-[1166px] h-[200px] sm:h-[400px] bg-yellow-400 rounded-2xl"
        >
            <iframe
                className="h-full w-full rounded-2xl"
                src="https://www.youtube.com/embed/-8dJB8QUUBM?si=pNzQIL24jlZBhc63"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    </div>
);
};

export default VideoSection;
