import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

interface ArticleCardProps {
  image: string
  title: string
  excerpt: string
  category: string
  readTime: string
  slug: string
}

export function ArticleCard({ image, title, excerpt, category, readTime, slug }: ArticleCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
          <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">{category}</Badge>
        </div>
        <CardContent className="p-4 space-y-3">
          <h3 className="font-serif text-xl font-semibold text-foreground line-clamp-2 leading-relaxed">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{excerpt}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{readTime} read</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
