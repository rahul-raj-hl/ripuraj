import Image from "next/image";
import Link from "next/link";

const t = {
    en: {
        winningPriceText:"How to use the coupon" 
    },
    hindi:{
        winningPriceText: "कूपन का इस्तेमाल कैसे करें"
    }
}
const VideoSection = () => {
    const lan = 'hindi'
    
    return (
        <div className="bg-white text-center mt-0 p-10 pb-24 shadow-md">
            <h2 className="text-xl font-semibold text-indigo-900">{t[lan].winningPriceText}</h2>
            <p className="text-base text-gray-800 my-3">
                अब इनाम जितना हुआ आसान! देखिए ये वीडियो और जानिए कैसे आप <strong>Ripuraj Gold /</strong><br/><strong>Silver Scheme</strong> में भाग लेकर बन सकते हैं <strong>Lucky Winner</strong>!
            </p>
            <div className="bg-yellow-500 w-full max-w-6xl h-96 mx-auto flex justify-center items-center rounded-3xl relative">
                {/* <button className="bg-transparent border-none text-white text-4xl cursor-pointer rounded-full">
                <img

                    src="./play-btn.svg"
                    className="w-16"
                    alt=""
                />
                <Link href={"https://www.youtube.com/watch?v=9gxDxl_KuFM"} />
                
                </button> */}
                <Link
      href="https://www.youtube.com/watch?v=9gxDxl_KuFM"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="./play-btn.svg"
        alt="YouTube Video Thumbnail"
        className="w-16"
        width={600}
        height={400}
      />
    </Link>
            </div>
        </div>
    );
};

export default VideoSection;
