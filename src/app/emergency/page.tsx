import { Phone, MapPin, Clock, AlertCircle, Hospital, ShieldAlert, Flame, Ambulance } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const emergencyServices = [
  {
    name: 'Police Department',
    icon: ShieldAlert,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    phone: '911',
    alternatePhone: '+1 (555) 100-2000',
    address: '123 Justice Street, City Center',
    availability: '24/7',
    description: 'Emergency law enforcement and public safety services',
  },
  {
    name: 'Fire Department',
    icon: Flame,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    phone: '911',
    alternatePhone: '+1 (555) 100-3000',
    address: '456 Rescue Road, Downtown',
    availability: '24/7',
    description: 'Fire emergency response and rescue services',
  },
  {
    name: 'Medical Emergency',
    icon: Ambulance,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    phone: '911',
    alternatePhone: '+1 (555) 100-4000',
    address: 'Multiple Locations',
    availability: '24/7',
    description: 'Emergency medical services and ambulance dispatch',
  },
]

const hospitals = [
  {
    name: 'City General Hospital',
    specialty: 'General & Emergency',
    phone: '+1 (555) 200-1000',
    address: '789 Health Avenue, Medical District',
    distance: '2.3 km',
    status: 'Open',
  },
  {
    name: 'St. Mary\'s Medical Center',
    specialty: 'Trauma & Surgery',
    phone: '+1 (555) 200-2000',
    address: '321 Care Lane, North District',
    distance: '4.1 km',
    status: 'Open',
  },
  {
    name: 'Children\'s Hospital',
    specialty: 'Pediatrics',
    phone: '+1 (555) 200-3000',
    address: '654 Kids Street, East Side',
    distance: '3.5 km',
    status: 'Open',
  },
  {
    name: 'Community Clinic',
    specialty: 'Primary Care',
    phone: '+1 (555) 200-4000',
    address: '987 Wellness Road, South District',
    distance: '1.8 km',
    status: 'Open',
  },
]

const hotlines = [
  { name: 'Poison Control', number: '+1 (555) 300-1000' },
  { name: 'Mental Health Crisis', number: '+1 (555) 300-2000' },
  { name: 'Disaster Helpline', number: '+1 (555) 300-3000' },
  { name: 'Domestic Violence', number: '+1 (555) 300-4000' },
  { name: 'Child Protection', number: '+1 (555) 300-5000' },
]

export default function EmergencyPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Emergency Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Quick access to emergency contacts and critical services
          </p>
        </div>

        {/* Emergency Alert */}
        <Card className="mb-8 border-l-4 border-l-red-500 bg-red-50 dark:bg-red-900/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900 dark:text-red-300 mb-1 text-lg">
                  Emergency Dial 911
                </h3>
                <p className="text-sm text-red-800 dark:text-red-400">
                  For immediate life-threatening emergencies, always call 911 first.
                  This page provides additional contact information and resources.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Emergency Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {emergencyServices.map((service, index) => (
            <Card key={index} hover className="h-full">
              <CardHeader>
                <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <div>
                      <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                        {service.phone}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {service.alternatePhone}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{service.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <Badge variant="success">{service.availability}</Badge>
                  </div>
                  <Button className="w-full mt-4">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hospitals & Medical Centers */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hospital className="h-6 w-6 text-green-600" />
                  Nearby Hospitals
                </CardTitle>
                <CardDescription>Medical facilities in your area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hospitals.map((hospital, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {hospital.name}
                          </h3>
                          <Badge variant="success">{hospital.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {hospital.specialty}
                        </p>
                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <Phone className="h-3 w-3" />
                            {hospital.phone}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3" />
                            {hospital.address} • {hospital.distance} away
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <MapPin className="h-4 w-4 mr-1" />
                        Navigate
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Helplines Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Important Hotlines</CardTitle>
                <CardDescription>24/7 support services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {hotlines.map((hotline, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                    >
                      <div className="font-medium text-sm text-gray-900 dark:text-white mb-1">
                        {hotline.name}
                      </div>
                      <div className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                        {hotline.number}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Safety Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">•</span>
                    <span>Stay calm in emergencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">•</span>
                    <span>Know your exact location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">•</span>
                    <span>Keep emergency numbers saved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">•</span>
                    <span>Have a first aid kit ready</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
