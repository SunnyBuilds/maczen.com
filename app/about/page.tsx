import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary/10 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              About Baking Queen
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Your trusted companion in the world of home baking
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted mb-8">
                <img src="/artisan-bakery.jpg" alt="About Baking Queen" className="h-full w-full object-cover" />
              </div>

              <div className="space-y-6 text-foreground">
                <p className="leading-relaxed">
                  Welcome to Baking Queen, where passion for baking meets practical guidance. We're a team of dedicated
                  home bakers who understand the joy and challenges of creating artisanal bread, pastries, and desserts
                  in a home kitchen.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Our Mission</h2>
                <p className="leading-relaxed">
                  Our mission is to help city apartment dwellers and home baking enthusiasts discover the best tools,
                  ingredients, and techniques for creating bakery-quality results at home. We believe that everyone
                  deserves access to honest, detailed product reviews and expert baking advice.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">What We Do</h2>
                <p className="leading-relaxed">
                  We rigorously test baking equipment, compare ingredients, and share our findings through comprehensive
                  reviews and guides. Every product recommendation on our site has been personally tested and evaluated
                  by our team of experienced bakers.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Our Values</h2>
                <ul className="space-y-2">
                  <li className="leading-relaxed">
                    <strong>Honesty:</strong> We provide unbiased reviews based on real testing
                  </li>
                  <li className="leading-relaxed">
                    <strong>Expertise:</strong> Our team has years of baking experience
                  </li>
                  <li className="leading-relaxed">
                    <strong>Community:</strong> We're here to support your baking journey
                  </li>
                  <li className="leading-relaxed">
                    <strong>Quality:</strong> We only recommend products we truly believe in
                  </li>
                </ul>

                <p className="leading-relaxed mt-8">
                  Thank you for trusting Baking Queen as your guide to home baking. We're excited to be part of your
                  culinary journey!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
