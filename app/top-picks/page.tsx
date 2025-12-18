"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { CategoryTabs } from "@/components/category-tabs"

const categories = ["All", "Mixers", "Bakeware", "Ingredients", "Tools", "Ovens"]

const allProducts = [
  {
    image: "/stand-mixer.png",
    title: "Professional Stand Mixer with 6-Speed Settings",
    rating: 4.8,
    reviewCount: 1240,
    badge: "Top Pick",
    category: "Mixers",
  },
  {
    image: "/bread-proofing-basket.jpg",
    title: "Natural Rattan Bread Proofing Basket Set",
    rating: 4.7,
    reviewCount: 856,
    badge: "Best Value",
    category: "Tools",
  },
  {
    image: "/dutch-oven.jpg",
    title: "Cast Iron Dutch Oven for Artisan Bread",
    rating: 4.9,
    reviewCount: 2103,
    badge: "Editor's Choice",
    category: "Bakeware",
  },
  {
    image: "/digital-kitchen-scale.jpg",
    title: "Precision Digital Kitchen Scale",
    rating: 4.6,
    reviewCount: 672,
    category: "Tools",
  },
  {
    image: "/bread-flour.jpg",
    title: "Premium High-Protein Bread Flour",
    rating: 4.8,
    reviewCount: 1523,
    category: "Ingredients",
  },
  {
    image: "/baking-stone.jpg",
    title: "Professional Pizza and Bread Baking Stone",
    rating: 4.7,
    reviewCount: 945,
    category: "Bakeware",
  },
  {
    image: "/countertop-oven.jpg",
    title: "Smart Countertop Convection Oven",
    rating: 4.9,
    reviewCount: 2340,
    badge: "Premium Pick",
    category: "Ovens",
  },
  {
    image: "/sourdough-jar.jpg",
    title: "Glass Sourdough Starter Jar with Measurements",
    rating: 4.6,
    reviewCount: 587,
    category: "Tools",
  },
]

export default function TopPicksPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts =
    selectedCategory === "All" ? allProducts : allProducts.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary/10 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Top Picks</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Our carefully curated selection of the best baking tools, equipment, and ingredients for home bakers.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="mb-8">
              <CategoryTabs categories={categories} onCategoryChange={setSelectedCategory} defaultCategory="All" />
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
