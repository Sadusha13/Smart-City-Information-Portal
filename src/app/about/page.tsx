import { Target, Users, Zap, Shield, Award, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

const features = [
  {
    icon: Zap,
    title: 'Real-Time Information',
    description: 'Access live updates on transportation, weather, and city services instantly.',
    color: 'text-yellow-600 dark:text-yellow-400',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
  },
  {
    icon: Shield,
    title: 'Emergency Access',
    description: 'Quick access to emergency services, hospitals, and important contacts.',
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
  },
  {
    icon: Users,
    title: 'User-Friendly',
    description: 'Clean, intuitive interface designed for all age groups and tech levels.',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    icon: TrendingUp,
    title: 'Digital Transformation',
    description: 'Supporting smart city initiatives with modern digital solutions.',
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
]

const objectives = [
  'Provide centralized access to essential city services',
  'Improve citizen engagement through digital platforms',
  'Reduce response time during emergencies',
  'Enhance transparency in government operations',
  'Support sustainable urban development',
  'Enable data-driven decision making',
]

const stats = [
  { label: 'Services Integrated', value: '15+' },
  { label: 'Daily Users', value: '12,000+' },
  { label: 'Response Time', value: '<2s' },
  { label: 'User Satisfaction', value: '94%' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <Badge variant="info" className="mb-4">About Us</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Smart City Information Portal
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering citizens with instant access to city services, real-time information,
            and digital solutions for a smarter, more connected urban experience.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-900 border-0">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              To create a unified digital platform that bridges the gap between citizens and city services,
              making essential information accessible, transparent, and available at everyone's fingertips.
              We strive to enhance the quality of urban life through innovative technology and user-centered design.
            </p>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} hover className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} hover className="h-full">
                <CardHeader>
                  <div className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Objectives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Project Objectives</CardTitle>
              <CardDescription>What we aim to achieve</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {objective}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Technology Stack</CardTitle>
              <CardDescription>Modern tools for modern solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="info">Next.js 14</Badge>
                    <Badge variant="info">React 18</Badge>
                    <Badge variant="info">TypeScript</Badge>
                    <Badge variant="info">Tailwind CSS</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">UI/UX</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="success">Shadcn UI</Badge>
                    <Badge variant="success">Framer Motion</Badge>
                    <Badge variant="success">Lucide Icons</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="warning">Dark Mode</Badge>
                    <Badge variant="warning">Responsive Design</Badge>
                    <Badge variant="warning">Accessibility</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Target Users */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users className="h-6 w-6 text-primary-600" />
              Target Users
            </CardTitle>
            <CardDescription>Who benefits from this portal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['City Residents', 'Tourists', 'Students', 'Government Officers', 'Emergency Responders'].map((user, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 text-center"
                >
                  <div className="text-3xl mb-2">
                    {index === 0 ? '👥' : index === 1 ? '🧳' : index === 2 ? '🎓' : index === 3 ? '🏛️' : '🚨'}
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {user}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Future Vision */}
        <Card className="bg-gradient-to-br from-primary-600 to-accent-600 border-0 text-white">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <Award className="h-8 w-8" />
              <CardTitle className="text-2xl text-white">Future Enhancements</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Backend Integration</h4>
                  <p className="text-sm text-blue-100">Real-time data from city databases</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">IoT Integration</h4>
                  <p className="text-sm text-blue-100">Live sensor data from smart devices</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Mobile Application</h4>
                  <p className="text-sm text-blue-100">Native iOS and Android apps</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">AI Features</h4>
                  <p className="text-sm text-blue-100">Predictive analytics and chatbot support</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
