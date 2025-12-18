import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary/10 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Last updated: December 15, 2024</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="space-y-6 text-foreground">
                <h2 className="font-serif text-2xl font-bold text-foreground">Introduction</h2>
                <p className="leading-relaxed">
                  At Baking Queen, we respect your privacy and are committed to protecting your personal information.
                  This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">Information We Collect</h2>
                <p className="leading-relaxed">
                  We may collect information that you provide directly to us, such as when you subscribe to our
                  newsletter or contact us through our contact form. This may include your name, email address, and any
                  other information you choose to provide.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">How We Use Your Information</h2>
                <p className="leading-relaxed">We use the information we collect to:</p>
                <ul className="space-y-2 ml-6">
                  <li className="leading-relaxed">Respond to your inquiries and requests</li>
                  <li className="leading-relaxed">Send you newsletters and updates (if you've subscribed)</li>
                  <li className="leading-relaxed">Improve our website and services</li>
                  <li className="leading-relaxed">Analyze site usage and trends</li>
                </ul>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">Cookies and Tracking</h2>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience and analyze site
                  traffic. You can control cookie settings through your browser preferences.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">Third-Party Services</h2>
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites and affiliate partners. We are not responsible
                  for the privacy practices of these external sites. Please review their privacy policies separately.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">Your Rights</h2>
                <p className="leading-relaxed">
                  You have the right to access, correct, or delete your personal information. To exercise these rights
                  or if you have any questions about our privacy practices, please contact us using the information
                  provided on our Contact page.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mt-8">Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                  updated revision date.
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
