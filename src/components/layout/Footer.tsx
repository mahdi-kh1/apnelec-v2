import Link from 'next/link';

export  const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">APN Elec</h3>
              <p className="text-gray-400 mb-4">
                All APN Elec work is carried out according to the current edition (18th Edition) of IET Regulations BS 7671 of Wiring regulation.
                APN Elec is Health and Safety aware and compliant. Amir Nasab has health and safety training and is fully CSCS approved.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  {/* Remove Facebook icon */}
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  {/* Remove Twitter icon */}
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  {/* Remove Instagram icon */}
                </Link>
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-400 hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  {/* Remove Phone icon */}
                  <span>+44 7840257852</span>
                </li>
                <li className="flex items-center text-gray-400">
                  {/* Remove Mail icon */}
                  <span>info@apnelec.co.uk</span>
                </li>
                <li className="flex items-center text-gray-400">
                  {/* Remove MapPin icon */}
                  <span>APN Elec 85 Howard Road, Sompting, Lancing, West Sussex
                    BN15 0LP</span>
                </li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for updates and special offers.
              </p>
              <div className="space-y-2">
            
              </div>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 py-6">
            <div className="text-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} APN Elec. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
};
export default Footer;