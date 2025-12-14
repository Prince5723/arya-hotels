import { ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer } from "@/components/blocks/animated-gallery"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { VideoIcon } from "lucide-react"

const IMAGES_1 = [
  "/IMG_4631.jpg",
  "/IMG_4642.jpg",
  "/IMG_4640.jpg",
  "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG9reW98ZW58MHwwfDB8fHwy",
]
const IMAGES_2 = [
  "/IMG_4696.jpg",
  "/chilling-ramnagar.jpeg",
  "/IMG_4702.jpg",
  "/IMG_4681.jpg",
]
const IMAGES_3 = [
  "/IMG_4632.jpg",
  "/IMG_4694.jpg",
  "https://content3.jdmagicbox.com/comp/nainital/j9/9999p5942.5942.221013185632.y2j9/catalogue/a3-queen-corbett-corbett-national-park-corbett-hotels-mxbhgp28sh.jpg",
  "https://images.unsplash.com/photo-1608875004752-2fdb6a39ba4c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

export const AryaRamnagar = () => {
  return (
    <div className="relative bg-background">
      <ContainerStagger className="relative z-[9999] -mb-8 md:-mb-12 place-self-center px-4 md:px-6 text-center">
        <ContainerAnimated>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extralight text-primary">
            Our{" "}
            <span className="font-serif font-extralight text-secondary">
              Ramnagar Branch
            </span>
          </h1>
        </ContainerAnimated>
        <ContainerAnimated>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extralight text-primary">
            is now operational
          </h1>
        </ContainerAnimated>

        <ContainerAnimated className="my-3 md:my-4">
          <p className="leading-relaxed md:leading-normal tracking-tight text-sm md:text-base lg:text-lg text-foreground max-w-3xl mx-auto">
            Aarya Hotels Ramnagar offers a premium stay with modern amenities, warm hospitality, and easy access for business and leisure travellers. Experience a comfortable, well connected hotel in Ramnagar that delivers relaxation, convenience, and reliable service.
          </p>
        </ContainerAnimated>

        <ContainerAnimated>
          <Button
            asChild
            className="gap-1 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="https://wa.me/919319020033" target="_blank" rel="noopener noreferrer">
              Book Now 
            </Link>
          </Button>
        </ContainerAnimated>
      </ContainerStagger>
      
      <div className="pointer-events-none absolute z-10 h-[50vh] md:h-[70vh] w-full"
        style={{
          background: "linear-gradient(to right, var(--color-lavander-clay), var(--color-burnt-caramel), var(--color-velvet-garnet))",
          filter: "blur(84px)",
          mixBlendMode: "screen",
        }}
      />

      <ContainerScroll className="relative h-[150vh] md:h-[300vh] lg:h-[350vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer className="">
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {IMAGES_1.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageUrl}
                  alt="gallery item"
                />
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
              {IMAGES_2.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageUrl}
                  alt="gallery item"
                />
              ))}
            </GalleryCol>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2 hidden md:flex">
              {IMAGES_3.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageUrl}
                  alt="gallery item"
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  )
}