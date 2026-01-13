"use client"

import Link from "next/link"
import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"

export function Navbar() {
  const { openAuthDialog, isAuthenticated, user, signOut } = useAuth()

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-primary p-2">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">LearnHub</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/my-courses"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            My Courses
          </Link>
          
          {isAuthenticated ? (
            <>
              <span className="text-sm text-muted-foreground hidden sm:inline">
                {user?.name}
              </span>
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex bg-transparent"
                onClick={signOut}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex bg-transparent"
                onClick={() => openAuthDialog("signin")}
              >
                Sign In
              </Button>
              <Button 
                size="sm" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => openAuthDialog("signup")}
              >
                Get Started
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
