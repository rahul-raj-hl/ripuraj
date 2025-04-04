import React from 'react';

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
        <div className="h-screen flex flex-col">
            {/* Top Section */}
            <div className="h-[60%]">
                <img 
                    src="/riceImage.png" 
                    alt="Rice" 
                    className="w-full h-full object-cover" 
                />
            </div>

            {/* Footer Section */}
            <div className="h-[40%] bg-gray-100 flex flex-col justify-between relative">
                {/* Background Illustration */}
                <div className="absolute inset-0 opacity-10">
                    <img 
                        src="/background-illustration.png" // Replace with the actual path of the background illustration
                        alt="Background Illustration" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Footer Content */}
                <div className="flex justify-between items-center w-full px-8 z-10 mt-4 pt-4">
                    {/* Logo */}
                    <div>
                        <a href="https://ripurajagro.com/" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="/ripuraj-logo.png" 
                                alt="Ripuraj Logo" 
                                className="h-16"
                            />
                        </a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                                <img src={link.src} alt={link.alt} className="h-6" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-300 my-4 z-10"></div>

                {/* Footer Links */}
                <div className="flex justify-between items-center w-full px-8 text-sm text-gray-600 z-10 pb-6">
                    {/* Copyright */}
                    <span>© 2025 Ripuraj Agro</span>

                    {/* Footer Links */}
                    <div className="flex space-x-4">
                        {footerLinks.map((link, index) => (
                            <a key={index} href={link.href} className="hover:underline">
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
