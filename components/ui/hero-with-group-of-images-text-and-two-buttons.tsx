import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Hero() {
  return (
    <div className="w-full pt-36 md:pt-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:gap-10 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">We&apos;re excited to host you</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Stay in the Heart of Ramnagar
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-foreground/80 max-w-md text-left">
                Experience comfort and luxury in the heart of Ramnagar. Our hotel offers modern amenities, warm hospitality, and easy access to local attractions, making it perfect for both business and leisure travelers.
              </p>
            </div>
            <div className="flex flex-row gap-4">
  <a
    href="https://wa.me/9319020033"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button size="lg" className="gap-4">
      Book Now <MoveRight className="w-4 h-4" />
    </Button>
  </a>

  <a
    href="https://wa.me/9319020033"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button size="lg" className="gap-4" variant="outline">
      Partner with us <PhoneCall className="w-4 h-4" />
    </Button>
  </a>
</div>

          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-muted rounded-md aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/IMG_4648.jpg)' }}></div>
            <div className="bg-muted rounded-md row-span-2 bg-cover bg-center" style={{ backgroundImage: 'url(/IMG_4634.jpg)' }}></div>
            <div className="bg-muted rounded-md aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/IMG_4642.jpg)' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
