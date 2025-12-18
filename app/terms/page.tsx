import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary/10 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Last updated: December 15, 2024</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="space-y-6 text-foreground">
                <h2 className="font-serif text-2xl font-bold text-foreground">Agreement to Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using Baking Queen, you accept and agree to be bound by the terms and provisions of
                  this agreement. If you do not agree to these terms, please do not use our website.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">Use of Website</h2>
                <p className="leading-relaxed">
                  You may use our website for lawful purposes only. You agree not to use our website in any way that
                  could damage, disable, or impair the site or interfere with any other party's use of the website.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content on this website, including text, images, logos, and graphics, is the property of Baking
                  Queen and is protected by copyright laws. You may not reproduce, distribute, or create derivative
                  works without our express written permission.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">Affiliate Disclosure</h2>
                <p className="leading-relaxed">
                  Baking Queen participates in affiliate marketing programs. This means we may earn a commission when
                  you click on links to products we recommend and make a purchase. This comes at no additional cost to
                  you and helps support our website operations.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">
                  Product Reviews and Recommendations
                </h2>
                <p className="leading-relaxed">
                  We strive to provide honest and accurate product reviews based on our personal testing and experience.
                  However, individual results may vary. We are not responsible for your experience with any products
                  purchased through our affiliate links.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">Disclaimer of Warranties</h2>
                <p className="leading-relaxed">
                  Our website is provided "as is" without any warranties, express or implied. We do not guarantee that
                  the site will be error-free or uninterrupted, or that defects will be corrected.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">Limitation of Liability</h2>
                <p className="leading-relaxed">
                  Baking Queen shall not be liable for any indirect, incidental, special, or consequential damages
                  arising out of or in connection with your use of our website or any products purchased through our
                  affiliate links.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                  posting to the website. Your continued use of the website after changes are posted constitutes your
                  acceptance of the modified terms.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">Contact Information</h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us through our Contact page.
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
