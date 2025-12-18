"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = [
  "All Categories",
  "Stand Mixers",
  "Ovens",
  "Bakeware",
  "Tools",
  "Ingredients",
]

const allProducts = [
  {
    title: "Professional Stand Mixer with 6-Speed Settings",
    image: "/stand-mixer.png",
    rating: 4.8,
    reviewCount: 1240,
    category: "Stand Mixers",
    badge: "Top Pick",
  },
  {
    title: "Natural Rattan Bread Proofing Basket Set",
    image: "/bread-proofing-basket.jpg",
    rating: 4.7,
    reviewCount: 856,
    category: "Tools",
    badge: "Best Value",
  },
  {
    title: "Cast Iron Dutch Oven for Artisan Bread",
    image: "/dutch-oven.jpg",
    rating: 4.9,
    reviewCount: 2103,
    category: "Bakeware",
    badge: "Editor's Choice",
  },
  {
    title: "Precision Digital Kitchen Scale",
    image: "/digital-kitchen-scale.jpg",
    rating: 4.6,
    reviewCount: 672,
    category: "Tools",
  },
  {
    title: "Convection Countertop Oven",
    image: "/placeholder.svg",
    rating: 4.5,
    reviewCount: 445,
    category: "Ovens",
  },
  {
    title: "Premium Silicone Baking Mat Set",
    image: "/placeholder.svg",
    rating: 4.7,
    reviewCount: 1089,
    category: "Bakeware",
  },
]

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  const filteredProducts =
    selectedCategory === "All Categories" ? allProducts : allProducts.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-primary/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Product Reviews
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            In-depth reviews of baking tools, equipment, and ingredients based on hands-on testing in our test kitchen.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-muted/20 py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "review" : "reviews"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
