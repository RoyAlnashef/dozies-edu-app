import { Search } from "lucide-react"
import { Suspense } from "react"
import { Input } from "@/components/ui/input"
import { CourseCard } from "@/components/course-card"
import { CategoryFilter } from "@/components/category-filter"
import { Navbar } from "@/components/navbar"
import { courses } from "@/lib/mock-data"

function PageContent() {
  return (
    <>
      <div className="mb-8">
        <h1 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
          Discover Your Next Learning Adventure
        </h1>
        <p className="text-pretty text-lg text-muted-foreground">
          Explore thousands of courses from expert instructors
        </p>
      </div>

      <div className="mb-6 flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for courses..."
            className="h-12 border-border bg-card pl-10 text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="mb-8">
        <CategoryFilter />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={null}>
          <PageContent />
        </Suspense>
      </main>
    </div>
  )
}
