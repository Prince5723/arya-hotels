"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactElement[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl",
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-surface disabled:opacity-50 hover:bg-accent"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-surface disabled:opacity-50 hover:bg-accent"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-primary/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-background p-4 font-sans md:p-10 border border-border"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary hover:bg-secondary"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-primary-foreground" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-secondary"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-secondary md:text-5xl"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="group relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-surface border border-border md:h-[40rem] md:w-96 cursor-pointer"
      >
        {/* Gradient overlay with enhanced hover effect */}
        <motion.div 
          className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-primary/70 via-transparent to-transparent"
          animate={{
            opacity: isHovered ? 0.7 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Click indicator badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 backdrop-blur-sm border border-border"
        >
          <span className="text-xs font-medium text-foreground">
            Click to expand
          </span>
          <svg
            className="h-4 w-4 text-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </motion.div>

        {/* Pulsing ring indicator */}
        <motion.div
          className="absolute inset-0 z-20 rounded-3xl border-2 border-secondary/50"
          animate={{
            scale: isHovered ? [1, 1.02, 1] : 1,
            opacity: isHovered ? [0.5, 0.8, 0.5] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-primary-foreground md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold text-balance text-primary-foreground md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>
        
        {/* Animated shine effect on hover */}
        <motion.div
          className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-background/15 to-transparent"
          animate={{
            x: isHovered ? ["0%", "200%"] : "-100%",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        />
        
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};