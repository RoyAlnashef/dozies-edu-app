"use client"

import { useState } from "react"
import { categories } from "@/lib/mock-data"

export function CategoryFilter() {
  const [selected, setSelected] = useState("All Courses")

  return (
    <div className="relative">
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              selected === category
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
