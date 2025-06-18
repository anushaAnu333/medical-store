import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Utility</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pages"
                  className="text-gray-600 hover:text-gray-900">
                  Style Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/pages"
                  className="text-gray-600 hover:text-gray-900">
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  href="/pages"
                  className="text-gray-600 hover:text-gray-900">
                  Licenses
                </Link>
              </li>
              <li>
                <Link
                  href="/pages"
                  className="text-gray-600 hover:text-gray-900">
                  Instructions
                </Link>
              </li>
              <li>
                <Link
                  href="/pages"
                  className="text-gray-600 hover:text-gray-900">
                  Coming Soon
                </Link>
              </li>
              <li>
                <Link
                  href="/pages"
                  className="text-gray-600 hover:text-gray-900">
                  Link in Bio
                </Link>
              </li>
              <li>
                <Link
                  href="/pages"
                  className="text-gray-600 hover:text-gray-900">
                  404
                </Link>
              </li>
              <li>
                <Link
                  href="/pages"
                  className="text-gray-600 hover:text-gray-900">
                  Password Protected
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Address</h3>
            <p className="text-gray-600 mb-4">
              1234 Avenue City Name,
              <br />
              State Name, Country-98700
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600 mb-2">info@gmail@gmail.com</p>
            <p className="text-gray-600">+1 234 555 7654</p>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-gray-900 mr-4">
                Medifit
              </Link>
              <p className="text-gray-600 text-sm">
                We are using site to provide solutions to
                <br />
                all of your problems. That's all we need
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-700">
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-700">
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-700">
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-700">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Design By{" "}
              <a href="#" className="text-gray-900 font-semibold">
                Ashishkumaj
              </a>
              . Powered by{" "}
              <a href="#" className="text-gray-900 font-semibold">
                Webflow
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
