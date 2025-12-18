import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-primary/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Editorial Policy
          </h1>
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </div>
      </section>

      <section className="py-12 flex-1 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <h2 className="font-serif font-bold text-2xl text-foreground mt-8 mb-4">
              Our Commitment to Quality
            </h2>
            <p>
              We are committed to providing accurate, helpful, and unbiased information to help you make informed
              decisions about baking equipment and ingredients.
            </p>

            <h2 className="font-serif font-bold text-2xl text-foreground mt-8 mb-4">
              Testing Methodology
            </h2>
            <p>
              Our product reviews are based on hands-on testing in real baking conditions. We evaluate products
              based on the following criteria:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Performance</strong> - How well does the product perform its intended function?</li>
              <li><strong>Build Quality</strong> - Is the product well-made and durable?</li>
              <li><strong>Ease of Use</strong> - Is the product intuitive and user-friendly?</li>
              <li><strong>Value</strong> - Does the product offer good value for its price?</li>
              <li><strong>Cleaning & Maintenance</strong> - How easy is it to clean and maintain?</li>
            </ul>

            <h2 className="font-serif font-bold text-2xl text-foreground mt-8 mb-4">
              Editorial Independence
            </h2>
            <p>
              Our editorial content is independent of our affiliate relationships. While we may earn commissions
              from purchases made through our links, this never influences our reviews or recommendations. We
              maintain strict separation between our editorial and business operations.
            </p>

            <h2 className="font-serif font-bold text-2xl text-foreground mt-8 mb-4">
              Corrections Policy
            </h2>
            <p>
              We strive for accuracy in all our content. If we discover an error, we will correct it promptly
              and transparently. If you notice any inaccuracies, please contact us so we can address them.
            </p>

            <h2 className="font-serif font-bold text-2xl text-foreground mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about our editorial policy or would like to provide feedback, please visit
              our <a href="/contact" className="text-primary hover:underline">contact page</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
