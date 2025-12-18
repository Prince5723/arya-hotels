import { Bed, UtensilsCrossed, Activity, Wine } from "lucide-react";

import Feature108  from "@/components/blocks/shadcnblocks-com-feature108"

const HotelData = {
  badge: "Our Amenities",
  heading: "Stay at Aarya Hotels Ramnagar",
  description: "Discover a perfect blend of comfort, elegance, and convenience at Aarya Hotels Ramnagar. Located in the heart of the city, our hotel offers premium facilities, well-appointed spaces, and attentive service to ensure a relaxing and seamless stay. Whether you are traveling for leisure or business, we provide a welcoming environment designed to make every moment comfortable and memorable.",
  tabs: [
    {
  value: "tab-1",
  icon: <Bed className="h-auto w-4 shrink-0" />,
  label: "Bedroom",
  content: {
    badge: "Luxury Accommodation",
    title: "Premium Rooms Designed for Rest and Privacy",
    description:
      "Experience luxury accommodation in Ramnagar with our thoughtfully designed rooms offering plush bedding, modern interiors, high-speed Wi-Fi, climate control, and ample workspace. Every detail is crafted to ensure deep rest, privacy, and comfort, making Aarya Hotels Ramnagar ideal for both leisure travelers and business guests.",
    buttonText: "Check Availability",
    imageSrc: "/bedroom1-ramnagar.jpeg",
    imageAlt: "Luxury hotel bedroom at Aarya Hotels Ramnagar",
  },
    },
    {
      value: "tab-2",
      icon: <UtensilsCrossed className="h-auto w-4 shrink-0" />,
      label: "Dining",
      content: {
        badge: "Culinary Excellence",
        title: "Our Specialty Restaurant: Bhojshala",
        description:
          "Step into Bhojshala, our specialty restaurant, where culinary tradition meets thoughtful craftsmanship. Experience a thoughtfully curated menu featuring authentic local delicacies alongside select international favorites, each prepared by expert chefs with fresh, high-quality ingredients. Set in a refined and welcoming ambiance, Bhojshala offers a dining experience that celebrates rich flavors, attentive service, and the joy of unhurried, memorable meals.",
        buttonText: "View Menu",
        imageSrc:
          "/IMG_4648.jpg",
        imageAlt: "Dining Area",
      },
    },
    {
  value: "tab-3",
  icon: <Activity className="h-auto w-4 shrink-0" />,
  label: "Activities",
  content: {
    badge: "Experiences & Leisure",
    title: "Curated Experiences for a Complete Stay",
    description:
      "Enhance your stay with curated indoor and outdoor experiences designed for relaxation and recreation. From peaceful lounging spaces to engaging local activities around Ramnagar, our hotel ensures guests enjoy a balanced stay that blends comfort, exploration, and leisure.",
    buttonText: "Discover Experiences",
    imageSrc: "/chilling-ramnagar.jpeg",
    imageAlt: "Leisure activities at Aarya Hotels Ramnagar",
  },
    },
    {
  value: "tab-4",
  icon: <Wine className="h-auto w-4 shrink-0" />,
  label: "Bar",
  content: {
    badge: "Exclusive Lounge",
    title: "Sophisticated Bar for Evenings That Unwind",
    description:
      "Indulge in a refined bar experience featuring premium spirits, handcrafted cocktails, and a relaxed upscale ambiance. Whether you are unwinding after a long day or enjoying a quiet evening, our bar offers the perfect setting for comfort, conversation, and indulgence.",
    buttonText: "Explore Bar",
    imageSrc: "/IMG_4642.jpg",
    imageAlt: "Luxury hotel bar at Aarya Hotels Ramnagar",
  },

    },
  ],
};

function FeatureHotelDemo() {
  return <Feature108 {...HotelData} />;
}

export { FeatureHotelDemo };
