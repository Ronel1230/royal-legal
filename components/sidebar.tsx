"use client"

import { useRouter, usePathname } from "next/navigation"
import { MessageCircle, Play, BookOpen, Tag, HelpCircle, LogIn } from "lucide-react"

export function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  const navigationItems = [
    { icon: "👋", label: "Welcome", path: "/" },
    { icon: MessageCircle, label: "Chat", path: "/chat" },
    { icon: Play, label: "Royal TV", path: "/royal-tv" },
    { icon: BookOpen, label: "Courses", path: "/courses" },
    { icon: Tag, label: "Deals", path: "/deals" },
  ]

  const bottomItems = [
    { icon: HelpCircle, label: "FAQ", path: "/faq" },
    { icon: LogIn, label: "Log In", path: "/login" },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="font-semibold text-gray-800">ROYAL VAULT</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center">
          <div className="space-y-2 w-full px-4">
            {navigationItems.map((item) => {
              const Icon = typeof item.icon === "string" ? null : item.icon
              return (
                <div
                  key={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
                    isActive(item.path) ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => router.push(item.path)}
                >
                  {typeof item.icon === "string" ? (
                    <div className="w-5 h-5">{item.icon}</div>
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                  <span className={isActive(item.path) ? "font-medium" : ""}>{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="space-y-2 w-full px-4 pb-6">
          {bottomItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
                  isActive(item.path) ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => router.push(item.path)}
              >
                <Icon className="w-5 h-5" />
                <span className={isActive(item.path) ? "font-medium" : ""}>{item.label}</span>
              </div>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
