"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Our stay at AARYA Hotels Ramnagar was absolutely wonderful! The rooms were spacious and beautifully decorated, with all the modern amenities we needed. The staff was incredibly welcoming and attentive throughout our visit.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Priya Sharma",
    role: "Business Traveler",
  },
  {
    text: "The dining experience exceeded our expectations. The food was delicious, and the dining area had such a warm, inviting atmosphere. We enjoyed every meal during our stay and would definitely return.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Rajesh Kumar",
    role: "Family Guest",
  },
  {
    text: "The hotel's location in the heart of Ramnagar made it perfect for exploring the area. The staff went above and beyond to help us plan our activities and made excellent recommendations for local attractions.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Anita Desai",
    role: "Tourist",
  },
  {
    text: "We loved the bar area - it was the perfect place to unwind after a day of sightseeing. The ambiance was sophisticated, and the service was impeccable. AARYA Hotels truly knows how to make guests feel special.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Vikram Singh",
    role: "Leisure Traveler",
  },
  {
    text: "The bedroom was so comfortable and well-appointed. We had the best night's sleep during our stay. The attention to detail in the room design and amenities really made a difference in our experience.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Meera Patel",
    role: "Couple",
  },
  {
    text: "AARYA Hotels provided exceptional hospitality from check-in to check-out. The combination of traditional warmth and modern luxury created a memorable stay. We highly recommend this hotel to anyone visiting Ramnagar.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Kavita Reddy",
    role: "Solo Traveler",
  },
  {
    text: "The activities and facilities at the hotel kept us engaged throughout our stay. Whether relaxing in the common areas or exploring nearby attractions, everything was convenient and well-organized.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Amit Verma",
    role: "Group Traveler",
  },
  {
    text: "What impressed us most was the level of service. Every staff member was friendly, professional, and eager to help. The hotel truly embodies the spirit of Indian hospitality with modern comforts.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sunita Joshi",
    role: "Repeat Guest",
  },
  {
    text: "Our experience at AARYA Hotels was outstanding. The perfect blend of comfort, convenience, and excellent service made our trip to Ramnagar unforgettable. We'll definitely be back!",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Rahul Mehta",
    role: "Corporate Guest",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our guests say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our guests have to say about their stay at AARYA Hotels.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;