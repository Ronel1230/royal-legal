"use client"

import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"

export default function RoyalTVPage() {
  const webinars = [
    {
      title: "Office Hours with Elite CPA",
      date: "TUE 9/09 @ 4:00PM",
      type: "LIVE CALL",
    },
    {
      title: "Texas Tax Deeds for Steady Income and Long-Term Growth",
      date: "THU 9/11 @ 4:00PM",
      type: "LIVE CALL",
    },
    {
      title: "Office Hours with Elite Attorney",
      date: "TUE 9/16 @ 4:00PM",
      type: "LIVE CALL",
    },
    {
      title: "From Chaos to Cash Flow: Why Storage Is the Smartest Play of the Decade",
      date: "THU 9/18 @ 4:00PM",
      type: "LIVE CALL",
    },
    {
      title: "Office Hours with Elite CPA",
      date: "TUE 9/23 @ 4:00PM",
      type: "LIVE CALL",
    },
    {
      title: "How to Get Started in Apartment Investing—and Play the Wealth Game Differently",
      date: "THU 9/25 @ 4:00PM",
      type: "LIVE CALL",
    },
    {
      title: "Office Hours with Elite Staff",
      date: "TUE 9/30 @ 4:00PM",
      type: "LIVE CALL",
    },
  ]

  const handleRegister = (webinarTitle: string) => {
    window.open("https://app.royallegalsolutions.com/webinar-registration", "_blank")
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
                <h1 className="text-xl font-semibold text-gray-800">WEBINARS</h1>
                <p className="text-gray-600">Register for upcoming live webinars or watch replays.</p>
              </div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Extend</Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          {/* Filter Tabs */}
          <div className="mb-6">
            <div className="flex gap-1">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium">UPCOMING</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-300">
                REPLAYS
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-300">
                WATCHED
              </button>
            </div>
          </div>

          {/* Webinars List */}
          <div className="space-y-4">
            {webinars.map((webinar, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between hover:shadow-sm transition-shadow"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">{webinar.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{webinar.date}</span>
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">{webinar.type}</span>
                  </div>
                </div>
                <Button
                  onClick={() => handleRegister(webinar.title)}
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Register
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
