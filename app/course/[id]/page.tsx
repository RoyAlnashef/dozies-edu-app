import { PlayCircle, Clock, BarChart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { courses } from "@/lib/mock-data"
import { notFound } from "next/navigation"

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const course = courses.find((c) => c.id === id)

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative mb-6 aspect-video overflow-hidden rounded-lg bg-card">
              <img
                src={course.thumbnail || "/placeholder.svg"}
                alt={course.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Button
                  size="lg"
                  className="h-16 w-16 rounded-full bg-primary p-0 text-primary-foreground hover:bg-primary/90"
                >
                  <PlayCircle className="h-8 w-8" />
                </Button>
              </div>
            </div>

            <h1 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">{course.title}</h1>

            <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">
              {course.description ||
                "Learn from industry experts and gain practical skills that will advance your career. This comprehensive course covers everything you need to know."}
            </p>

            <div className="mb-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>{course.duration || "40 hours"}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BarChart className="h-5 w-5" />
                <span>All Levels</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span>12,543 students</span>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Course Content</h2>
              <Accordion type="single" collapsible className="w-full">
                {course.modules?.map((module, index) => (
                  <AccordionItem key={module.id} value={module.id}>
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                      {module.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-secondary"
                          >
                            <span className="text-foreground">{lesson.title}</span>
                            <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )) || (
                  <>
                    <AccordionItem value="m1">
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                        Module 1: Introduction
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-4">
                          <div className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-secondary">
                            <span className="text-foreground">Welcome to the course</span>
                            <span className="text-sm text-muted-foreground">5:23</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </>
                )}
              </Accordion>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-border bg-card p-6">
              <div className="mb-4">
                <div className="mb-2 text-3xl font-bold text-foreground">${course.price}</div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium text-foreground">{course.rating}</span>
                  <span className="text-sm">(1,234 reviews)</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Enroll Now</Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Add to Wishlist
                </Button>
              </div>

              <div className="mt-6 space-y-3 border-t border-border pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Instructor</span>
                  <span className="font-medium text-foreground">{course.instructor}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Updated</span>
                  <span className="font-medium text-foreground">Dec 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Language</span>
                  <span className="font-medium text-foreground">English</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
