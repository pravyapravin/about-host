import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu,
  X,
  MapPin,
  TreePalm,
  Heart,
  Globe,
  Plane,
  Sun,
  CloudRain,
  Snowflake,
  Star,
  Quote,
  ArrowLeft,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Compass,
  Mountain,
  Waves,
  Home,
  Users,
  Calendar
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

// Navigation Component for About Page
function NavBar({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Homes', href: '/#properties' },
    { name: 'Location', href: '/#location' },
    { name: 'Guest Stories', href: '/#testimonials' },
    { name: 'Contact', href: '/#footer' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-paper-50 shadow-lg' : 'bg-wood-900/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <TreePalm className={`w-8 h-8 ${scrolled ? 'text-terracotta-600' : 'text-paper-100'}`} />
            <span className={`font-display text-2xl ${
              scrolled ? 'text-wood-800' : 'text-paper-50'
            }`}>
              Ashraya Stays
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
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
              href="/#footer"
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg"
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
              <X className={scrolled ? 'text-wood-800' : 'text-paper-50'} size={24} />
            ) : (
              <Menu className={scrolled ? 'text-wood-800' : 'text-paper-50'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-paper-50 rounded-xl shadow-xl mt-2 p-4 animate-fade-in border border-terracotta-200">
            {navLinks.map(link => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
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
              href="/#footer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full mt-4 bg-terracotta-500 hover:bg-terracotta-600 text-white py-3 rounded-lg font-medium text-center"
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
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-wood-800 via-wood-700 to-terracotta-900">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-turmeric-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-terracotta-400 rounded-full blur-3xl" />
      </div>

      {/* Kolam Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="kolam" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="white"/>
            <circle cx="5" cy="5" r="0.5" fill="white"/>
            <circle cx="15" cy="5" r="0.5" fill="white"/>
            <circle cx="5" cy="15" r="0.5" fill="white"/>
            <circle cx="15" cy="15" r="0.5" fill="white"/>
          </pattern>
          <rect width="100" height="100" fill="url(#kolam)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-terracotta-300 hover:text-terracotta-200 mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            {/* Decorative Line */}
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="w-8 h-px bg-turmeric-400/60"/>
              <div className="w-2 h-2 bg-turmeric-400 rounded-full"/>
              <div className="w-8 h-px bg-turmeric-400/60"/>
            </div>

            <p className="text-turmeric-300 text-lg mb-4 font-serif tracking-wide italic">
              The woman behind the welcome
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">
              Meet Vinaya
            </h1>
            <p className="text-paper-200 text-xl font-serif leading-relaxed">
              Some people leave home to find themselves. Others return to it.
              This is the story of a woman who did both.
            </p>
          </div>

          {/* Host Photo Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-paper-200/20 bg-wood-600">
              <img
                src="/images/host/vinaya.jpg"
                alt="Vinaya at the Yermal beach bungalow"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Frame Corner */}
            <div className="absolute -top-3 -left-3 w-16 h-16">
              <svg viewBox="0 0 64 64" className="w-full h-full text-turmeric-400">
                <circle cx="32" cy="32" r="4" fill="currentColor"/>
                <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.6"/>
                <circle cx="48" cy="16" r="3" fill="currentColor" opacity="0.6"/>
                <circle cx="16" cy="48" r="3" fill="currentColor" opacity="0.6"/>
                <path d="M16 16 Q32 8 48 16 Q56 32 48 48 Q32 56 16 48 Q8 32 16 16" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rotate-180">
              <svg viewBox="0 0 64 64" className="w-full h-full text-turmeric-400">
                <circle cx="32" cy="32" r="4" fill="currentColor"/>
                <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.6"/>
                <circle cx="48" cy="16" r="3" fill="currentColor" opacity="0.6"/>
                <circle cx="16" cy="48" r="3" fill="currentColor" opacity="0.6"/>
                <path d="M16 16 Q32 8 48 16 Q56 32 48 48 Q32 56 16 48 Q8 32 16 16" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Decoration at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-20">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-paper-50"
          />
        </svg>
      </div>
    </section>
  )
}

// Story Section
function HerStory() {
  const [ref1, isInView1] = useInView()
  const [ref2, isInView2] = useInView()
  const [ref3, isInView3] = useInView()
  const [ref4, isInView4] = useInView()

  const storyParagraphs = [
    {
      ref: ref1,
      isInView: isInView1,
      title: "A Child of Yermal",
      content: `Vinaya grew up in Yermal. Not the Yermal you might find on a map — maps are too busy for villages like this — but the one that exists in the salt-stained memories of fisherfolk and the shade of coconut palms. The beach, the village, the people: she knew them all by name and by habit.

Her father, Vasudeva Suvarna — lovingly called Vas Anna by everyone who has ever needed help in the village — is a man of quiet standing. The kind of man who solves disputes without raising his voice and lends money without writing it down. The family lived in two small kutirs while the beach bungalow was being built, those years when the walls rose slowly and the sea waited patiently.

That home — once theirs, once the place where Vinaya learned to read by lantern light — is now open to guests. So that others might feel what it was to live quietly beside the sea.`
    },
    {
      ref: ref2,
      isInView: isInView2,
      title: "Away from the Shore",
      content: `She married a scientist. A man who studied fish for a living, which seemed appropriate for a girl from Yermal. Together they moved to Veraval in Gujarat, where the Arabian Sea wears a different face — rougher, more industrial, full of trawlers and ice factories. There, Vinaya taught at a fisheries college.

Life carried them next to Cochin in Kerala, where she traded the classroom for a desk at Bharati AXA, and later ICICI Bank. She learned about policies and premiums, about targets and quarterly reviews. She was good at it. She was good at most things she tried.

Then came Delhi — the capital, the chaos, the absolute contrast to everything she had known. In Delhi, the sea is just a word. In Delhi, Yermal was a place she mentioned at parties when people asked where she was "originally from."

But through it all, the village stayed somewhere in the back of her mind. Like a song you forget you know until someone hums the first few notes.`
    },
    {
      ref: ref3,
      isInView: isInView3,
      title: "Back Where She Belongs",
      content: `Now she is home again.

It happened the way most important things happen — not with a grand decision but with a series of small ones. A visit that lasted longer than planned. A morning walk on the beach that reminded her what mornings were supposed to feel like.

She and her husband have built their own house now. A traditional Mangalorean home with a tiled roof and a courtyard, the kind of house that knows how to stay cool in summer and warm in spirit. A retirement home, they call it, though Vinaya has never been the retiring type.

And she has become the first woman from Yermal to open her family's coastal home to travellers. The bungalow where she grew up, the kutirs where her family once lived — these are no longer private memories. They are shared ones now. Strangers sleep where she once slept. They wake to the same sounds she woke to. And somehow, that feels right.`
    },
    {
      ref: ref4,
      isInView: isInView4,
      title: "The Philosophy",
      content: null,
      quote: "A guest here is not a visitor. They are someone the sea has sent."
    }
  ]

  return (
    <section className="py-24 bg-paper-50">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-terracotta-300"/>
            <Heart className="w-6 h-6 text-terracotta-400" />
            <div className="w-12 h-px bg-terracotta-300"/>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-wood-800 mb-4">
            Her Story
          </h2>
          <p className="text-wood-600 font-serif italic">
            Told in the manner of old villages, where stories take their time
          </p>
        </div>

        {/* Story Paragraphs */}
        <div className="space-y-20">
          {storyParagraphs.map((para, index) => (
            <div
              key={para.title}
              ref={para.ref}
              className={`transition-all duration-1000 ${
                para.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Chapter Title */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-terracotta-400 font-display text-6xl opacity-30">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-wood-800">
                  {para.title}
                </h3>
              </div>

              {/* Content or Quote */}
              {para.content ? (
                <div className="font-serif text-lg text-wood-700 leading-relaxed space-y-6 pl-4 border-l-2 border-terracotta-200">
                  {para.content.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              ) : (
                <div className="relative bg-gradient-to-br from-terracotta-50 to-turmeric-50 rounded-2xl p-8 md:p-12 border border-terracotta-100">
                  <Quote className="absolute top-4 left-4 w-12 h-12 text-terracotta-200" />
                  <Quote className="absolute bottom-4 right-4 w-12 h-12 text-terracotta-200 rotate-180" />
                  <p className="font-display text-2xl md:text-3xl text-wood-800 text-center italic relative z-10">
                    "{para.quote}"
                  </p>
                  <p className="text-center text-terracotta-600 mt-4 font-medium">— Vinaya</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Meet the Family Section
function MeetTheFamily() {
  const [ref, isInView] = useInView()

  const familyMembers = [
    {
      name: 'Vinaya',
      role: 'Your Host',
      image: '/images/host/vinaya.jpg',
      description: 'The heart of Ashraya Stays. She left the village, saw the world, and came back to share it with you.'
    },
    {
      name: 'Pravin',
      role: 'The Scientist',
      image: '/images/host/pravin.jpg',
      description: 'A fisheries scientist who spent his days out at sea, experimenting where the waves meet the horizon. He has even sailed to Antarctica for work.'
    },
    {
      name: 'Seetha',
      role: 'Amma',
      image: '/images/host/seetha.jpg',
      description: 'The keeper of recipes and stories. Her filter coffee has converted many a chai drinker.'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-turmeric-50 to-paper-50">
      <div className="max-w-5xl mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-terracotta-300"/>
              <Users className="w-6 h-6 text-terracotta-400" />
              <div className="w-12 h-px bg-terracotta-300"/>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-wood-800 mb-4">
              Meet the Family
            </h2>
            <p className="text-wood-600 font-serif italic">
              The people who make this place feel like home
            </p>
          </div>

          {/* Family Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {familyMembers.map((member, index) => (
              <div
                key={member.name}
                className={`text-center transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Photo */}
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-paper-100 shadow-xl bg-wood-200">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-terracotta-400 rounded-full border-2 border-paper-50" />
                </div>

                {/* Info */}
                <h3 className="font-display text-2xl text-wood-800 mb-1">{member.name}</h3>
                <p className="text-terracotta-500 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-wood-600 font-serif leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Places Visited Section
function PlacesVisited() {
  const [ref, isInView] = useInView()

  const indiaPlaces = [
    { name: 'Andaman & Nicobar', icon: Waves },
    { name: 'Lakshadweep', icon: Waves },
    { name: 'North-East India', subtitle: 'The Six Sisters', icon: Mountain },
    { name: 'Madhya Pradesh', icon: Compass },
    { name: 'Uttar Pradesh', icon: Compass },
    { name: 'Tamil Nadu', icon: Home },
    { name: 'Andhra Pradesh', icon: Compass },
    { name: 'Kerala', icon: Waves },
    { name: 'Odisha', icon: Home },
    { name: 'Gujarat', icon: Compass },
    { name: 'Rajasthan', icon: Sun },
    { name: 'Punjab', icon: Compass },
    { name: 'Uttarakhand', icon: Mountain },
    { name: 'Haryana', icon: Compass },
    { name: 'Himachal Pradesh', icon: Mountain },
    { name: 'Jammu & Kashmir', icon: Mountain },
    { name: 'West Bengal', icon: Compass },
    { name: 'Sikkim', icon: Mountain },
    { name: 'Maharashtra', icon: Compass }
  ]

  const worldPlaces = [
    { name: 'Egypt', icon: Sun },
    { name: 'Dubai', icon: Sun },
    { name: 'Paris', icon: Globe },
    { name: 'Switzerland', icon: Mountain },
    { name: 'Thailand', icon: Compass },
    { name: 'Italy', icon: Globe },
    { name: 'Vatican', icon: Home },
    { name: 'Germany', icon: Globe },
    { name: 'Netherlands', icon: Globe },
    { name: 'Vietnam', icon: Compass }
  ]

  return (
    <section className="py-24 bg-wood-800 text-paper-50">
      <div className="max-w-6xl mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-terracotta-400/60"/>
              <Plane className="w-6 h-6 text-terracotta-400" />
              <div className="w-12 h-px bg-terracotta-400/60"/>
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              A Traveller at Heart
            </h2>
            <p className="text-paper-300 font-serif italic max-w-2xl mx-auto">
              Before she became a host, she was a guest. In fishing villages and capital cities,
              on mountain trails and island shores. Each journey taught her something about what
              it means to welcome a stranger.
            </p>
          </div>

          {/* India Map Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-5 h-5 text-turmeric-400" />
              <h3 className="font-display text-2xl text-turmeric-300">Across India</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {indiaPlaces.map((place, index) => (
                <div
                  key={place.name}
                  className={`bg-wood-700/50 hover:bg-wood-600/50 border border-wood-600 rounded-xl p-4 transition-all duration-500 hover:scale-105 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <place.icon className="w-5 h-5 text-terracotta-400 mb-2" />
                  <p className="font-medium text-sm">{place.name}</p>
                  {place.subtitle && (
                    <p className="text-paper-400 text-xs mt-1">{place.subtitle}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* World Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-5 h-5 text-turmeric-400" />
              <h3 className="font-display text-2xl text-turmeric-300">Around the World</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {worldPlaces.map((place, index) => (
                <div
                  key={place.name}
                  className={`bg-gradient-to-br from-terracotta-600/30 to-wood-700/50 border border-terracotta-500/30 rounded-xl p-4 text-center transition-all duration-500 hover:scale-105 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(indiaPlaces.length + index) * 50}ms` }}
                >
                  <place.icon className="w-6 h-6 text-terracotta-300 mx-auto mb-2" />
                  <p className="font-display text-lg">{place.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Favorite Vacations */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-5 h-5 text-turmeric-400" />
              <h3 className="font-display text-2xl text-turmeric-300">Top 3 Favorite Journeys</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className={`bg-gradient-to-br from-turmeric-500/20 to-wood-700/50 border border-turmeric-400/30 rounded-2xl p-6 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '100ms' }}>
                <div className="text-4xl mb-3">🙏</div>
                <h4 className="font-display text-xl mb-2">Chardham</h4>
                <p className="text-paper-300 text-sm font-serif">The sacred pilgrimage through Yamunotri, Gangotri, Kedarnath, and Badrinath — where the mountains touch the divine.</p>
              </div>
              <div className={`bg-gradient-to-br from-terracotta-500/20 to-wood-700/50 border border-terracotta-400/30 rounded-2xl p-6 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="text-4xl mb-3">🏝️</div>
                <h4 className="font-display text-xl mb-2">Indira Point, Nicobar</h4>
                <p className="text-paper-300 text-sm font-serif">India's southernmost tip. Standing where the land ends and the endless ocean begins.</p>
              </div>
              <div className={`bg-gradient-to-br from-leaf-500/20 to-wood-700/50 border border-leaf-400/30 rounded-2xl p-6 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '300ms' }}>
                <div className="text-4xl mb-3">🏔️</div>
                <h4 className="font-display text-xl mb-2">Ladakh</h4>
                <p className="text-paper-300 text-sm font-serif">The land of high passes. Where the air is thin, the skies are endless, and silence has a sound of its own.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Seasonal Highlights Section
function SeasonalHighlights() {
  const [ref, isInView] = useInView()

  const seasons = [
    {
      icon: CloudRain,
      title: 'Monsoon Vibes',
      months: 'June - September',
      description: 'When the rain arrives, Yermal transforms. The sea turns theatrical, the palms dance, and the chai tastes better. Not a beach season — a soul season.',
      color: 'from-leaf-600 to-leaf-700'
    },
    {
      icon: Sun,
      title: 'Winter Warmth',
      months: 'October - February',
      description: 'Clear skies, gentle seas, perfect sunsets. The beach belongs to morning walkers and evening dreamers. The best time for doing nothing at all.',
      color: 'from-turmeric-500 to-turmeric-600'
    },
    {
      icon: Waves,
      title: 'Summer by the Sea',
      months: 'March - May',
      description: 'Warm days call for early morning swims and lazy afternoons under the fan. The mangoes are ripe. The coconut water is cold. Life slows down.',
      color: 'from-terracotta-500 to-terracotta-600'
    },
    {
      icon: Star,
      title: 'Festival Season',
      months: 'Year Round',
      description: 'Temple festivals, boat races, harvest celebrations. In Yermal, there is always a reason to gather, always a reason to share a meal.',
      color: 'from-wood-600 to-wood-700'
    }
  ]

  return (
    <section className="py-24 bg-paper-100">
      <div className="max-w-6xl mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-terracotta-300"/>
              <Calendar className="w-6 h-6 text-terracotta-400" />
              <div className="w-12 h-px bg-terracotta-300"/>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-wood-800 mb-4">
              What to Expect
            </h2>
            <p className="text-wood-600 font-serif italic max-w-2xl mx-auto">
              Yermal has its moods. Each season brings a different kind of quiet.
            </p>
          </div>

          {/* Season Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {seasons.map((season, index) => (
              <div
                key={season.title}
                className={`relative overflow-hidden rounded-2xl transition-all duration-700 hover:shadow-xl ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${season.color}`} />
                <div className="relative p-8 text-white">
                  <season.icon className="w-10 h-10 mb-4 opacity-80" />
                  <h3 className="font-display text-2xl mb-1">{season.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{season.months}</p>
                  <p className="font-serif leading-relaxed opacity-90">
                    {season.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonial Section
function Testimonial() {
  const [ref, isInView] = useInView()

  return (
    <section className="py-24 bg-gradient-to-br from-turmeric-50 to-paper-50">
      <div className="max-w-4xl mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-terracotta-300"/>
              <Users className="w-6 h-6 text-terracotta-400" />
              <div className="w-12 h-px bg-terracotta-300"/>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-wood-800 mb-4">
              What Guests Say
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-terracotta-100">
            {/* Decorative Corners */}
            <div className="absolute -top-3 -left-3 w-12 h-12 opacity-50">
              <svg viewBox="0 0 48 48" className="w-full h-full text-terracotta-400">
                <circle cx="24" cy="24" r="3" fill="currentColor"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                <circle cx="36" cy="12" r="2" fill="currentColor"/>
                <circle cx="12" cy="36" r="2" fill="currentColor"/>
                <path d="M12 12 Q24 6 36 12 Q42 24 36 36 Q24 42 12 36 Q6 24 12 12" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 opacity-50 rotate-180">
              <svg viewBox="0 0 48 48" className="w-full h-full text-terracotta-400">
                <circle cx="24" cy="24" r="3" fill="currentColor"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                <circle cx="36" cy="12" r="2" fill="currentColor"/>
                <circle cx="12" cy="36" r="2" fill="currentColor"/>
                <path d="M12 12 Q24 6 36 12 Q42 24 36 36 Q24 42 12 36 Q6 24 12 12" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>

            <Quote className="w-12 h-12 text-terracotta-200 mb-6" />

            <blockquote className="font-serif text-xl md:text-2xl text-wood-700 leading-relaxed mb-8 italic">
              "Vinaya doesn't run a homestay. She runs a home. The difference became clear on the first evening,
              when she sat with us on the verandah and told us stories about the village, about her father,
              about the family who used to live in the house next door. By the time we left, we weren't guests anymore.
              We were people who had been trusted with a memory."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center">
                <span className="font-display text-terracotta-600 text-lg">SK</span>
              </div>
              <div>
                <p className="font-semibold text-wood-800">Suresh & Kavitha</p>
                <p className="text-wood-500 text-sm">Bangalore • Stayed at Beach Bungalow</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-turmeric-400 text-turmeric-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CallToAction() {
  const [ref, isInView] = useInView()

  return (
    <section className="py-24 bg-gradient-to-br from-terracotta-600 to-terracotta-800 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-terracotta-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-turmeric-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 text-center relative z-10 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="font-display text-4xl md:text-5xl mb-6">
          Come, stay a while
        </h2>
        <p className="text-xl text-terracotta-100 mb-10 font-serif">
          Vinaya is waiting with filter coffee and stories. The sea is doing what it always does.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/#properties"
            className="bg-paper-50 text-terracotta-700 hover:bg-paper-100 px-10 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Explore Our Homes
          </Link>
          <a
            href="https://wa.me/919995426620"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-paper-50 text-paper-50 hover:bg-paper-50 hover:text-terracotta-700 px-10 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Chat with Vinaya
          </a>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-wood-900 text-paper-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <TreePalm className="w-10 h-10 text-terracotta-400" />
              <span className="font-display text-3xl">Ashraya Stays</span>
            </Link>
            <p className="text-paper-300 mb-6 max-w-md font-serif leading-relaxed">
              Six coastal homes, one host who loves what she does. Located in Yermal
              Thenka between Mangalore and Udupi — where the highway meets the sea.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-wood-800 hover:bg-terracotta-600 rounded-lg flex items-center justify-center transition-colors border border-wood-700">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-wood-800 hover:bg-terracotta-600 rounded-lg flex items-center justify-center transition-colors border border-wood-700">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl mb-4 text-terracotta-300">Get in Touch</h3>
            <div className="space-y-3 text-paper-300">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-terracotta-300 transition-colors">
                <Phone size={18} />
                +91 98765 43210
              </a>
              <a href="mailto:vinaya@ashrayastays.com" className="flex items-center gap-2 hover:text-terracotta-300 transition-colors">
                <Mail size={18} />
                vinaya@ashrayastays.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-terracotta-400" />
                Yermal Thenka, Udupi District
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl mb-4 text-terracotta-300">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-paper-300 hover:text-terracotta-300 transition-colors">Home</Link>
              <Link to="/#properties" className="block text-paper-300 hover:text-terracotta-300 transition-colors">Our Homes</Link>
              <Link to="/about-vinaya" className="block text-paper-300 hover:text-terracotta-300 transition-colors">About Vinaya</Link>
              <a href="/#testimonials" className="block text-paper-300 hover:text-terracotta-300 transition-colors">Guest Stories</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-wood-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-paper-400 text-sm">
            © 2026 Ashraya Stays. All rights reserved.
          </p>
          <p className="text-paper-500 text-sm font-serif italic">
            "Atithi Devo Bhava" — The guest is God
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main About Page Component
function AboutVinaya() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-paper-50">
      <NavBar scrolled={scrolled} />
      <Hero />
      <HerStory />
      <MeetTheFamily />
      <PlacesVisited />
      <SeasonalHighlights />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default AboutVinaya
