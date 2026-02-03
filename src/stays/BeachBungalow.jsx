import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu,
  X,
  MapPin,
  Users,
  Bed,
  Wifi,
  Car,
  Leaf,
  UtensilsCrossed,
  TreePalm,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  Star,
  ArrowLeft,
  Home,
  Waves,
  Check,
  X as XIcon,
  Image
} from 'lucide-react'

// Intersection Observer Hook
function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.1, ...options })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

// Property Data
const propertyData = {
  name: 'Beach Bungalow',
  tagline: 'Where the beach meets your doorstep',
  description: `A breathtaking beachfront bungalow with modern comfort, rustic interiors, and a unique feeling of spaciousness. The beach is just a minute away.

This is where Vinaya grew up. The walls have stories, the windows have views, and the air carries the salt of the sea. What was once a family home is now open to travelers seeking something real.`,
  capacity: 10,
  bedrooms: 3,
  bathrooms: 2,
  location: 'Yermal Thenka, Karnataka',
  highlights: [
    '1-minute walk to pristine beach',
    'Traditional Mangalorean architecture',
    'Surrounded by coconut groves',
    'Home-cooked meals available',
    'Perfect for families & groups'
  ],
  amenities: [
    { icon: Wifi, name: 'Free WiFi' },
    { icon: Car, name: 'Free Parking' },
    { icon: Leaf, name: 'Garden' },
    { icon: UtensilsCrossed, name: 'Kitchen' },
    { icon: Waves, name: 'Beach Access' },
    { icon: Home, name: 'Entire Place' }
  ],
  airbnbUrl: 'https://www.airbnb.com/rooms/38033343',
  whatsapp: '+919995426620'
}

