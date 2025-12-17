'use client';
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// TypeScript interface for each team member
interface TeamMember {
  imageSrc: string;
  name?: string;
  role?: string;
  themeColor?: string;
}

// Props for the main component
interface TeamShowcaseProps {
  title?: string;
  description?: string;
  buttonText?: string;
  members: TeamMember[];
}

const TeamShowcase = React.forwardRef<HTMLDivElement, TeamShowcaseProps>(
  (
    {
      title = "DISCOVER STAYS THAT STAY WITH YOU",
      description =
        "Blending tradition with modern luxury, Aarya Hotels creates meaningful stays designed for comfort, connection, and lasting impressions.",
      buttonText = "FIND YOUR DEVELOPER",
      members,
      ...props
    },
    ref
  ) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
      },
    };

    const cardVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      },
    };

    return (
      <section
        ref={ref}
        className={cn(
          "w-full bg-background text-foreground pt-36 md:pt-26 pb-16 px-4 md:pb-16 md:px-8"
        )}
        {...props}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mt-8 md:mt-24">
          {/* Header Section */}
          <div className="max-w-xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-primary">
              {title}
            </h1>
            <p className="text-foreground mb-8">{description}</p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <a
                  href="https://wa.me/9319020033"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a
                  href="https://wa.me/9319020033"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Partner With Us
                </a>
              </Button>
            </div>
          </div>

          {/* Members Showcase Section */}
          <motion.div
            className="
              w-full
              flex
              flex-col
              items-center
              gap-6
              sm:flex-row
              sm:justify-center
              sm:items-end
              sm:-space-x-8
              md:space-x-4
              px-4
            "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {members.map((member, index) => (
                <motion.div
                  key={member.imageSrc + index}
                  className="w-full max-w-[220px] md:max-w-[250px]"
                  whileHover={{ y: -6, scale: 1.03, zIndex: 40 }}
                  style={{ zIndex: index + 1 }}
                  // variants={cardVariants}
                >
                  <div className="relative rounded-3xl overflow-hidden h-[280px] md:h-[350px]">
                    <img
                      src={member.imageSrc}
                      alt={member.name ?? "Gallery image"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    );
  }
);

TeamShowcase.displayName = "TeamShowcase";

export { TeamShowcase };
export type { TeamMember, TeamShowcaseProps };
