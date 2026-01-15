import Link from 'next/link'
import { Bus, AlertCircle, Cloud, Briefcase, Newspaper, Map, TrendingUp, Users, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const services = [
  {
    title: 'Transportation',
    description: 'Real-time bus & train schedules, traffic updates',
    icon: Bus,
    href: '/transportation',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    title: 'Emergency Services',
    description: 'Police, hospital, fire service contacts',
    icon: AlertCircle,
    href: '/emergency',
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
  },
  {
    title: 'Weather Updates',
    description: 'Current weather, forecasts & alerts',
    icon: Cloud,
    href: '/weather',
    color: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
  },
  {
    title: 'Public Services',
    description: 'Waste collection, utilities, government offices',
    icon: Briefcase,
    href: '/services',
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    title: 'City News',
    description: 'Latest announcements, events & notices',
    icon: Newspaper,
    href: '/news',
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    title: 'City Map',
    description: 'Interactive map with important locations',
    icon: Map,
    href: '/map',
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
  },
]

const stats = [
  { label: 'Daily Users', value: '12,543', icon: Users, trend: '+12%' },
  { label: 'Services Available', value: '156', icon: Briefcase, trend: '+8%' },
  { label: 'Response Time', value: '1.2s', icon: Clock, trend: '-5%' },
  { label: 'Satisfaction Rate', value: '94%', icon: TrendingUp, trend: '+3%' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <Badge variant="info" className="mb-4">
              Digital City Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to Your
              <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Smart City Portal
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Access essential city services, real-time information, and emergency contacts
              all in one centralized digital platform.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} hover className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {stat.label}
                  </div>
                  <Badge variant="success" className="text-xs">
                    {stat.trend}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              City Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Quick access to all essential city information and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card hover className="h-full cursor-pointer group">
                  <CardHeader>
                    <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-medium group-hover:underline">
                      View Details →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Alerts Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                Important Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <Badge variant="warning">Traffic</Badge>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Road construction on Main Street. Expect delays between 9 AM - 5 PM.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <Badge variant="info">Event</Badge>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    City Marathon this Sunday. Several roads will be closed.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <Badge variant="success">Service</Badge>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    New waste collection schedule starts next week. Check your area.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
