'use client';
import React, { useState } from 'react';
import { 
  TreePine, Sparkles, Map, Music, Wine, 
  Coffee, Info, CheckCircle2, Star, Snowflake, Zap
} from 'lucide-react';

// --- Types ---
type ThemeType = 'christmas' | 'newyear' | 'safari' | 'daily';

interface Package {
  id: string;
  theme: ThemeType;
  tag: string;
  title: string;
  price: string;
  validity: string;
  description: string;
  inclusions: string[];
  policy: string;
  isSafariIncluded?: boolean;
}

// --- Package Data ---
const packages: Record<string, Package[]> = {
  "Christmas": [
    {
      id: "c1",
      theme: "christmas",
      tag: "Festive Grandeur",
      title: "Christmas 2 Night 3 Day Stay",
      price: "25,999",
      validity: "Check-in: 24th Dec | Check-out: 26th Dec",
      description: "Celebrate a traditional Christmas with a touch of wilderness and luxury dinner events.",
      inclusions: [
        "Stay for 02-night stay",
        "Welcome drink on arrival",
        "Daily Breakfast, Lunch, Dinner and Hi-tea",
        "24th Night: DJ, Gala dinner with unlimited 2+2 snacks",
        "Hot and cold soft beverages included",
        "Free 01 tiger safari during stay"
      ],
      isSafariIncluded: true,
      policy: "Child < 5 yrs: Free | 6-12 yrs: 25% extra cost | 13+ yrs: 35% extra cost"
    },
    {
      id: "c2",
      theme: "christmas",
      tag: "Holiday Express",
      title: "Christmas 1 Night 2 Day Stay",
      price: "12,599",
      validity: "Check-in: 24th Dec | Check-out: 25th Dec",
      description: "A quick festive escape featuring live music and a grand gala dinner.",
      inclusions: [
        "Stay for 01-night stay",
        "Welcome drink on arrival",
        "Breakfast, Dinner and Hi-tea",
        "24th Night: Live Music with Gala Dinner",
        "Unlimited 2+2 snacks & hot/cold soft beverages",
        "Free 01 tiger safari during stay"
      ],
      isSafariIncluded: true,
      policy: "Child < 5 yrs: Free | 6-12 yrs: 25% extra cost | 13+ yrs: 35% extra cost"
    }
  ],
  "New Year": [
    {
      id: "ny1",
      theme: "newyear",
      tag: "The Big Countdown",
      title: "NYE Grand 2 Night Stay",
      price: "29,999",
      validity: "Check-in: 30th Dec | Check-out: 1st Jan",
      description: "Ring in the new year with premium liquor, DJ nights, and high-adrenaline safaris.",
      inclusions: [
        "Stay for 02-night stay",
        "Welcome drink on arrival",
        "Daily Breakfast, Lunch, Dinner and Hi-tea",
        "31st Dec: DJ, Gala dinner with 2+2 snacks",
        "Unlimited liquor for 02 hours",
        "Free 01 tiger safari during stay"
      ],
      isSafariIncluded: true,
      policy: "Child < 5 yrs: Free | 6-12 yrs: 25% extra cost | 13+ yrs: 35% extra cost"
    },
    {
      id: "ny2",
      theme: "newyear",
      tag: "Midnight Party",
      title: "NYE Celebration 1 Night Stay",
      price: "12,999",
      validity: "Check-in: 31st Dec | Check-out: 1st Jan",
      description: "Celebrate with an explosive DJ night and unlimited snacks at the heart of Ramnagar.",
      inclusions: [
        "Stay for 01-night stay",
        "Welcome drink on arrival",
        "Hi-tea on 31st Dec & Breakfast on 1st Jan",
        "DJ Night on 31st Dec",
        "Gala dinner with unlimited 2+2 snacks",
        "Unlimited liquor for 02 hours"
      ],
      policy: "Child < 5 yrs: Free | 6-12 yrs: 25% extra cost | 13+ yrs: 35% extra cost"
    },
    {
      id: "ny3",
      theme: "newyear",
      tag: "Evening Pass",
      title: "NYE Gala (No Stay)",
      price: "7,999",
      validity: "31st Dec Night",
      description: "The premium party-only pass for couples seeking the best gala in town.",
      inclusions: [
        "Couple Entry to DJ Night",
        "Gala dinner with buffet food",
        "Unlimited 2+2 snacks",
        "Unlimited liquor for 02 hours"
      ],
      policy: "Child < 5 yrs: Free | 6-12 yrs: 25% cost | 13+ yrs: 35% cost"
    }
  ],
  "Weekend/Weekdays": [
    {
      id: "w1",
      theme: "safari",
      tag: "Tiger Trail",
      title: "Weekend 2 Night 3 Day Stay",
      price: "24,999",
      validity: "Friday to Sunday (Per Night)",
      description: "Indulge in wildlife adventures and premium beverages served in-room.",
      inclusions: [
        "Stay with Breakfast, Lunch & Dinner",
        "One Tiger Safari included during stay",
        "Daily evening Hi-tea",
        "All day free Tea/Coffee & soft beverages",
        "In-room: 2 Beer cans & 6 pegs liquor (60ml) per day",
        "2 portions of 2 veg snack per day (In-room)"
      ],
      isSafariIncluded: true,
      policy: "Child < 5 yrs: Free | 6-12 yrs: 25% | 13+ yrs: 35% of package cost"
    },
    {
      id: "w2",
      theme: "safari",
      tag: "Mid-Week Zen",
      title: "Weekday 2 Night 3 Day Stay",
      price: "21,999",
      validity: "Monday to Thursday (Per Night)",
      description: "A peaceful mid-week jungle retreat with all-inclusive premium perks.",
      inclusions: [
        "Stay with Breakfast, Lunch & Dinner",
        "One Tiger Safari included during stay",
        "Daily evening Hi-tea",
        "All day free Tea/Coffee & soft beverages",
        "In-room: 2 Beer cans & 6 pegs liquor (60ml) per day",
        "2 portions of 2 veg snack per day (In-room)"
      ],
      isSafariIncluded: true,
      policy: "Child < 5 yrs: Free | 6-12 yrs: 25% | 13+ yrs: 35% of package cost"
    }
  ],
  "Daily Rates": [
    {
      id: "d1",
      theme: "daily",
      tag: "Bed & Breakfast",
      title: "Standard Double Room (CP+)",
      price: "3,500",
      validity: "Per Night Stay",
      description: "A comfortable luxury stay with our signature breakfast and hi-tea.",
      inclusions: [
        "Standard Double Room Stay",
        "Breakfast included",
        "Hi-tea with snacks in evening"
      ],
      policy: "Subject to tax. Child policies apply as per standard rates."
    },
    {
      id: "d2",
      theme: "daily",
      tag: "Breakfast & Meal",
      title: "Standard Double Room (MAP+)",
      price: "5,500",
      validity: "Per Night Stay",
      description: "Best for foodies: Includes breakfast and your choice of lunch or dinner.",
      inclusions: [
        "Standard Double Room Stay",
        "Breakfast included",
        "Lunch or Dinner (Your choice)",
        "Hi-tea with snacks in evening"
      ],
      policy: "Subject to tax. Child policies apply as per standard rates."
    }
  ]
};

