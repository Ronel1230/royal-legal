"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sidebar } from "@/components/sidebar"
import { Building, TrendingUp, DollarSign, Users } from "lucide-react"

export default function DealsPage() {
  const deals = [
    {
      name: "BLUE METRIC GROUP",
      type: "SYNDICATION",
      source: "Royal Sourced",
      category: "Real Estate",
      subCategory: "RV Parks",
      strategy: "Cash Flow, Depreciation",
      requirements: "Accredited Investors",
      icon: <Building className="w-8 h-8" />,
      color: "bg-blue-600",
    },
    {
      name: "BOX WILSON EQUITY",
      type: "SYNDICATION",
      source: "Client Sourced",
      category: "Real Estate",
      subCategory: "Multi-Family, Self Storage, Mobile Homes, Distressed Debt",
      strategy: "Cash Flow, Depreciation",
      requirements: "Real Estate Professional",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "bg-gray-800",
    },
    {
      name: "BREAK OF DAY CAPITAL",
      type: "SYNDICATION",
      source: "Client Sourced",
      category: "Real Estate",
      subCategory: "Multi-Family",
      strategy: "Cash Flow, Depreciation",
      requirements: "Real Estate Professional",
      icon: <DollarSign className="w-8 h-8" />,
      color: "bg-green-600",
    },
    {
      name: "CASH FLOW CHAMPS",
      type: "SYNDICATION",
      source: "Client Sourced",
      category: "Real Estate",
      subCategory: "Multi-Family",
      strategy: "Cash Flow",
      requirements: "Real Estate Professional",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "bg-purple-600",
    },
    {
      name: "CROWDVEST LLC",
      type: "SYNDICATION",
      source: "Client Sourced",
      category: "Machinery, Real Estate",
      subCategory: "Multi-Family, Car Wash",
      strategy: "Cash Flow",
      requirements: "Real Estate Professional",
      icon: <Users className="w-8 h-8" />,
      color: "bg-indigo-600",
    },
  ]

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
                <h1 className="text-xl font-semibold text-gray-800">DEALS</h1>
                <p className="text-gray-600">Explore our network of asset backed businesses.</p>
              </div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Extend</Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          {/* Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categories</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="machinery">Machinery</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sub-Categories</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sub-Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="multi-family">Multi-Family</SelectItem>
                    <SelectItem value="rv-parks">RV Parks</SelectItem>
                    <SelectItem value="self-storage">Self Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Types</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="syndication">Syndication</SelectItem>
                    <SelectItem value="fund">Fund</SelectItem>
                    <SelectItem value="direct">Direct Investment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Strategies</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Strategies" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash-flow">Cash Flow</SelectItem>
                    <SelectItem value="depreciation">Depreciation</SelectItem>
                    <SelectItem value="appreciation">Appreciation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Requirements" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="accredited">Accredited Investors</SelectItem>
                    <SelectItem value="re-professional">Real Estate Professional</SelectItem>
                    <SelectItem value="qualified">Qualified Purchaser</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Source</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="royal-sourced">Royal Sourced</SelectItem>
                    <SelectItem value="client-sourced">Client Sourced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* User Profile Question */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What best describes you?</h3>
              <p className="text-gray-600 mb-4">We customize your plan based on how you earn.</p>
              <Select>
                <SelectTrigger className="max-w-md">
                  <SelectValue placeholder="Choose an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="investor">Passive Investor</SelectItem>
                  <SelectItem value="re-professional">Real Estate Professional</SelectItem>
                  <SelectItem value="business-owner">Business Owner</SelectItem>
                  <SelectItem value="high-earner">High Income Earner</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Deals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white border border-gray-200">
                <CardHeader className={`${deal.color} text-white rounded-t-lg`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-bold">{deal.name}</CardTitle>
                      <p className="text-sm opacity-90">{deal.type}</p>
                    </div>
                    <div className="text-white opacity-80">{deal.icon}</div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Source:</span>
                      <p className="text-gray-600">{deal.source}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Category:</span>
                      <p className="text-gray-600">{deal.category}</p>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Sub-Category:</span>
                    <p className="text-gray-600 text-sm">{deal.subCategory}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Strategy:</span>
                    <p className="text-gray-600 text-sm">{deal.strategy}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Requirements:</span>
                    <p className="text-gray-600 text-sm">{deal.requirements}</p>
                  </div>
                  <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
