import { Link } from "react-router";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { to: "/about", label: "About Us" },
            { to: "/services", label: "Services" },
            { to: "/projects", label: "Projects" },
            { to: "/team", label: "Our Team" }
        ],
        resources: [
            { to: "/blog", label: "Blog" },
            { to: "/events", label: "Events" },
            { to: "/careers", label: "Careers" },
            { to: "/contact", label: "Contact" }
        ]
    };

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Instagram, href: "#", label: "Instagram" }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden poppins-regular">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#8a48e7]/20 to-[#5c21d2]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#5c21d2]/20 to-[#8a48e7]/20 rounded-full blur-3xl"></div>

            <div className="relative w-full max-w-7xl mx-auto px-6 pt-16 pb-8">
                {/* Main Footer Content */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="relative">
                                <img 
                                    src="/logo.png" 
                                    alt="Cochin Connect" 
                                    className="relative w-12 h-auto rounded-xl" 
                                />
                            </div>
                            <h3 className="text-2xl poppins-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2]">
                                Cochin Connect
                            </h3>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Kerala's first comprehensive business networking platform empowering entrepreneurs and professionals.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex space-x-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-[#8a48e7] hover:to-[#5c21d2] rounded-lg flex items-center justify-center transition-all duration-300 group border border-white/10"
                                >
                                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-lg poppins-semibold mb-6 text-white flex items-center">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mr-3"></span>
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#8a48e7]" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-lg poppins-semibold mb-6 text-white flex items-center">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mr-3"></span>
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#8a48e7]" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h4 className="text-lg poppins-semibold mb-6 text-white flex items-center">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mr-3"></span>
                            Get in Touch
                        </h4>
                        
                        {/* Contact Info */}
                        <div className="space-y-4 mb-6">
                            <a href="mailto:cochinconnect01@gmail.com" className="flex items-start text-gray-400 hover:text-white transition-colors group">
                                <Mail className="w-5 h-5 mr-3 mt-0.5 text-[#8a48e7] group-hover:scale-110 transition-transform" />
                                <span className="text-sm">cochinconnect01@gmail.com</span>
                            </a>
                            <a href="tel:+919946689000" className="flex items-start text-gray-400 hover:text-white transition-colors group">
                                <Phone className="w-5 h-5 mr-3 mt-0.5 text-[#8a48e7] group-hover:scale-110 transition-transform" />
                                <span className="text-sm">+91 99466 89000</span>
                            </a>
                            <div className="flex items-start text-gray-400">
                                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-[#8a48e7]" />
                                <span className="text-sm">Operation Office<br />OS 3 GCDA Complex, Marine Drive<br />Cochin, Ernakulam, Kerala</span>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <p className="text-sm text-gray-400 mb-3">Subscribe to our newsletter</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8a48e7] transition-colors"
                                />
                                <button className="w-10 h-10 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-[#8a48e7]/50 transition-all duration-300 group">
                                    <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            © {currentYear} Cochin Connect. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient Border on Top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2]"></div>
        </footer>
    );
}