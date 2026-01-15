'use client'

import { MapPin, Hospital, School, Bus, ShoppingBag, Building2, Coffee, ParkingSquare } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { useState } from 'react'

const locations = [
  { name: 'City General Hospital', type: 'hospital', icon: Hospital, lat: 40.7128, lng: -74.0060, color: 'text-red-600', bgColor: 'bg-red-100' },
  { name: 'Central High School', type: 'school', icon: School, lat: 40.7580, lng: -73.9855, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { name: 'Main Bus Terminal', type: 'transport', icon: Bus, lat: 40.7589, lng: -73.9851, color: 'text-green-600', bgColor: 'bg-green-100' },
  { name: 'Downtown Mall', type: 'shopping', icon: ShoppingBag, lat: 40.7614, lng: -73.9776, color: 'text-purple-600', bgColor: 'bg-purple-100' },
  { name: 'City Hall', type: 'government', icon: Building2, lat: 40.7127, lng: -74.0059, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
  { name: 'St. Mary\'s Hospital', type: 'hospital', icon: Hospital, lat: 40.7489, lng: -73.9680, color: 'text-red-600', bgColor: 'bg-red-100' },
  { name: 'Public Library', type: 'education', icon: School, lat: 40.7532, lng: -73.9822, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { name: 'North Station', type: 'transport', icon: Bus, lat: 40.7767, lng: -73.9549, color: 'text-green-600', bgColor: 'bg-green-100' },
  { name: 'Community Center', type: 'community', icon: Coffee, lat: 40.7282, lng: -73.9942, color: 'text-orange-600', bgColor: 'bg-orange-100' },
  { name: 'Central Parking', type: 'parking', icon: ParkingSquare, lat: 40.7505, lng: -73.9934, color: 'text-gray-600', bgColor: 'bg-gray-100' },
]

const categories = [
  { name: 'All', count: locations.length, color: 'default' },
  { name: 'Hospital', count: locations.filter(l => l.type === 'hospital').length, color: 'danger' },
  { name: 'School', count: locations.filter(l => l.type === 'school' || l.type === 'education').length, color: 'info' },
  { name: 'Transport', count: locations.filter(l => l.type === 'transport').length, color: 'success' },
  { name: 'Shopping', count: locations.filter(l => l.type === 'shopping').length, color: 'default' },
  { name: 'Government', count: locations.filter(l => l.type === 'government').length, color: 'warning' },
]

export default function MapPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null)

  const filteredLocations = selectedCategory === 'All'
    ? locations
    : locations.filter(l => l.type.toLowerCase() === selectedCategory.toLowerCase())

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Interactive City Map
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find important locations across the city
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.name
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
                <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Display (Simulated) */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>City Map</CardTitle>
                <CardDescription>Click on markers to view details</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Simulated Map */}
                <div className="relative w-full h-[600px] bg-gradient-to-br from-green-100 via-blue-100 to-yellow-100 dark:from-green-900/20 dark:via-blue-900/20 dark:to-yellow-900/20 rounded-lg overflow-hidden">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-12 grid-rows-12 h-full">
                      {[...Array(144)].map((_, i) => (
                        <div key={i} className="border border-gray-400"></div>
                      ))}
                    </div>
                  </div>

                  {/* Location Markers */}
                  {filteredLocations.map((location, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedLocation(location)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${location.bgColor} p-3 rounded-full shadow-lg hover:scale-110 transition-all cursor-pointer ${
                        selectedLocation?.name === location.name ? 'ring-4 ring-primary-600 scale-110' : ''
                      }`}
                      style={{
                        left: `${20 + (index % 5) * 15}%`,
                        top: `${15 + Math.floor(index / 5) * 20}%`,
                      }}
                      title={location.name}
                    >
                      <location.icon className={`h-6 w-6 ${location.color}`} />
                    </button>
                  ))}

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg max-w-xs">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                      Map Legend
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <Hospital className="h-4 w-4 text-red-600" />
                        <span className="text-gray-700 dark:text-gray-300">Hospital</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <School className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300">Education</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bus className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700 dark:text-gray-300">Transport</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-yellow-600" />
                        <span className="text-gray-700 dark:text-gray-300">Government</span>
                      </div>
                    </div>
                  </div>

                  {/* Selected Location Info */}
                  {selectedLocation && (
                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg max-w-xs">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`${selectedLocation.bgColor} p-2 rounded-lg`}>
                          <selectedLocation.icon className={`h-5 w-5 ${selectedLocation.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                            {selectedLocation.name}
                          </h4>
                          <Badge variant="info" className="text-xs mt-1">
                            {selectedLocation.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                        Coordinates: {selectedLocation.lat.toFixed(4)}, {selectedLocation.lng.toFixed(4)}
                      </div>
                      <button
                        className="w-full px-3 py-1.5 bg-primary-600 text-white rounded-md text-xs font-medium hover:bg-primary-700 transition-colors"
                      >
                        Get Directions
                      </button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location List Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Locations</CardTitle>
                <CardDescription>
                  {filteredLocations.length} places found
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-[600px] overflow-y-auto">
                  {filteredLocations.map((location, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedLocation(location)}
                      className={`w-full p-3 rounded-lg text-left transition-all ${
                        selectedLocation?.name === location.name
                          ? 'bg-primary-100 dark:bg-primary-900 border border-primary-600'
                          : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`${location.bgColor} p-2 rounded-lg flex-shrink-0`}>
                          <location.icon className={`h-5 w-5 ${location.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm text-gray-900 dark:text-white truncate">
                            {location.name}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="default" className="text-xs">
                              {location.type}
                            </Badge>
                          </div>
                        </div>
                        <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Features Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Search Nearby</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Find hospitals, schools, and services near your current location.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Get Directions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Navigate to any important city location with step-by-step directions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Save Favorites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Mark frequently visited places for quick access later.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
