export interface Course {
  id: string
  title: string
  instructor: string
  price: number
  thumbnail: string
  category: string
  rating: number
  enrolled?: boolean
  progress?: number
  modules?: Module[]
  description?: string
  duration?: string
}

export interface Module {
  id: string
  title: string
  lessons: Lesson[]
  isExpanded?: boolean
}

export interface Lesson {
  id: string
  title: string
  duration: string
  completed?: boolean
}

export const categories = [
  "All Courses",
  "Web Development",
  "Design",
  "Business",
  "Marketing",
  "Data Science",
  "Mobile Development",
]

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    price: 89.99,
    thumbnail: "/web-development-coding-screen.png",
    category: "Web Development",
    rating: 4.8,
    duration: "42 hours",
    description:
      "Master modern web development with HTML, CSS, JavaScript, React, and Node.js. Build real-world projects and launch your career.",
    modules: [
      {
        id: "m1",
        title: "Getting Started with Web Development",
        lessons: [
          { id: "l1", title: "Introduction to the Course", duration: "5:23" },
          { id: "l2", title: "Setting Up Your Environment", duration: "12:45" },
          { id: "l3", title: "HTML Fundamentals", duration: "18:30" },
        ],
      },
      {
        id: "m2",
        title: "CSS and Styling",
        lessons: [
          { id: "l4", title: "CSS Basics", duration: "15:20" },
          { id: "l5", title: "Flexbox and Grid", duration: "22:10" },
          { id: "l6", title: "Responsive Design", duration: "19:45" },
        ],
      },
      {
        id: "m3",
        title: "JavaScript Essentials",
        lessons: [
          { id: "l7", title: "JavaScript Fundamentals", duration: "25:30" },
          { id: "l8", title: "DOM Manipulation", duration: "20:15" },
          { id: "l9", title: "Async JavaScript", duration: "28:40" },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "UI/UX Design Masterclass",
    instructor: "Michael Chen",
    price: 79.99,
    thumbnail: "/ui-ux-design-interface.png",
    category: "Design",
    rating: 4.9,
    duration: "28 hours",
  },
  {
    id: "3",
    title: "Digital Marketing Fundamentals",
    instructor: "Emily Rodriguez",
    price: 69.99,
    thumbnail: "/digital-marketing-analytics.png",
    category: "Marketing",
    rating: 4.7,
    duration: "18 hours",
  },
  {
    id: "4",
    title: "React and Next.js Development",
    instructor: "David Park",
    price: 94.99,
    thumbnail: "/react-nextjs-code.jpg",
    category: "Web Development",
    rating: 4.9,
    duration: "36 hours",
  },
  {
    id: "5",
    title: "Data Science with Python",
    instructor: "Dr. Lisa Wang",
    price: 99.99,
    thumbnail: "/data-science-python-charts.jpg",
    category: "Data Science",
    rating: 4.8,
    duration: "45 hours",
  },
  {
    id: "6",
    title: "Mobile App Development with React Native",
    instructor: "James Wilson",
    price: 84.99,
    thumbnail: "/mobile-app-development.png",
    category: "Mobile Development",
    rating: 4.6,
    duration: "32 hours",
  },
]

export const enrolledCourses: Course[] = [
  {
    ...courses[0],
    enrolled: true,
    progress: 65,
  },
  {
    ...courses[1],
    enrolled: true,
    progress: 30,
  },
  {
    ...courses[3],
    enrolled: true,
    progress: 80,
  },
]
