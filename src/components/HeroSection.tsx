
import { Home, Bed, Bath } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen min-h-[900px] bg-cottage-hero bg-cover bg-center bg-no-repeat flex flex-col">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25"></div>
      
      {/* Navigation Header */}
      <div className="relative z-10 w-full pt-6 px-6">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Home className="w-3 h-3 text-black" />
            </div>
            <div className="text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2">
              Cold Spring Luxury Cottage
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-0">
            <button className="px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2 hover:bg-white/20 transition-all">
              Overview
            </button>
            <button className="px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2 hover:bg-white/20 transition-all">
              Gallery
            </button>
            <button className="px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2 hover:bg-white/20 transition-all">
              Location
            </button>
          </div>

          {/* Contact Button */}
          <button className="px-3 py-2 bg-white rounded-full shadow-lg backdrop-blur-sm text-black text-xs font-dm-mono font-medium uppercase tracking-wider-2 hover:bg-gray-100 transition-all">
            Contact
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 pb-6 pt-40">
        <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-14">
          {/* Hero Title and Features */}
          <div className="flex flex-col gap-8">
            {/* Main Title */}
            <div className="max-w-[476px]">
              <h1 className="text-white font-space-grotesk text-[88px] font-normal uppercase leading-[84.48px] tracking-tight">
                A New Era of Digital Ownership
              </h1>
            </div>

            {/* Feature Pills */}
            <div className="flex items-center gap-3">
              <div className="w-50 px-6 py-5 bg-glass-gradient backdrop-blur-sm rounded-full border border-white/20 shadow-lg flex flex-col items-center gap-2.5">
                <Home className="w-6 h-6 text-white/65" />
                <div className="text-white text-sm font-space-grotesk font-medium text-center">
                  2,100 SF
                </div>
              </div>
              
              <div className="w-50 px-6 py-5 bg-glass-gradient backdrop-blur-sm rounded-full border border-white/20 shadow-lg flex flex-col items-center gap-2.5">
                <Bed className="w-6 h-6 text-white/65" />
                <div className="text-white text-sm font-space-grotesk font-medium text-center">
                  3 Beds
                </div>
              </div>
              
              <div className="w-50 px-6 py-5 bg-glass-gradient backdrop-blur-sm rounded-full border border-white/20 shadow-lg flex flex-col items-center gap-2.5">
                <Bath className="w-6 h-6 text-white/65" />
                <div className="text-white text-sm font-space-grotesk font-medium text-center">
                  2 Baths
                </div>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="flex items-center gap-6">
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2">
                Property Type
              </div>
              <div className="text-white text-[40px] font-space-grotesk font-normal uppercase leading-[38.40px]">
                Cottage
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-1.5 text-center">
              <div className="text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2">
                Lot Size
              </div>
              <div className="text-white text-[40px] font-space-grotesk font-normal uppercase leading-[38.40px]">
                1.5 Acres
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-1.5 text-center">
              <div className="text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2">
                Built In
              </div>
              <div className="text-white text-[40px] font-space-grotesk font-normal uppercase leading-[38.40px]">
                Jun 2013
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-1.5 text-right">
              <div className="text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2">
                Availability
              </div>
              <div className="text-white text-[40px] font-space-grotesk font-normal uppercase leading-[38.40px]">
                For Sale
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
