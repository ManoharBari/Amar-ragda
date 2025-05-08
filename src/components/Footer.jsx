import React from 'react';
import { Utensils } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Address */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Utensils className="h-6 w-6 text-orange-600" />
              <span className="ml-2 text-lg font-semibold">Amar Ragda</span>
            </div>
            <div className="text-sm text-gray-600">
              <p className="font-semibold">Address:</p>
              <p>MJ College Rd, Ramdas Colony, Jalgaon, Maharashtra 425002, India</p>
            </div>
            <div className="text-sm text-gray-600">
              <p className="font-semibold">Contact:</p>
              <p>1800 123 456</p>
              <p>info@amar-ragda.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/menu" className="hover:text-orange-600">Menu Items</a></li>
              <li><a href="#" className="hover:text-orange-600">Special Offers</a></li>
              <li><a href="/contact" className="hover:text-orange-600">Contact Us</a></li>
              <li><a href="/about" className="hover:text-orange-600">About Us</a></li>
              <li><a href="#" className="hover:text-orange-600">Testimonials</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-600">Facebook Page</a></li>
              <li><a href="#" className="hover:text-orange-600">Instagram Feed</a></li>
              <li><a href="#" className="hover:text-orange-600">Twitter Updates</a></li>
              <li><a href="#" className="hover:text-orange-600">YouTube Channel</a></li>
              <li><a href="#" className="hover:text-orange-600">LinkedIn Profile</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-600">Cookie Settings</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-sm text-gray-600">
          <p>© 2024 Amar Ragda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;