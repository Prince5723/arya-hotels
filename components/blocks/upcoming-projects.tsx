"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function UpcomingProjects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full bg-background">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-primary mb-8">
        Upcoming Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-surface p-8 md:p-14 rounded-3xl mb-4 border border-border"
          >
            <p className="text-foreground text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-secondary">
                The first rule of Fight club is that you dont talk about Fight club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://plus.unsplash.com/premium_photo-1687710306880-95c72d9a19c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVybiUyMGZhcm0lMjBob3VzZXxlbnwwfDF8MHx8fDA%3D"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Saidpur Farm House",
    title: "An escape from the city to nature",
    src: "https://plus.unsplash.com/premium_photo-1687710306880-95c72d9a19c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVybiUyMGZhcm0lMjBob3VzZXxlbnwwfDF8MHx8fDA%3D",
    content: <DummyContent />,
  },
  {
    category: "Varanasi",
    title: "Explore culture with Arya Hotels",
    src: "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFuYXJhc3xlbnwwfDF8MHx8fDA%3D",
    content: <DummyContent />,
  },
  {
    category: "Jaipur",
    title: "Take the royal route with Arya Hotels",
    src: "https://plus.unsplash.com/premium_photo-1678654259883-4d3cdcc0c853?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGphaXB1cnxlbnwwfDF8MHx8fDA%3D",
    content: <DummyContent />,
  },
];
