import React from "react";
import { InlineWidget } from "react-calendly";
import {
  Mail,
  Phone,
  Instagram,
  Twitter,
} from "lucide-react"; // Optional: for icons, run `npm install lucide-react`

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-lg">cloutnine.work@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-green-600" />
              <span className="text-lg">9137612106</span>
            </div>
            <div className="flex items-center space-x-3">
              <Instagram className="w-5 h-5 text-pink-500" />
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline"
              >
                @yourprofile
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Twitter className="w-5 h-5 text-blue-400" />
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline"
              >
                @yourprofile
              </a>
            </div>
          </div>

          {/* Calendly Widget */}
          <div className="w-full">
            <InlineWidget url="https://calendly.com/your-calendly-link" styles={{ height: "600px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
