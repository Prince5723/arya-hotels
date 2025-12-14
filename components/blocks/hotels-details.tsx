import { Bed, UtensilsCrossed, Activity, Wine } from "lucide-react";

import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108"

const HotelData = {
  badge: "Our Amenities",
  heading: "Stay in the Heart of Ramnagar",
  description: "Experience comfort and luxury with our premium facilities.",
  tabs: [
    {
      value: "tab-1",
      icon: <Bed className="h-auto w-4 shrink-0" />,
      label: "Bedroom",
      content: {
        badge: "Comfortable Stay",
        title: "Luxurious Bedrooms for Your Comfort",
        description:
          "Relax in our spacious, well-appointed bedrooms featuring modern amenities, premium bedding, and elegant decor. Each room is designed to provide the perfect blend of comfort and style for a restful stay.",
        buttonText: "Book Now",
        imageSrc:
          "/bedroom1-ramnagar.jpeg",
        imageAlt: "Bedroom",
      },
    },
    {
      value: "tab-2",
      icon: <UtensilsCrossed className="h-auto w-4 shrink-0" />,
      label: "Dining",
      content: {
        badge: "Culinary Excellence",
        title: "Exquisite Dining Experience",
        description:
          "Savor delicious meals prepared by our expert chefs. Our dining area offers a warm, inviting atmosphere where you can enjoy local and international cuisine made with fresh, quality ingredients.",
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
        badge: "Entertainment & Recreation",
        title: "Engaging Activities for All Ages",
        description:
          "Make the most of your stay with our range of activities. From outdoor adventures to indoor entertainment, we offer something for everyone to enjoy during their visit to Ramnagar.",
        buttonText: "Explore Activities",
        imageSrc:
          "/chilling-ramnagar.jpeg",
        imageAlt: "Activities",
      },
    },
    {
      value: "tab-4",
      icon: <Wine className="h-auto w-4 shrink-0" />,
      label: "Bar",
      content: {
        badge: "Relax & Unwind",
        title: "Premium Bar Experience",
        description:
          "Unwind at our elegant bar with a selection of fine beverages, cocktails, and spirits. The perfect place to relax after a day of exploring or to socialize with fellow guests in a sophisticated setting.",
        buttonText: "Visit Bar",
        imageSrc:
          "/IMG_4642.jpg",
        imageAlt: "Bar",
      },
    },
  ],
};

function FeatureHotelDemo() {
  return <Feature108 {...HotelData} />;
}

export { FeatureHotelDemo };
