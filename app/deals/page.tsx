import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"

const deals = [
  {
    title: "Professional Stand Mixer - Limited Time Offer",
    image: "/stand-mixer.png",
    rating: 4.8,
    reviewCount: 1240,
    badge: "20% OFF",
  },
  {
    title: "Cast Iron Dutch Oven Bundle",
    image: "/dutch-oven.jpg",
    rating: 4.9,
    reviewCount: 2103,
    badge: "Best Deal",
  },
  {
    title: "Digital Kitchen Scale - Flash Sale",
    image: "/digital-kitchen-scale.jpg",
    rating: 4.6,
    reviewCount: 672,
    badge: "15% OFF",
  },
]

export default function DealsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-primary/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Deals & Discounts
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            The best current deals on baking equipment. Updated regularly to bring you the latest savings.
          </p>
        </div>
      </section>

      <section className="py-12 flex-1 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal, index) => (
              <ProductCard key={index} {...deal} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Prices and availability are subject to change. As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
