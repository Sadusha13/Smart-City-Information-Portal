import { Bus, Train, Car, MapPin, Clock, TrendingUp, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const busRoutes = [
  { number: '12A', destination: 'City Center - North Station', nextArrival: '5 min', status: 'On Time', delay: 0 },
  { number: '45B', destination: 'Airport - Downtown', nextArrival: '12 min', status: 'On Time', delay: 0 },
  { number: '78', destination: 'University - Shopping Mall', nextArrival: '8 min', status: 'Delayed', delay: 3 },
  { number: '23', destination: 'Hospital - Beach Road', nextArrival: '15 min', status: 'On Time', delay: 0 },
  { number: '67C', destination: 'Industrial Park - Stadium', nextArrival: '20 min', status: 'On Time', delay: 0 },
]

const trainSchedule = [
  { line: 'Red Line', from: 'Central Station', to: 'North Terminal', departure: '10:15 AM', status: 'Boarding' },
  { line: 'Blue Line', from: 'South Station', to: 'Airport', departure: '10:25 AM', status: 'On Time' },
  { line: 'Green Line', from: 'West Junction', to: 'East Bay', departure: '10:40 AM', status: 'Delayed' },
  { line: 'Yellow Line', from: 'Downtown', to: 'Suburb Central', departure: '11:00 AM', status: 'On Time' },
]

const trafficStatus = [
  { location: 'Main Street', status: 'Heavy', color: 'danger' },
  { location: 'Highway 101', status: 'Moderate', color: 'warning' },
  { location: 'Beach Road', status: 'Clear', color: 'success' },
  { location: 'City Center', status: 'Heavy', color: 'danger' },
  { location: 'Airport Road', status: 'Clear', color: 'success' },
]

export default function TransportationPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Transportation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Real-time bus & train schedules, traffic updates, and route information
          </p>
        </div>

        {/* Traffic Alert */}
        <Card className="mb-8 border-l-4 border-l-yellow-500">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Traffic Advisory
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Heavy traffic reported on Main Street and City Center due to ongoing construction.
                  Consider alternate routes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Bus Schedules */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Bus className="h-6 w-6 text-blue-600" />
                      Bus Schedules
                    </CardTitle>
                    <CardDescription>Next arrivals at nearby stops</CardDescription>
                  </div>
                  <Button size="sm">View All Routes</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {busRoutes.map((route, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                          {route.number}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {route.destination}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Clock className="h-4 w-4" />
                            Next: {route.nextArrival}
                          </div>
                        </div>
                      </div>
                      <Badge variant={route.delay > 0 ? 'warning' : 'success'}>
                        {route.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Train Schedule */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Train className="h-6 w-6 text-purple-600" />
                  Train Schedule
                </CardTitle>
                <CardDescription>Upcoming departures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trainSchedule.map((train, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="info">{train.line}</Badge>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Departure: {train.departure}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <MapPin className="h-4 w-4" />
                          {train.from} → {train.to}
                        </div>
                      </div>
                      <Badge variant={train.status === 'Delayed' ? 'warning' : train.status === 'Boarding' ? 'info' : 'success'}>
                        {train.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Traffic Status Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-6 w-6 text-orange-600" />
                  Traffic Status
                </CardTitle>
                <CardDescription>Live traffic conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trafficStatus.map((traffic, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {traffic.location}
                      </span>
                      <Badge variant={traffic.color as any}>
                        {traffic.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Peak Hours
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Morning: 7:00 AM - 9:30 AM<br />
                    Evening: 5:00 PM - 7:30 PM
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="outline">
                  <MapPin className="h-4 w-4 mr-2" />
                  Plan Route
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Clock className="h-4 w-4 mr-2" />
                  Set Reminder
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Bus className="h-4 w-4 mr-2" />
                  Save Favorite Route
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
