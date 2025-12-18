import { Star, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  image: string
  title: string
  rating: number
  reviewCount: number
  badge?: string
  slug?: string
}

export function ProductCard({ image, title, rating, reviewCount, badge }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
        {badge && <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground">{badge}</Badge>}
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-foreground line-clamp-2 leading-relaxed mb-2">{title}</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-accent text-accent" : "fill-muted text-muted"}`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviewCount})</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
          <ExternalLink className="mr-2 h-4 w-4" />
          Check Latest Price
        </Button>
      </CardFooter>
    </Card>
  )
}
