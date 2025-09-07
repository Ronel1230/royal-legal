"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { Eye, Network, RotateCcw, Key, Truck, Crown } from "lucide-react"

export default function CoursesPage() {
  const router = useRouter()

  const courses = [
    {
      id: "anonymity",
      icon: <Eye className="w-12 h-12" />,
      title: "Anonymity",
      description: "Make yourself invisible and prevent lawsuits before they begin.",
    },
    {
      id: "asset-holding",
      icon: <Network className="w-12 h-12" />,
      title: "Asset Holding",
      description: "Hold your assets anonymously and securely.",
    },
    {
      id: "operations",
      icon: <RotateCcw className="w-12 h-12" />,
      title: "Operations",
      description: "Run your business without liability.",
    },
    {
      id: "estate-planning",
      icon: <Key className="w-12 h-12" />,
      title: "Estate Planning",
      description: "Transfer your wealth to future generations.",
    },
    {
      id: "tax-vehicles",
      icon: <Truck className="w-12 h-12" />,
      title: "Tax Vehicles",
      description: "Optimize your taxes for the first $150k annual revenue.",
    },
  ]

  const royalLifeCourses = [
    {
      id: "royal-life-1",
      icon: <Crown className="w-12 h-12" />,
      title: "Royal Life 1.0",
      description: "Learn how to achieve an extraordinary life on every level.",
    },
    {
      id: "royal-life-2",
      icon: <Crown className="w-12 h-12" />,
      title: "Royal Life 2.0",
      description: "Advanced strategies for living extraordinarily.",
    },
    {
      id: "coming-soon",
      icon: <RotateCcw className="w-12 h-12" />,
      title: "Coming Soon",
      description: "More courses coming soon.",
    },
  ]

  const handleCourseClick = (courseId: string) => {
    if (courseId !== "coming-soon") {
      router.push(`/courses/${courseId}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-gray-600">
                <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-600 rounded-sm"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-800">COURSES</h1>
                <p className="text-gray-600">
                  Learn everything you need to know to optimize your asset protection and tax structure.
                </p>
              </div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Extend</Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          {/* Main Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-lg transition-shadow bg-white border border-gray-200"
                onClick={() => handleCourseClick(course.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-gray-600">{course.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Royal Life Courses */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {royalLifeCourses.map((course, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow bg-white border border-gray-200 ${
                  course.id !== "coming-soon" ? "cursor-pointer" : "cursor-default opacity-75"
                }`}
                onClick={() => handleCourseClick(course.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-gray-600">{course.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
