import ListingTemplate from './ListingTemplate'

const propertyData = {
  name: 'Kutir 1',
  slug: 'kutir-1',
  tagline: 'Nestled in nature, close to the waves',
  description: `An intimate cottage perfect for couples or small families. Wake up to birdsong and fall asleep to the sound of waves.

This kutir was one of the original homes where the family lived while the main bungalow was being built. Small, cozy, and full of character — it's a reminder that the best things in life often come in modest packages.`,
  capacity: 4,
  bedrooms: 2,
  bathrooms: 1,
  location: 'Yermal Thenka, Karnataka',
  rating: '4.8',
  image: '/images/stays/kutir-1.png',
  highlights: [
    'Cozy cottage setting',
    'Surrounded by nature',
    '1-minute walk to beach',
    'Perfect for couples & small families',
    'Peaceful and private'
  ],
  amenities: [
    { icon: 'Wifi', name: 'Free WiFi' },
    { icon: 'Leaf', name: 'Garden' },
    { icon: 'Car', name: 'Free Parking' },
    { icon: 'Waves', name: 'Beach Access' },
    { icon: 'Home', name: 'Entire Place' }
  ],
  foodPolicy: 'Available on request',
  whatsapp: '+919995426620'
}

function Kutir1() {
  return <ListingTemplate property={propertyData} />
}

export default Kutir1