// Navigation Component
function NavBar({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Homes', href: '/#properties' },
    { name: 'About Vinaya', href: '/about-vinaya', isRoute: true },
    { name: 'Contact', href: '/#footer' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-paper-50 shadow-lg' : 'bg-wood-900/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <TreePalm className={`w-8 h-8 ${scrolled ? 'text-terracotta-600' : 'text-paper-100'}`} />
            <span className={`font-display text-2xl ${
              scrolled ? 'text-wood-800' : 'text-paper-50'
            }`}>
              Ashraya Stays
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-terracotta-500 ${
                    scrolled ? 'text-wood-700' : 'text-paper-100'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-terracotta-500 ${
                    scrolled ? 'text-wood-700' : 'text-paper-100'
                  }`}
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href={`https://wa.me/${propertyData.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg"
            >
              Book Now
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? 'text-wood-800' : 'text-paper-50'} size={24} />
            ) : (
              <Menu className={scrolled ? 'text-wood-800' : 'text-paper-50'} size={24} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-paper-50 rounded-xl shadow-xl mt-2 p-4 animate-fade-in border border-terracotta-200">
            {navLinks.map(link => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block py-3 text-wood-700 hover:text-terracotta-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-wood-700 hover:text-terracotta-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href={`https://wa.me/${propertyData.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full mt-4 bg-terracotta-500 hover:bg-terracotta-600 text-white py-3 rounded-lg font-medium text-center"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section with Image Gallery Placeholder
function Hero() {
  return (
    <section className="pt-20 bg-wood-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-terracotta-300 hover:text-terracotta-200 mb-6 transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back to All Stays</span>
        </Link>

        <h1 className="font-display text-4xl md:text-5xl text-white mb-2">
          {propertyData.name}
        </h1>
        <p className="text-terracotta-300 text-lg font-serif italic mb-6">
          {propertyData.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-paper-200 text-sm">
          <div className="flex items-center gap-1">
            <MapPin size={16} className="text-terracotta-400" />
            <span>{propertyData.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} className="text-terracotta-400" />
            <span>{propertyData.capacity} guests</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed size={16} className="text-terracotta-400" />
            <span>{propertyData.bedrooms} bedrooms</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-turmeric-400 fill-turmeric-400" />
            <span>4.9 rating</span>
          </div>
        </div>
      </div>

      {/* Image Gallery Placeholder */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Main Large Image */}
          <div className="md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto bg-wood-700 rounded-xl overflow-hidden relative group">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-paper-300">
              <Image size={48} className="mb-3 opacity-50" />
              <p className="text-sm opacity-70">Main photo coming soon</p>
            </div>
            <img
              src="/images/stays/beach-bungalow.png"
              alt="Beach Bungalow"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Smaller Images */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-wood-700 rounded-xl overflow-hidden relative"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-paper-300">
                <Image size={32} className="mb-2 opacity-50" />
                <p className="text-xs opacity-70">Photo {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Availability Calendar Component
function AvailabilityCalendar() {
  const [ref, isInView] = useInView()
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [bookedDates, setBookedDates] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch calendar data
  useEffect(() => {
    async function fetchCalendar() {
      try {
        setLoading(true)
        const response = await fetch('/api/calendar?listing=beach-bungalow')

        if (!response.ok) {
          throw new Error('Failed to fetch availability')
        }

        const data = await response.json()
        setBookedDates(data.bookedDates || [])
        setError(null)
      } catch (err) {
        console.error('Calendar error:', err)
        setError('Unable to load availability. Please contact us directly.')
      } finally {
        setLoading(false)
      }
    }

    fetchCalendar()
  }, [])

  // Calendar helpers
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const formatDateString = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  }

  const isDateBooked = (year, month, day) => {
    const dateStr = formatDateString(year, month, day)
    return bookedDates.includes(dateStr)
  }

  const isDatePast = (year, month, day) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const checkDate = new Date(year, month, day)
    return checkDate < today
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const renderCalendar = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)

    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 md:h-12" />)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isPast = isDatePast(year, month, day)
      const isBooked = isDateBooked(year, month, day)
      const isToday = new Date().toDateString() === new Date(year, month, day).toDateString()

      let dayClass = 'h-10 md:h-12 flex items-center justify-center rounded-lg text-sm font-medium transition-all '

      if (isPast) {
        dayClass += 'text-wood-300 bg-wood-50'
      } else if (isBooked) {
        dayClass += 'bg-terracotta-100 text-terracotta-700 line-through'
      } else {
        dayClass += 'bg-leaf-50 text-leaf-700 hover:bg-leaf-100'
      }

      if (isToday) {
        dayClass += ' ring-2 ring-terracotta-400'
      }

      days.push(
        <div key={day} className={dayClass}>
          {day}
        </div>
      )
    }

    return days
  }

  return (
    <section className="py-16 bg-paper-50">
      <div className="max-w-4xl mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-terracotta-300" />
              <Calendar className="w-6 h-6 text-terracotta-400" />
              <div className="w-8 h-px bg-terracotta-300" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-wood-800 mb-2">
              Check Availability
            </h2>
            <p className="text-wood-600 font-serif">
              Live calendar synced with Airbnb bookings
            </p>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-2xl shadow-xl border border-terracotta-100 p-6 md:p-8">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-10 h-10 border-4 border-terracotta-200 border-t-terracotta-500 rounded-full animate-spin mb-4" />
                <p className="text-wood-500">Loading availability...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <XIcon className="w-12 h-12 text-terracotta-400 mx-auto mb-4" />
                <p className="text-wood-600 mb-4">{error}</p>
                <a
                  href={`https://wa.me/${propertyData.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-3 rounded-lg font-medium transition-all"
                >
                  <MessageCircle size={18} />
                  Contact Us on WhatsApp
                </a>
              </div>
            ) : (
              <>
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    className="p-2 hover:bg-wood-100 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="text-wood-600" />
                  </button>
                  <h3 className="font-display text-xl text-wood-800">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h3>
                  <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-wood-100 rounded-lg transition-colors"
                  >
                    <ChevronRight className="text-wood-600" />
                  </button>
                </div>

                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayNames.map(day => (
                    <div key={day} className="h-8 flex items-center justify-center text-xs font-medium text-wood-500">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {renderCalendar()}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-wood-100">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-leaf-50 border border-leaf-200" />
                    <span className="text-sm text-wood-600">Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-terracotta-100 border border-terracotta-200" />
                    <span className="text-sm text-wood-600">Booked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-wood-50 border border-wood-200" />
                    <span className="text-sm text-wood-600">Past</span>
                  </div>
                </div>

                {/* Last Updated */}
                <p className="text-center text-xs text-wood-400 mt-4">
                  <Clock size={12} className="inline mr-1" />
                  Calendar syncs automatically with Airbnb
                </p>
              </>
            )}
          </div>

          {/* Booking CTA */}
          <div className="mt-8 text-center">
            <a
              href={`https://wa.me/${propertyData.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Vinaya!%20I'm%20interested%20in%20booking%20Beach%20Bungalow.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              <MessageCircle size={20} />
              Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Property Details Section
function PropertyDetails() {
  const [ref, isInView] = useInView()

  return (
    <section className="py-16 bg-paper-100">
      <div className="max-w-6xl mx-auto px-4">
        <div
          ref={ref}
          className={`grid lg:grid-cols-3 gap-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl text-wood-800 mb-6">
              About This Home
            </h2>
            <div className="font-serif text-lg text-wood-700 leading-relaxed space-y-4">
              {propertyData.description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-8">
              <h3 className="font-display text-xl text-wood-800 mb-4">Highlights</h3>
              <ul className="space-y-3">
                {propertyData.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-leaf-600 mt-0.5 flex-shrink-0" />
                    <span className="text-wood-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Amenities Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-terracotta-100 p-6 sticky top-24">
              <h3 className="font-display text-xl text-wood-800 mb-6">Amenities</h3>
              <div className="grid grid-cols-2 gap-4">
                {propertyData.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-terracotta-50 rounded-lg flex items-center justify-center">
                      <amenity.icon size={20} className="text-terracotta-600" />
                    </div>
                    <span className="text-sm text-wood-700">{amenity.name}</span>
                  </div>
                ))}
              </div>

              <hr className="my-6 border-wood-100" />

              {/* Quick Info */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-wood-500">Check-in</span>
                  <span className="text-wood-700 font-medium">2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-wood-500">Check-out</span>
                  <span className="text-wood-700 font-medium">11:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-wood-500">Cancellation</span>
                  <span className="text-wood-700 font-medium">Flexible</span>
                </div>
              </div>

              <hr className="my-6 border-wood-100" />

              <a
                href={`https://wa.me/${propertyData.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Vinaya!%20I%20have%20a%20question%20about%20Beach%20Bungalow.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-terracotta-500 hover:bg-terracotta-600 text-white text-center py-3 rounded-lg font-medium transition-all"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-wood-900 text-paper-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <TreePalm className="w-8 h-8 text-terracotta-400" />
            <span className="font-display text-2xl">Ashraya Stays</span>
          </div>

          <div className="flex items-center gap-6 text-paper-300">
            <a href="tel:+919995426620" className="flex items-center gap-2 hover:text-terracotta-300 transition-colors">
              <Phone size={18} />
              <span>+91 99954 26620</span>
            </a>
            <a href="mailto:vinaya@ashrayastays.com" className="flex items-center gap-2 hover:text-terracotta-300 transition-colors">
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-wood-800 hover:bg-terracotta-600 rounded-lg flex items-center justify-center transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-wood-800 hover:bg-terracotta-600 rounded-lg flex items-center justify-center transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-wood-700 mt-8 pt-8 text-center text-paper-400 text-sm">
          <p>© 2026 Ashraya Stays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Component
function BeachBungalow() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-paper-50">
      <NavBar scrolled={scrolled} />
      <Hero />
      <PropertyDetails />
      <AvailabilityCalendar />
      <Footer />
    </div>
  )
}

export default BeachBungalow
