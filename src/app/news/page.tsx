import { Newspaper, Calendar, AlertCircle, Info, TrendingUp, Users, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const newsArticles = [
  {
    title: 'New Smart Traffic System Launch',
    category: 'Infrastructure',
    date: '2 hours ago',
    excerpt: 'City introduces AI-powered traffic management system to reduce congestion and improve travel times.',
    image: '🚦',
    priority: 'high',
  },
  {
    title: 'Community Park Renovation Complete',
    category: 'Community',
    date: '1 day ago',
    excerpt: 'Central Park renovation project finished ahead of schedule. New facilities now open to public.',
    image: '🌳',
    priority: 'normal',
  },
  {
    title: 'Public Transport Fare Changes',
    category: 'Transportation',
    date: '3 days ago',
    excerpt: 'Updated fare structure for buses and trains effective from next month. Student discounts increased.',
    image: '🚌',
    priority: 'high',
  },
  {
    title: 'City Wins Environmental Award',
    category: 'Achievement',
    date: '5 days ago',
    excerpt: 'Smart City receives national recognition for sustainable waste management and green initiatives.',
    image: '🏆',
    priority: 'normal',
  },
  {
    title: 'Free WiFi Expansion Project',
    category: 'Technology',
    date: '1 week ago',
    excerpt: 'Public WiFi network expanded to cover 20 additional neighborhoods and parks.',
    image: '📶',
    priority: 'normal',
  },
]

const upcomingEvents = [
  {
    title: 'City Marathon 2026',
    date: 'Jan 25, 2026',
    time: '6:00 AM',
    location: 'City Center',
    type: 'Sports',
  },
  {
    title: 'Tech Startup Fair',
    date: 'Feb 5, 2026',
    time: '10:00 AM',
    location: 'Convention Center',
    type: 'Business',
  },
  {
    title: 'Community Health Day',
    date: 'Feb 12, 2026',
    time: '9:00 AM',
    location: 'Central Park',
    type: 'Health',
  },
  {
    title: 'Cultural Festival',
    date: 'Feb 20, 2026',
    time: '2:00 PM',
    location: 'Downtown Square',
    type: 'Culture',
  },
]

const alerts = [
  {
    title: 'Road Closure - Main Street',
    message: 'Main Street will be closed for maintenance on Jan 20-22. Use alternate routes.',
    type: 'warning',
    date: 'Active',
  },
  {
    title: 'Water Supply Interruption',
    message: 'Scheduled maintenance in Zone C on Jan 18, 2:00 AM - 6:00 AM.',
    type: 'info',
  date: 'Upcoming',
  },
  {
    title: 'Emergency Alert System Test',
    message: 'City-wide emergency alert system test scheduled for Jan 19 at 12:00 PM.',
    type: 'info',
    date: 'Upcoming',
  },
]

const categories = ['All', 'Infrastructure', 'Community', 'Transportation', 'Technology', 'Health']

export default function NewsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            City News & Announcements
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Latest updates, events, and important notices from your city
          </p>
        </div>

        {/* Important Alerts */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Important Alerts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {alerts.map((alert, index) => (
              <Card
                key={index}
                className={`border-l-4 ${
                  alert.type === 'warning'
                    ? 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                    : 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20'
                }`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    {alert.type === 'warning' ? (
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    ) : (
                      <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {alert.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {alert.message}
                      </p>
                      <Badge variant={alert.type === 'warning' ? 'warning' : 'info'}>
                        {alert.date}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News Feed */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? 'primary' : 'outline'}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="space-y-6">
              {newsArticles.map((article, index) => (
                <Card key={index} hover>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">{article.image}</div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="info">{article.category}</Badge>
                            {article.priority === 'high' && (
                              <Badge variant="danger">High Priority</Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl">{article.title}</CardTitle>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="flex items-center gap-2 text-xs">
                      <Clock className="h-3 w-3" />
                      {article.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {article.excerpt}
                    </p>
                    <Button variant="outline" size="sm">
                      Read More →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline">Load More News</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Upcoming Events */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                          <div className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                            {event.date.split(' ')[1]}
                          </div>
                          <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                            {event.date.split(' ')[0]}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                            {event.title}
                          </h4>
                          <div className="text-xs text-gray-600 dark:text-gray-400 space-y-0.5">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <Badge variant="default" className="text-xs">
                                {event.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline" size="sm">
                  View All Events
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>News Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <div className="flex items-center gap-2">
                    <Newspaper className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Articles
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    127
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      This Month
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    34
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Readers
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    8.5K
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
                <CardDescription>Subscribe to our newsletter</CardDescription>
              </CardHeader>
              <CardContent>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md mb-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <Button className="w-full">
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
