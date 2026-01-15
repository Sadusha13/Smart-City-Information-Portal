import { Cloud, CloudRain, CloudSnow, Sun, Wind, Droplets, Eye, Sunrise, Sunset, Thermometer } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

const currentWeather = {
  temperature: 24,
  condition: 'Partly Cloudy',
  feels_like: 26,
  humidity: 65,
  wind_speed: 12,
  visibility: 10,
  pressure: 1013,
  uv_index: 6,
  sunrise: '6:24 AM',
  sunset: '7:45 PM',
}

const forecast = [
  { day: 'Today', high: 28, low: 20, condition: 'Partly Cloudy', icon: Cloud, precipitation: 20 },
  { day: 'Tomorrow', high: 30, low: 22, condition: 'Sunny', icon: Sun, precipitation: 5 },
  { day: 'Wednesday', high: 26, low: 19, condition: 'Rainy', icon: CloudRain, precipitation: 80 },
  { day: 'Thursday', high: 25, low: 18, condition: 'Cloudy', icon: Cloud, precipitation: 30 },
  { day: 'Friday', high: 27, low: 20, condition: 'Partly Cloudy', icon: Cloud, precipitation: 15 },
  { day: 'Saturday', high: 29, low: 21, condition: 'Sunny', icon: Sun, precipitation: 10 },
  { day: 'Sunday', high: 31, low: 23, condition: 'Sunny', icon: Sun, precipitation: 5 },
]

const hourlyForecast = [
  { time: '12 PM', temp: 24, icon: Cloud },
  { time: '1 PM', temp: 25, icon: Cloud },
  { time: '2 PM', temp: 26, icon: Sun },
  { time: '3 PM', temp: 27, icon: Sun },
  { time: '4 PM', temp: 28, icon: Sun },
  { time: '5 PM', temp: 27, icon: Cloud },
  { time: '6 PM', temp: 25, icon: Cloud },
  { time: '7 PM', temp: 23, icon: Cloud },
]

export default function WeatherPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Weather Information
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Current conditions and forecast for your city
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Weather - Large Card */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-blue-700 dark:to-cyan-600 text-white border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white text-2xl mb-1">
                      Current Weather
                    </CardTitle>
                    <CardDescription className="text-blue-100">
                      Smart City, Updated just now
                    </CardDescription>
                  </div>
                  <Cloud className="h-16 w-16 text-white/80" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-7xl font-bold mb-2">
                      {currentWeather.temperature}°C
                    </div>
                    <div className="text-2xl text-blue-100">
                      {currentWeather.condition}
                    </div>
                    <div className="text-lg text-blue-100 mt-1">
                      Feels like {currentWeather.feels_like}°C
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="h-4 w-4" />
                      <span className="text-sm text-blue-100">Humidity</span>
                    </div>
                    <div className="text-2xl font-semibold">{currentWeather.humidity}%</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Wind className="h-4 w-4" />
                      <span className="text-sm text-blue-100">Wind</span>
                    </div>
                    <div className="text-2xl font-semibold">{currentWeather.wind_speed} km/h</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm text-blue-100">Visibility</span>
                    </div>
                    <div className="text-2xl font-semibold">{currentWeather.visibility} km</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Thermometer className="h-4 w-4" />
                      <span className="text-sm text-blue-100">Pressure</span>
                    </div>
                    <div className="text-2xl font-semibold">{currentWeather.pressure} hPa</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hourly Forecast */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Hourly Forecast</CardTitle>
                <CardDescription>Temperature throughout the day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {hourlyForecast.map((hour, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center min-w-[80px] p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                    >
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {hour.time}
                      </div>
                      <hour.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {hour.temp}°
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Sun Times</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
                  <div className="flex items-center gap-3">
                    <Sunrise className="h-5 w-5 text-orange-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Sunrise
                    </span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {currentWeather.sunrise}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                  <div className="flex items-center gap-3">
                    <Sunset className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Sunset
                    </span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {currentWeather.sunset}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>UV Index</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                    {currentWeather.uv_index}
                  </div>
                  <Badge variant="warning">Moderate</Badge>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Protection recommended between 10 AM - 4 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 7-Day Forecast */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>7-Day Forecast</CardTitle>
            <CardDescription>Extended weather outlook</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
              {forecast.map((day, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="font-semibold text-gray-900 dark:text-white mb-3">
                    {day.day}
                  </div>
                  <day.icon className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-3" />
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {day.condition}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {day.high}°
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {day.low}°
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400">
                    <Droplets className="h-3 w-3" />
                    {day.precipitation}%
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
