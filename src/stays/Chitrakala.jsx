import ListingTemplate from './ListingTemplate'

const propertyData = {
  name: 'Chitrakala',
  slug: 'chitrakala',
  tagline: 'Traditional charm, artistic soul',
  description: `A spacious villa with traditional Mangalorean architecture, tiled roof, and a beautiful sit-out verandah overlooking the garden.

Chitrakala is aptly named — it's like living inside a painting. The wooden beams overhead have witnessed decades of monsoons, and the verandah has hosted countless cups of filter coffee. This is where old-world coastal Karnataka hospitality comes alive.`,
  capacity: 2,
  bedrooms: 1,
  bathrooms: 1,
  location: 'Yermal Thenka, Karnataka',
  rating: '4.9',
  image: '/images/stays/chitrakala.png',
  highlights: [
    'Traditional Mangalorean architecture',
    'Beautiful sit-out verandah',
    'Garden views',
    'Breakfast included',
    'Perfect for couples'
  ],
  amenities: [
    { icon: 'Wifi', name: 'Free WiFi' },
    { icon: 'Car', name: 'Free Parking' },
    { icon: 'UtensilsCrossed', name: 'Kitchen' },
    { icon: 'Leaf', name: 'Garden' },
    { icon: 'Coffee', name: 'Breakfast' },
    { icon: 'Home', name: 'Entire Place' }
  ],
  foodPolicy: 'Breakfast included',
  whatsapp: '+919995426620'
}

function Chitrakala() {
  return <ListingTemplate property={propertyData} />
}

export default Chitrakala
