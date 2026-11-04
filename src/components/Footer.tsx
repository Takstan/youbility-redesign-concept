import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C1A13] text-[#FAF8F5] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <a 
              href="#" 
              className="font-heading text-2xl font-bold tracking-tight text-white flex items-center gap-2 mb-4"
              aria-label="Youbility Inc."
            >
              <span className="w-3 h-3 rounded-sm bg-[#C27D53] inline-block" />
              <span>YOUBILITY INC.</span>
            </a>
            
            <p className="text-xs sm:text-sm text-[#D8CEAF]/80 leading-relaxed mb-6 max-w-sm">
              Toronto and the GTA's dedicated specialist in accessible home renovations, 
              roll-in curbless showers, exterior architectural ramps, and barrier-free commercial construction. 
              Over 15 years of master craftsmanship.
            </p>

            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#C27D53]" />
                <span>$5,000,000 General Liability & Full WSIB Coverage</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-4 h-4 text-[#C27D53]" />
                <span>AODA & Ontario Building Code Barrier-Free Compliant</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#DDA37D] mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#transformations" className="hover:text-white transition-colors">Before & After</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#consultation" className="hover:text-white transition-colors">Book Assessment</a></li>
            </ul>
          </div>

          {/* Services Scope (3 cols) */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#DDA37D] mb-4">
              Key Modifications
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              <li>Curbless Roll-In Showers</li>
              <li>Barrier-Free Kitchen Remodels</li>
              <li>Exterior Ramps & Porch Lifts</li>
              <li>Door Widening (36" Openings)</li>
              <li>Reinforced Structural Grab Rails</li>
              <li>AODA Commercial Washrooms</li>
              <li>Ontario Senior Safety Tax Credit Prep</li>
            </ul>
          </div>

          {/* Contact & Hours (3 cols) */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#DDA37D] mb-4">
              Direct Contact
            </div>
            <div className="space-y-3 text-xs text-white/80">
              <a 
                href="tel:4168004740" 
                className="flex items-center gap-2.5 hover:text-[#DDA37D] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C27D53]" />
                <span className="font-semibold text-white">(416) 800-4740</span>
              </a>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C27D53]" />
                <span>info@youbility.ca</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C27D53] shrink-0 mt-0.5" />
                <span>Serving Toronto, North York, Etobicoke, Scarborough, Markham, Vaughan, Richmond Hill & Mississauga</span>
              </div>

              <div className="pt-2 text-[11px] text-white/50 border-t border-white/10">
                Monday – Friday: 8:00 AM – 6:00 PM EST<br />
                Saturday: 9:00 AM – 2:00 PM EST
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Accessibility Commitment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Youbility Inc. All rights reserved. Ontario Registered Contractor.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Accessibility (AODA) Statement</span>
            <span aria-hidden="true">·</span>
            <span>Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
