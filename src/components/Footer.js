import React from 'react';
import Image from 'next/image';

const Footer = () => {
    const socialLinks = [
        {
            href: "https://www.facebook.com/RipurajRice",
            src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
            alt: "Facebook",
        },
        {
            href: "https://www.instagram.com/ripurajagro/#",
            src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
            alt: "Instagram",
        },
        {
            href: "https://www.youtube.com/@RipurajAgro",
            src: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png",
            alt: "YouTube",
        },
    ];

    const footerLinks = [
        { href: "/terms", label: "TERMS OF USE" },
        { href: "/privacy", label: "PRIVACY NOTICE" },
    ];

    return (
        <div className="min-h-[80vh] flex flex-col">
            {/* Top Section */}
            <div className="relative flex-grow">
                {/* Adjusted padding/margin for top section */}
                <div className="hidden md:block relative w-full">
                    <Image 
                        src="/riceBigImg.jpg" 
                        alt="Rice Large" 
                        layout="responsive" 
                        width={1920} 
                        height={1080} 
                        objectFit="cover" 
                    />
                </div>
                <div className="md:hidden relative w-full">
                    <Image 
                        src="/riceSmallImg.jpg" 
                        alt="Rice Small" 
                        layout="responsive" 
                        width={1080} 
                        height={720} 
                        objectFit="contain" 
                    />
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-gray-100 flex flex-col justify-between relative overflow-hidden mt-0 min-h-[30vh]">
                {/* Background Illustration */}
                <div className="absolute inset-0">
                    <img 
                        src="/footerImg.jpg" 
                        alt="Footer Background" 
                        className="absolute inset-0 w-full h-full object-contain" 
                    />
                </div>

                {/* Footer Content */}
                <div className="flex justify-between items-center w-full px-8 z-10 pt-0">
                    {/* Logo */}
                    <div>
                        <a href="https://ripurajagro.com/" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="/ripuraj-logo.png" 
                                alt="Ripuraj Logo" 
                                className="h-12"
                            />
                        </a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                                <img src={link.src} alt={link.alt} className="h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-300 z-10"></div>

                {/* Footer Links */}
                <div className="flex justify-between items-center w-full px-12 text-sm text-gray-600 z-10 pb-8 pt-4">
                    <span className="text-lg font-semibold">© 2025 Ripuraj Agro</span>

                    {/* Footer Links */}
                    <div className="flex space-x-8">
                        {footerLinks.map((link, index) => (
                            <a key={index} href={link.href} className="hover:underline text-lg font-medium">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
