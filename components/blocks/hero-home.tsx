'use client'
import { TeamShowcase, TeamMember } from "@/components/ui/team-showcase";
import {HeroHeader} from "@/components/blocks/navbar";
// Sample data for the demo
const developers: TeamMember[] = [
  {
    imageSrc: "https://content3.jdmagicbox.com/comp/nainital/j9/9999p5942.5942.221013185632.y2j9/catalogue/a3-queen-corbett-corbett-national-park-corbett-hotels-mxbhgp28sh.jpg",
  },
  {
    imageSrc: "IMG_4648.jpg",
  },
  {
    imageSrc: "IMG_4643.jpg",
  },
  {
    imageSrc: "IMG_4627.jpg",
  },
];

export default function HeroHome() {
  return (
    <>
      <HeroHeader />
      <TeamShowcase members={developers} />
    </>
  )
}