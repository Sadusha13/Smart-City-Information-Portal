import { Trash2, Zap, Droplet, Building2, Calendar, Clock, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const wasteSchedule = [
  { day: 'Monday', type: 'General Waste', area: 'Zone A, B', time: '6:00 AM - 10:00 AM', color: 'bg-gray-500' },
  { day: 'Wednesday', type: 'Recyclables', area: 'Zone A, B, C', time: '6:00 AM - 10:00 AM', color: 'bg-green-500' },
  { day: 'Friday', type: 'Organic Waste', area: 'All Zones', time: '6:00 AM - 10:00 AM', color: 'bg-yellow-600' },
  { day: 'Saturday', type: 'Bulky Items', area: 'By Request', time: '8:00 AM - 2:00 PM', color: 'bg-blue-500' },
]

const utilities = [
  {
    name: 'Electricity Board',
    icon: Zap,
    color: 'text-yellow-600 dark:text-yellow-400',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    phone: '+1 (555) 400-1000',
    emergency: '+1 (555) 400-9000',
    address: '100 Power Street, Downtown',
    hours: 'Mon-Fri: 8 AM - 5 PM',
  },
  {
    name: 'Water Supply',
    icon: Droplet,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    phone: '+1 (555) 400-2000',
    emergency: '+1 (555) 400-9001',
    address: '200 Aqua Avenue, East Side',
    hours: 'Mon-Fri: 8 AM - 5 PM',
  },
]

const governmentOffices = [
  {
    name: 'City Hall',
    department: 'Municipal Administration',
    phone: '+1 (555) 500-1000',
    address: '500 Government Plaza, City Center',
    hours: 'Mon-Fri: 9 AM - 4 PM',
    services: ['Birth Certificates', 'Marriage Licenses', 'Property Tax'],
  },
  {
    name: 'Public Works Department',
    department: 'Infrastructure & Maintenance',
    phone: '+1 (555) 500-2000',
    address: '600 Works Road, Industrial Zone',
    hours: 'Mon-Fri: 8 AM - 5 PM',
    services: ['Road Repairs', 'Street Lighting', 'Park Maintenance'],
  },
  {
    name: 'Planning & Development',
    department: 'Urban Planning',
    phone: '+1 (555) 500-3000',
    address: '700 Development Drive, Downtown',
    hours: 'Mon-Fri: 9 AM - 4 PM',
    services: ['Building Permits', 'Zoning', 'Land Use'],
  },
]

const announcements = [
  { title: 'New Recycling Guidelines', date: '2 days ago', type: 'info' },
  { title: 'Water Supply Maintenance - Zone C', date: '5 days ago', type: 'warning' },
  { title: 'Electricity Tariff Update', date: '1 week ago', type: 'info' },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Public Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Waste collection, utilities, and government office information
          </p>
        </div>

        {/* Waste Collection Schedule */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trash2 className="h-6 w-6 text-green-600" />
              Waste Collection Schedule
            </CardTitle>
            <CardDescription>Weekly pickup times for your area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {wasteSchedule.map((schedule, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-3 h-3 rounded-full ${schedule.color}`}></div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {schedule.day}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {schedule.type}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="h-3 w-3" />
                      {schedule.area}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="h-3 w-3" />
                      {schedule.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Recycling Tips
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Please separate recyclables (paper, plastic, glass, metal) from general waste.
                    Clean and dry all items before disposal.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Utilities */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Utility Services</CardTitle>
                <CardDescription>Electricity and water service contacts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {utilities.map((utility, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 ${utility.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <utility.icon className={`h-6 w-6 ${utility.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-1">
                            {utility.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {utility.hours}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <div>
                              <div className="text-gray-600 dark:text-gray-400">General</div>
                              <div className="font-semibold text-gray-900 dark:text-white">
                                {utility.phone}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-red-500" />
                            <div>
                              <div className="text-gray-600 dark:text-gray-400">Emergency</div>
                              <div className="font-semibold text-red-600 dark:text-red-400">
                                {utility.emergency}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {utility.address}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Announcements */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
                <CardDescription>Service announcements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {announcements.map((announcement, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                    >
                      <div className="font-medium text-sm text-gray-900 dark:text-white mb-1">
                        {announcement.title}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {announcement.date}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="outline" size="sm">
                  Pay Utility Bill
                </Button>
                <Button className="w-full justify-start" variant="outline" size="sm">
                  Report Issue
                </Button>
                <Button className="w-full justify-start" variant="outline" size="sm">
                  Request Service
                </Button>
                <Button className="w-full justify-start" variant="outline" size="sm">
                  View History
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Government Offices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-purple-600" />
              Government Offices
            </CardTitle>
            <CardDescription>City administration and public service departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governmentOffices.map((office, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                    {office.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {office.department}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">{office.phone}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">{office.hours}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      SERVICES
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {office.services.map((service, idx) => (
                        <Badge key={idx} variant="default" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
