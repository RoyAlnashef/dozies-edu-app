"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  isAuthOpen: boolean
  authTab: "signin" | "signup"
  openAuthDialog: (tab?: "signin" | "signup") => void
  closeAuthDialog: () => void
  isAuthenticated: boolean
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [authTab, setAuthTab] = useState<"signin" | "signup">("signin")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const openAuthDialog = (tab: "signin" | "signup" = "signin") => {
    setAuthTab(tab)
    setIsAuthOpen(true)
  }

  const closeAuthDialog = () => {
    setIsAuthOpen(false)
  }

  const signIn = async (email: string, password: string) => {
    // Mock authentication - simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Mock successful sign in
    const mockUser: User = {
      id: "1",
      name: email.split("@")[0],
      email: email,
    }

    setUser(mockUser)
    setIsAuthenticated(true)
    closeAuthDialog()
  }

  const signUp = async (name: string, email: string, password: string) => {
    // Mock authentication - simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Mock successful sign up
    const mockUser: User = {
      id: "1",
      name: name,
      email: email,
    }

    setUser(mockUser)
    setIsAuthenticated(true)
    closeAuthDialog()
  }

  const signOut = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthOpen,
        authTab,
        openAuthDialog,
        closeAuthDialog,
        isAuthenticated,
        user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
