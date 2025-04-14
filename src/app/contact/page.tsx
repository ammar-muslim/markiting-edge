import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="max-w-3xl  mx-auto p-8 bg-white shadow-lg rounded-2xl my-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
      
      <form className="space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
        <textarea 
          placeholder="Your Message" 
          rows={5} 
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
      
      <div className="flex justify-center space-x-6 mt-6">
        <a href="#" className="text-blue-600 text-2xl hover:text-blue-800 transition" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="#" className="text-blue-400 text-2xl hover:text-blue-600 transition" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="#" className="text-blue-700 text-2xl hover:text-blue-900 transition" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:someone@example.com" className="text-red-600 text-2xl hover:text-red-800 transition" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Contact;             