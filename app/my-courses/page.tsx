import { GraduationCap } from "lucide-react"
import { CourseCard } from "@/components/course-card"
import { Navbar } from "@/components/navbar"
import { enrolledCourses } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"

export default function MyCoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-balance text-4xl font-bold text-foreground">My Courses</h1>
          <p className="text-pretty text-lg text-muted-foreground">Continue your learning journey</p>
        </div>

        {enrolledCourses.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enrolledCourses.map((course) => (
              <CourseCard key={course.id} course={course} showProgress />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-card/50 px-4 py-12 text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-6">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-foreground">No courses yet</h2>
            <p className="mb-6 text-pretty text-muted-foreground">
              Start your learning journey by enrolling in a course
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Browse Courses</Button>
          </div>
        )}
      </main>
    </div>
  )
}
