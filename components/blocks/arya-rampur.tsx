import { ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer } from "@/components/blocks/animated-gallery"
import { Button } from "@/components/ui/button"
import { VideoIcon } from "lucide-react"

const IMAGES_1 = [
  "/washroom-ramnagar.jpeg",
  "/bedroom1-ramnagar.jpeg",
  "https://q-xx.bstatic.com/xdata/images/hotel/square600/514675068.webp?k=bda5ade0144cc71e6fbca57dbb1635f396f6eabc0593e14e3096c6e07caa4461&o=",
  "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG9reW98ZW58MHwwfDB8fHwy",
]
const IMAGES_2 = [
  "/dining-area-ramnagar.jpeg",
  "/chilling-ramnagar.jpeg",
  "/terrace-ramnagar.jpeg",
  "/washroom-ramnagar.jpeg",
]
const IMAGES_3 = [
  "/bedroom2-ramnagar.jpeg",
  "/bedroom3-ramnagar.jpeg",
  "https://content3.jdmagicbox.com/comp/nainital/j9/9999p5942.5942.221013185632.y2j9/catalogue/a3-queen-corbett-corbett-national-park-corbett-hotels-mxbhgp28sh.jpg",
  "https://images.unsplash.com/photo-1608875004752-2fdb6a39ba4c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

export const AryaRampur = () => {
  return (
    <div className="relative bg-background ">
      <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-6 pt-12 text-center">
        <ContainerAnimated>
          <h1 className="font-serif text-4xl font-extralight  md:text-5xl text-primary">
            Our{" "}
            <span className=" font-serif font-extralight text-secondary">
              Rampur Branch
            </span>
          </h1>
        </ContainerAnimated>
        <ContainerAnimated>
          <h1 className="font-serif text-4xl font-extralight md:text-5xl text-primary">
            is now operational
          </h1>
        </ContainerAnimated>

        <ContainerAnimated className="my-4">
          <p className="leading-normal tracking-tight text-lg text-foreground">
            Aarya Hotels Rampur offers a premium stay with modern amenities, warm hospitality, <br/> and easy access for business and leisure travellers. Experience a comfortable, well <br/> connected hotel in Rampur that delivers relaxation, convenience, and reliable service.
          </p>
        </ContainerAnimated>

        <ContainerAnimated>
          <Button
            className="gap-1 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Book Now <VideoIcon className="size-4  " />
          </Button>
          <Button variant={"link"} className="text-primary">
            About Us
          </Button>
        </ContainerAnimated>
      </ContainerStagger>
      <div className="pointer-events-none absolute z-10 h-[70vh] w-full "
      style={{
            background: "linear-gradient(to right, var(--color-lavander-clay), var(--color-burnt-caramel), var(--color-velvet-garnet))",
            filter: "blur(84px)",
            mixBlendMode: "screen",
          }}
      />

      <ContainerScroll className="relative h-[350vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer className="">
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {IMAGES_1.map((imageUrl, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
                  src={imageUrl}
                  alt="gallery item"
                />
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
              {IMAGES_2.map((imageUrl, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
                  src={imageUrl}
                  alt="gallery item"
                />
              ))}
            </GalleryCol>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {IMAGES_3.map((imageUrl, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
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
