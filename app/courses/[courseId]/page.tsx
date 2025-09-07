"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"
import { useRouter, useParams } from "next/navigation"
import { Sidebar } from "@/components/sidebar"

export default function CourseDetailPage() {
  const router = useRouter()
  const params = useParams()
  const courseId = params.courseId as string

  // Mock course data - in real app this would come from API/database
  const courseData = {
    anonymity: {
      title: "Anonymity",
      description: "Make yourself invisible and prevent lawsuits before they begin.",
      topics: [
        { title: "Watch The Video", completed: false },
        { title: "How to use a land trust?", completed: false },
        { title: "How do land trusts reduce lawsuit risk?", completed: false },
        { title: "What are the best practices around structuring entities with partners?", completed: false },
        { title: "Additional Resources", completed: false },
      ],
    },
  }

  const course = courseData[courseId as keyof typeof courseData]

  if (!course) {
    return <div>Course not found</div>
  }

  const handleMarkComplete = () => {
    console.log("Marking course as complete")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" onClick={() => router.back()} className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-gray-600">
                <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-600 rounded-sm"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-800">{course.title}</h1>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
            <div className="ml-auto">
              <Button
                onClick={handleMarkComplete}
                className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
              >
                Mark As Complete
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </Button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex">
          {/* Left Sidebar - Course Topics */}
          <div className="w-80 bg-white border-r border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Land Trusts</h3>
            <div className="space-y-3">
              {course.topics.map((topic, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    {topic.completed && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                  </div>
                  <span className="text-gray-700 text-sm">{topic.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content - Video Section */}
          <div className="flex-1 p-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Watch The Video</h2>

              {/* Video Player Placeholder */}
              <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-colors">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>

              <div className="text-gray-600">
                <p className="mb-4">
                  In this video, you'll learn the fundamentals of anonymity and how to protect your assets from
                  potential lawsuits before they even begin.
                </p>
                <p>
                  Topics covered include land trusts, entity structuring, and best practices for maintaining privacy in
                  your business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
