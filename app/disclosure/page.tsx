import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DisclosurePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-primary/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Affiliate Disclosure
          </h1>
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </div>
      </section>

      <section className="py-12 flex-1 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <h2 className="font-serif font-bold text-2xl text-foreground mt-8 mb-4">
              FTC Disclosure Compliance
            </h2>
            <p>
              In accordance with the FTC guidelines concerning the use of endorsements and testimonials in advertising,
              we want to make you aware of the following:
            </p>

            <h2 className="font-serif font-bold text-2xl text-foreground mt-8 mb-4">
              Amazon Associates Program
            </h2>
            <p>
              This website is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
              program designed to provide a means for sites to earn advertising fees by advertising and linking to
              Amazon.com.
            </p>
            <p>
              As an Amazon Associate, we earn from qualifying purchases. This means that when you click on links to
              various products on this site and make a purchase, we may receive a small commission at no additional
              cost to you.
            </p>

            <h2 className="font-serif font-bold text-2xl text-foreground mt-8 mb-4">
              Product Reviews
            </h2>
            <p>
              Our product reviews are based on our honest opinions and experiences. While we may receive compensation
              for purchases made through our links, this does not influence our reviews or recommendations. We only
              recommend products that we believe will provide value to our readers.
            </p>

            <h2 className="font-serif font-bold text-2xl text-foreground mt-8 mb-4">
              Price and Availability
            </h2>
            <p>
              Product prices and availability are accurate as of the date/time indicated and are subject to change.
              Any price and availability information displayed on Amazon at the time of purchase will apply to the
              purchase of the product.
            </p>

            <h2 className="font-serif font-bold text-2xl text-foreground mt-8 mb-4">
              Questions?
            </h2>
            <p>
              If you have any questions about our affiliate relationships or this disclosure, please contact us
              through our <a href="/contact" className="text-primary hover:underline">contact page</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
