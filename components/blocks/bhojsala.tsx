import { BhojsalaHero } from "@/components/ui/bhojsala";

export default function BhojsalaSection() {
    return (
        <BhojsalaHero
            heading={
                <>
                    Bhojsala : 
                    <span className="text-primary"> A Culinary Experience</span>
                </>
            }
            subtitle="Bhojsala is our speciality restaurant welcoming both hotel guests and visitors, offering authentic flavours in a refined dining atmosphere. Bhojsala is known for its authentic flavors,
                            traditional recipes, and a warm dining experience that reflects
                            rich culinary heritage. Every dish is carefully prepared using
                            fresh ingredients to deliver comfort, taste, and consistency for
                            families and food lovers alike."
            backgroundImage="/IMG_4648.jpg"
            phone="+91 93190 20033"
            location="Jim Corbett Hotel, Ramnagar (Uttarakhand)"
        />

    );
}
