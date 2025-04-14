import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* القسم الأول: معلومات عن الشركة */}
        <div>
          <h2 className="text-2xl font-bold">ماركتينج إيدج</h2>
          <p className="mt-2 text-gray-300">
            نحن نساعد الشركات على النمو من خلال استراتيجيات تسويقية قوية.
          </p>
        </div>

        {/* القسم الثاني: روابط سريعة */}
        <div>
          <h3 className="text-xl font-semibold">روابط سريعة</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="/home" className="hover:text-gray-400 transition">الرئيسية</a></li>
            <li><a href="/about" className="hover:text-gray-400 transition">من نحن</a></li>
            <li><a href="/contact" className="hover:text-gray-400 transition">اتصل بنا</a></li>
          </ul>
        </div>

        {/* القسم الثالث: وسائل التواصل */}
        <div>
          <h3 className="text-xl font-semibold">تابعنا على</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-2xl hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-2xl hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-2xl hover:text-blue-700 transition">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-2xl hover:text-pink-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* الحقوق */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} ماركتينج إيدج. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
