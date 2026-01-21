import { useState, useEffect, useRef } from 'react'
import {
  Menu,
  X,
  MapPin,
  Users,
  Bed,
  Wifi,
  Car,
  Coffee,
  Waves,
  Sun,
  Star,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Shield,
  Heart,
  DollarSign,
  MessageCircle,
  Utensils,
  Tv,
  AirVent,
  UtensilsCrossed,
  Sunrise,
  Anchor,
  Shell
} from 'lucide-react'

// Property data
const properties = [
  {
    id: 1,
    name: 'Seaglass Cottage',
    tagline: 'Where mornings smell like salt and coffee',
    description: 'A cozy beach cottage with vintage charm and modern comforts. Wake up to the sound of waves just steps from your door.',
    capacity: 4,
    bedrooms: 2,
    price: 189,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    amenities: ['wifi', 'kitchen', 'parking', 'ac']
  },
  {
    id: 2,
    name: 'Azure Villa',
    tagline: 'Luxury meets the infinite blue',
    description: 'Our flagship oceanfront villa with panoramic views, private pool, and space for the whole family to create lasting memories.',
    capacity: 8,
    bedrooms: 4,
    price: 459,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    amenities: ['wifi', 'kitchen', 'parking', 'pool']
  },
  {
    id: 3,
    name: 'Driftwood House',
    tagline: 'Room to play, space to stay',
    description: 'A spacious family beach home with a wraparound porch, game room, and backyard that leads right to the sandy shores.',
    capacity: 6,
    bedrooms: 3,
    price: 279,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    amenities: ['wifi', 'kitchen', 'parking', 'tv']
  },
  {
    id: 4,
    name: 'Sunset Cove Retreat',
    tagline: 'For two hearts and endless sunsets',
    description: 'An intimate getaway designed for romance. Private deck, outdoor shower, and the best sunset views on the coast.',
    capacity: 2,
    bedrooms: 1,
    price: 159,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    amenities: ['wifi', 'coffee', 'ac', 'sunset']
  },
  {
    id: 5,
    name: "The Surfer's Loft",
    tagline: 'Catch waves, catch dreams',
    description: 'A laid-back loft steps from the best surf break. Board storage, outdoor rinse station, and a community of wave-riders.',
    capacity: 4,
    bedrooms: 2,
    price: 219,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    amenities: ['wifi', 'surfboards', 'parking', 'coffee']
  }
]

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael',
    location: 'Portland, OR',
    text: "We've stayed at many coastal rentals, but Seaglass Cottage felt different. It felt like coming home to a place we'd never been. We've already booked our return trip.",
    rating: 5,
    property: 'Seaglass Cottage'
  },
  {
    id: 2,
    name: 'The Martinez Family',
    location: 'Austin, TX',
    text: "Azure Villa gave us the family vacation we'd been dreaming of. The kids still talk about the tide pools and the stars at night. Pure magic.",
    rating: 5,
    property: 'Azure Villa'
  },
  {
    id: 3,
    name: 'James L.',
    location: 'San Francisco, CA',
    text: "As a solo traveler and surfer, The Surfer's Loft was perfect. Great location, great vibes, and I made friends with other guests that I'm still in touch with.",
    rating: 5,
    property: "The Surfer's Loft"
  },
  {
    id: 4,
    name: 'Emma & David',
    location: 'Seattle, WA',
    text: "Sunset Cove was our honeymoon haven. Every evening we'd sit on the deck with wine, watching the sun melt into the ocean. Unforgettable.",
    rating: 5,
    property: 'Sunset Cove Retreat'
  }
]

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', alt: 'Sandy beach at sunrise' },
  { url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', alt: 'Crystal clear ocean water' },
  { url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=600&q=80', alt: 'Coastal cliffs' },
  { url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80', alt: 'Palm trees sunset' },
  { url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&q=80', alt: 'Beach hammock' },
  { url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80', alt: 'Ocean waves' }
]

// Amenity icon mapping
const amenityIcons = {
  wifi: Wifi,
  kitchen: UtensilsCrossed,
  parking: Car,
  ac: AirVent,
  pool: Waves,
  tv: Tv,
  coffee: Coffee,
  sunset: Sunrise,
  surfboards: Anchor
}

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

// Navigation Component
function Navigation({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'Our Story', href: '#story' },
    { name: 'Location', href: '#location' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#footer' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Shell className={`w-8 h-8 ${scrolled ? 'text-ocean-600' : 'text-white'}`} />
            <span className={`font-serif text-2xl font-semibold ${
              scrolled ? 'text-ocean-900' : 'text-white'
            }`}>
              Coastal Stays
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-ocean-400 ${
                  scrolled ? 'text-ocean-800' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#footer"
              className="bg-sunset-500 hover:bg-sunset-600 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? 'text-ocean-900' : 'text-white'} size={24} />
            ) : (
              <Menu className={scrolled ? 'text-ocean-900' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-4 animate-fade-in">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-ocean-800 hover:text-ocean-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#footer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full mt-4 bg-sunset-500 hover:bg-sunset-600 text-white py-3 rounded-full font-medium text-center"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Beautiful coastal sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/40 via-ocean-900/20 to-ocean-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 animate-fade-in-up">
          Where the ocean feels like home
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 animate-fade-in-up animation-delay-200 font-light">
          Five handpicked coastal retreats waiting to welcome you
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
          <a
            href="#properties"
            className="bg-sunset-500 hover:bg-sunset-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-xl hover:scale-105"
          >
            Explore Properties
          </a>
          <a
            href="#story"
            className="border-2 border-white text-white hover:bg-white hover:text-ocean-900 px-8 py-4 rounded-full text-lg font-medium transition-all"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}

// Our Story Section
function OurStory() {
  const [ref, isInView] = useInView()

  return (
    <section id="story" className="py-24 bg-sand-50">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 text-center transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="font-serif text-4xl md:text-5xl text-ocean-900 mb-8">
          More than a stay. A feeling.
        </h2>
        <p className="text-lg text-ocean-700 leading-relaxed mb-8">
          We're a small family who fell in love with this stretch of coast twenty years ago.
          What started as one beach house became five unique retreats, each with its own story
          and character. We don't just rent properties—we share places that have become part
          of our family's story, hoping they'll become part of yours too.
        </p>
        <p className="text-lg text-ocean-700 leading-relaxed">
          Every home is personally maintained by us. Every guest becomes part of our extended
          coastal family. That's not a marketing line—it's simply how we've always done things.
        </p>
        <div className="mt-12 flex justify-center gap-12">
          <div className="text-center">
            <div className="text-4xl font-serif text-sunset-500">20+</div>
            <div className="text-ocean-600 mt-1">Years Hosting</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-sunset-500">5</div>
            <div className="text-ocean-600 mt-1">Unique Properties</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-sunset-500">2,500+</div>
            <div className="text-ocean-600 mt-1">Happy Guests</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Property Card Component
function PropertyCard({ property, index }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 hover:shadow-2xl ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="image-zoom relative h-64">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="font-semibold text-ocean-900">From ${property.price}</span>
          <span className="text-ocean-600 text-sm">/night</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl text-ocean-900 mb-1">{property.name}</h3>
        <p className="text-sunset-500 italic mb-3">{property.tagline}</p>
        <p className="text-ocean-600 text-sm mb-4 line-clamp-2">{property.description}</p>

        {/* Details */}
        <div className="flex items-center gap-4 mb-4 text-ocean-700">
          <div className="flex items-center gap-1">
            <Users size={18} />
            <span className="text-sm">{property.capacity} guests</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed size={18} />
            <span className="text-sm">{property.bedrooms} BR</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex gap-3">
          {property.amenities.map(amenity => {
            const Icon = amenityIcons[amenity]
            return Icon ? (
              <div
                key={amenity}
                className="w-8 h-8 bg-ocean-50 rounded-full flex items-center justify-center"
                title={amenity}
              >
                <Icon size={16} className="text-ocean-600" />
              </div>
            ) : null
          })}
        </div>
      </div>
    </div>
  )
}

// Properties Section
function Properties() {
  const [ref, isInView] = useInView()

  return (
    <section id="properties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-ocean-900 mb-4">
            Find your place by the sea
          </h2>
          <p className="text-ocean-600 text-lg max-w-2xl mx-auto">
            Each of our five properties has its own personality. Whether you're seeking
            romance, adventure, or family fun, there's a perfect spot waiting for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Book Direct Section
function WhyBookDirect() {
  const [ref, isInView] = useInView()

  const benefits = [
    {
      icon: DollarSign,
      title: 'Best Price Guarantee',
      description: "You'll never find a lower rate anywhere else. We pass on the savings from booking fees directly to you."
    },
    {
      icon: MessageCircle,
      title: 'Direct Communication',
      description: "Text us, call us, email us. You'll always reach a real person who knows the property inside and out."
    },
    {
      icon: Heart,
      title: 'Personal Touches',
      description: 'Birthday? Anniversary? Let us know. We love adding special touches to make your stay memorable.'
    },
    {
      icon: Shield,
      title: 'Flexible Policies',
      description: 'Life happens. We work with you on changes and cancellations—no corporate policies, just humans.'
    }
  ]

  return (
    <section className="py-24 bg-ocean-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            The perks of booking with us
          </h2>
          <p className="text-ocean-200 text-lg max-w-2xl mx-auto">
            Skip the middleman. When you book direct, everyone wins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`text-center p-6 rounded-2xl bg-ocean-800/50 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-sunset-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-ocean-200">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Location Highlights Section
function LocationHighlights() {
  const [ref, isInView] = useInView()

  const highlights = [
    {
      icon: Waves,
      title: 'Pristine Beaches',
      description: 'Miles of uncrowded sandy shores, perfect for morning walks or afternoon relaxation.'
    },
    {
      icon: Sun,
      title: '300 Sunny Days',
      description: "This coast is blessed with incredible weather year-round. Pack your sunscreen."
    },
    {
      icon: Utensils,
      title: 'Fresh Seafood',
      description: 'From ocean to table in hours. Local restaurants serve the catch of the day.'
    },
    {
      icon: Anchor,
      title: 'Water Activities',
      description: 'Surfing, kayaking, paddle boarding, fishing—endless ways to enjoy the water.'
    }
  ]

  return (
    <section id="location" className="py-24 bg-sand-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-ocean-900 mb-6">
              This coast is calling
            </h2>
            <p className="text-ocean-700 text-lg mb-8">
              There's a reason we chose to build our lives here. The light is different.
              The air tastes like salt and possibility. Time moves slower. Whether you come
              for a weekend or a month, you'll understand what we mean.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className={`flex gap-4 transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <highlight.icon size={24} className="text-ocean-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ocean-900 mb-1">{highlight.title}</h3>
                    <p className="text-ocean-600 text-sm">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`relative transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80"
              alt="Beautiful coastal scenery"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className="text-sunset-500" size={20} />
                <span className="font-medium text-ocean-900">Coastal Paradise, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, isInView] = useInView()

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-ocean-900 mb-16">
            Stories from our guests
          </h2>

          <div className="relative">
            <div className="bg-sand-50 rounded-3xl p-8 md:p-12">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={24} className="fill-sunset-400 text-sunset-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-2xl md:text-3xl text-ocean-800 mb-8 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-ocean-900">{testimonial.name}</div>
                <div className="text-ocean-500">{testimonial.location}</div>
                <div className="text-sunset-500 text-sm mt-1">Stayed at {testimonial.property}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-ocean-100 hover:bg-ocean-200 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="text-ocean-700" size={24} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? 'bg-ocean-600 w-6' : 'bg-ocean-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-ocean-100 hover:bg-ocean-200 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="text-ocean-700" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Gallery Section
function Gallery() {
  const [ref, isInView] = useInView()

  return (
    <section className="py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-ocean-900 mb-4">
            Life by the water
          </h2>
          <p className="text-ocean-600 text-lg">
            A glimpse of what awaits you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`image-zoom rounded-xl overflow-hidden transition-all duration-700 ${
                index === 0 || index === 5 ? 'md:col-span-1 md:row-span-2' : ''
              } ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTA() {
  const [ref, isInView] = useInView()

  return (
    <section className="py-24 bg-gradient-to-br from-ocean-600 to-ocean-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-ocean-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunset-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 text-center relative z-10 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="font-serif text-4xl md:text-6xl mb-6">
          Ready to wake up to the waves?
        </h2>
        <p className="text-xl text-ocean-100 mb-10">
          Your coastal escape is just a phone call or email away. We'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@coastalstays.com"
            className="bg-white text-ocean-700 hover:bg-sand-100 px-10 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Email Us
          </a>
          <a
            href="tel:+1234567890"
            className="border-2 border-white text-white hover:bg-white hover:text-ocean-700 px-10 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            Call Us
          </a>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer id="footer" className="bg-ocean-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shell className="w-8 h-8 text-ocean-400" />
              <span className="font-serif text-2xl font-semibold">Coastal Stays</span>
            </div>
            <p className="text-ocean-300 mb-6 max-w-md">
              Five unique coastal properties, one family's passion. We've been welcoming
              guests to our little slice of paradise for over 20 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-ocean-800 hover:bg-ocean-700 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-ocean-800 hover:bg-ocean-700 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-ocean-300">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={18} />
                (123) 456-7890
              </a>
              <a href="mailto:hello@coastalstays.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={18} />
                hello@coastalstays.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                Coastal Paradise, CA
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a href="#properties" className="block text-ocean-300 hover:text-white transition-colors">Our Properties</a>
              <a href="#story" className="block text-ocean-300 hover:text-white transition-colors">Our Story</a>
              <a href="#testimonials" className="block text-ocean-300 hover:text-white transition-colors">Guest Reviews</a>
              <a href="#" className="block text-ocean-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-ocean-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ocean-400 text-sm">
            © 2024 Coastal Stays. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-ocean-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation scrolled={scrolled} />
      <Hero />
      <OurStory />
      <Properties />
      <WhyBookDirect />
      <LocationHighlights />
      <Testimonials />
      <Gallery />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
