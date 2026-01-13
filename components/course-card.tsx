"use client"

import { Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import type { Course } from "@/lib/mock-data"

interface CourseCardProps {
  course: Course
  showProgress?: boolean
}

export function CourseCard({ course, showProgress = false }: CourseCardProps) {
  const [isWatchlisted, setIsWatchlisted] = useState(false)

  return (
    <Card className="overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
      <Link href={`/course/${course.id}`}>
        <div className="relative aspect-video overflow-hidden">
          <img
            src={course.thumbnail || "/placeholder.svg"}
            alt={course.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsWatchlisted(!isWatchlisted)
            }}
            className="absolute right-3 top-3 rounded-full bg-black/50 p-2 backdrop-blur-sm transition-colors hover:bg-black/70"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${isWatchlisted ? "fill-red-500 text-red-500" : "text-white"}`}
            />
          </button>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/course/${course.id}`}>
          <h3 className="mb-2 line-clamp-2 text-balance font-semibold text-foreground transition-colors hover:text-primary">
            {course.title}
          </h3>
        </Link>
        <p className="mb-3 text-sm text-muted-foreground">{course.instructor}</p>

        {showProgress && course.progress !== undefined && (
          <div className="mb-3">
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium text-foreground">{course.progress}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div className="h-full bg-primary transition-all duration-500" style={{ width: `${course.progress}%` }} />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">${course.price}</span>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-yellow-500">★</span>
            <span className="font-medium text-foreground">{course.rating}</span>
          </div>
        </div>

        {showProgress && (
          <Button className="mt-3 w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Continue Learning
          </Button>
        )}
      </div>
    </Card>
  )
}
