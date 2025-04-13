import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-xces-dark border-t border-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-2">
            <img 
              src="uploads/2nd logo-01.png" 
              alt="XCES Logo" 
              className="h-16"
            />
          </div>
          <p className="text-gray-400 text-lg font-medium mt-2">Pay what's fair - your food with care</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Company Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>By Avriti International</li>
              <li>CIN: U74103BR2025PTC073308</li>
            </ul>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">contact@xcesnow.in</p>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="https://www.instagram.com/xcesindia?igsh=MWRvY2Jla200aDVuag==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} XCES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
