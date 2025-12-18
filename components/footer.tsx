import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-primary">Baking Queen</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted guide to home baking and artisanal pastry making.
            </p>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/editorial-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Editorial Policy
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclosure" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Affiliate Disclosure
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get the latest baking tips and product reviews delivered to your inbox.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground leading-relaxed">
            © {new Date().getFullYear()} Baking Queen. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            Amazon Affiliate Disclaimer: As an Amazon Associate, we earn from qualifying purchases. This means that if
            you click on a link and make a purchase, we may receive a small commission at no extra cost to you. We only
            recommend products we truly believe in.
          </p>
        </div>
      </div>
    </footer>
  )
}
