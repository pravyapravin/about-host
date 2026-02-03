import ListingTemplate from './ListingTemplate'

const propertyData = {
  name: 'Beach Nest',
  slug: 'beach-nest',
  tagline: 'Surrounded by coconut trees, steps from the sea',
  description: `A peaceful place where you can enjoy, relax and have fun. The bungalow is surrounded by coconut trees and the beach is just a minute walk.

Beach Nest is exactly what it sounds like — a little haven tucked among the palms, close enough to the sea that you can hear it at night. Simple, peaceful, and perfectly positioned for those who want the beach to be the first thing they see each morning.`,
  capacity: 2,
  bedrooms: 1,
  bathrooms: 1,
  location: 'Yermal Thenka, Karnataka',
  rating: '4.8',
  image: '/images/stays/beach-nest.jpeg',
  highlights: [
    'Surrounded by coconut groves',
    '1-minute walk to beach',
    'Peaceful and relaxing',
    'Beautiful terrace',
    'Perfect for beach lovers'
  ],
  amenities: [
    { icon: 'Wifi', name: 'Free WiFi' },
    { icon: 'Car', name: 'Free Parking' },
    { icon: 'UtensilsCrossed', name: 'Kitchen' },
    { icon: 'Wind', name: 'Terrace' },
    { icon: 'Waves', name: 'Beach Access' },
    { icon: 'Home', name: 'Entire Place' }
  ],
  foodPolicy: 'Available on request',
  whatsapp: '+919995426620'
}

function BeachNest() {
  return <ListingTemplate property={propertyData} />
}

export default BeachNest
