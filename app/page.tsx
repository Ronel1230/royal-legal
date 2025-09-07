"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { CreateAccountDialog } from "@/components/create-account-dialog"

export default function RoyalLegalSolutions() {
  const [showCreateAccount, setShowCreateAccount] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-gray-600">👋</div>
              <div>
                <h1 className="text-xl font-semibold text-gray-800">WELCOME</h1>
                <p className="text-gray-600">
                  Join thousands of investors nationwide and access free live coaching, video training, chats, & more.
                </p>
              </div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Extend</Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 relative">
          <div className="flex items-center justify-center min-h-full">
            <div className="w-96 space-y-4">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="action" className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Set your password</span>
                  </div>
                  <button className="action-button" onClick={() => setShowCreateAccount(true)}>
                    Create Account
                  </button>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="action" className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Get tax, legal & investing</span>
                  </div>
                  <button className="action-button">Open Resources</button>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="action" className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Ask a question in the chat</span>
                  </div>
                  <button className="action-button">Open Chat</button>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="action" className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Join a live webinar</span>
                  </div>
                  <button className="action-button">Open Webinars</button>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="action" className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Watch the overview video</span>
                  </div>
                  <button className="action-button">Open Video</button>
                </div>
              </Card>
            </div>
          </div>

          {/* Login Modal - Centered */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Card className="w-96 shadow-lg pointer-events-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">Log in</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="johnsmith@gmail.com" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <Input type="password" placeholder="••••••••••••" className="w-full" />
                </div>

                <div className="text-left">
                  <button className="text-blue-500 hover:text-blue-600 text-sm">Reset Password</button>
                </div>

                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Log in</Button>

                <div className="text-center">
                  <button
                    className="text-gray-600 hover:text-gray-800 text-sm"
                    onClick={() => setShowCreateAccount(true)}
                  >
                    Create Account
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <CreateAccountDialog open={showCreateAccount} onOpenChange={setShowCreateAccount} />
    </div>
  )
}