const ThemeDecorator = ({ type }: { type: ThemeType }) => {
  if (type === 'christmas') {
    return (
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 overflow-hidden">
        <Snowflake className="absolute top-2 left-4 text-white" size={20} />
        <Snowflake className="absolute top-10 right-10 text-white" size={32} />
        <div className="absolute -top-10 -right-10 border-[60px] border-transparent border-t-white/30 rounded-full" />
      </div>
    );
  }
  if (type === 'newyear') {
    return (
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-25 overflow-hidden">
        <Sparkles className="absolute top-4 right-4 text-amber-300" size={24} />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      </div>
    );
  }
  if (type === 'safari') {
    return (
      <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none opacity-5 flex justify-end items-end p-4">
        <Zap size={140} className="rotate-12" />
      </div>
    );
  }
  return null;
};

const PackageSection = () => {
  const [activeTab, setActiveTab] = useState("Christmas");
  const categories = ["Christmas", "New Year", "Weekend/Weekdays", "Daily Rates"];

  // --- WhatsApp Redirect Handler ---
  const handleBooking = (packageTitle: string) => {
    const phoneNumber = "919319020033";
    const message = encodeURIComponent(`Hi Aarya, I would like to reserve my stay for: ${packageTitle}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-[#F5F1ED] py-20 px-4 md:px-12" id="packages">
      <div className="max-w-7xl mx-auto">
        {/* Title Block matching Aarya Website style */}
        <div className="text-center mb-16">
          <h2 className="text-[#5D1C3C] text-5xl font-serif mb-4 uppercase tracking-tight">Our Special Packages</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#A07A4B]"></div>
            <p className="text-[#A07A4B] font-medium tracking-widest text-sm italic">Stay with Aarya, stay with luxury</p>
            <div className="h-[1px] w-12 bg-[#A07A4B]"></div>
          </div>
        </div>

        {/* Custom Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-0 mb-16 border-b border-[#A07A4B]/20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-4 transition-all duration-300 font-serif text-lg relative ${
                activeTab === cat 
                ? "text-[#5D1C3C] border-b-2 border-[#5D1C3C]" 
                : "text-gray-400 hover:text-[#5D1C3C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {packages[activeTab].map((pkg) => (
            <div key={pkg.id} className="bg-white group relative shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col border border-gray-100">
              
              {/* Card Header with Theme Overlays */}
              <div className="bg-[#5D1C3C] py-5 px-8 relative overflow-hidden">
                <ThemeDecorator type={pkg.theme} />
                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-bold">{pkg.tag}</span>
                  {pkg.isSafariIncluded && (
                    <div className="flex items-center gap-1 bg-[#A07A4B] px-2 py-0.5 rounded-full text-[9px] text-white font-bold uppercase">
                      <Star size={10} fill="white" /> Safari Included
                    </div>
                  )}
                </div>
                <h3 className="relative z-10 text-white text-3xl font-serif mt-2">{pkg.title}</h3>
              </div>

              <div className="p-8 flex-grow">
                {/* Price Area */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-[#A07A4B]">₹{pkg.price}</span>
                  <span className="text-sm text-gray-400 font-medium">+ tax</span>
                </div>
                <p className="text-[#5D1C3C] text-xs font-bold uppercase tracking-widest mb-6">{pkg.validity}</p>
                
                <p className="text-gray-600 text-sm mb-8 leading-relaxed italic border-l-2 border-[#A07A4B]/30 pl-4">
                  {pkg.description}
                </p>

                {/* Detailed Inclusions List */}
                <div className="space-y-4 mb-10">
                   <p className="text-[#5D1C3C] text-[11px] font-black uppercase tracking-widest border-b pb-2">What's included in the stay:</p>
                  {pkg.inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-sm text-gray-700">
                      <div className="mt-1 flex-shrink-0 text-[#A07A4B]">
                        {item.includes('Safari') ? <Map size={16}/> : 
                         item.includes('DJ') || item.includes('Music') ? <Music size={16}/> :
                         item.includes('liquor') || item.includes('Beer') ? <Wine size={16}/> : <CheckCircle2 size={16}/>}
                      </div>
                      <span className="font-medium leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Detailed Child Policy Info Box */}
                <div className="mt-auto bg-[#F5F1ED] p-5 border-l-4 border-[#5D1C3C]">
                  <div className="flex items-start gap-3">
                    <Info size={16} className="mt-1 text-[#5D1C3C] flex-shrink-0"/>
                    <div className="space-y-1">
                      <p className="text-[11px] font-bold text-[#5D1C3C] uppercase">Child & Extra Bed Policy</p>
                      <p className="text-[11px] text-gray-600 leading-normal italic">{pkg.policy}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => handleBooking(pkg.title)}
                className="w-full cursor-pointer bg-[#F5F1ED] group-hover:bg-[#5D1C3C] text-[#5D1C3C] group-hover:text-white py-5 font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 border-t border-gray-100"
              >
                Reserve Your Stay
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageSection;