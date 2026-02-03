import ListingTemplate from './ListingTemplate'

const propertyData = {
  name: 'Rattan',
  slug: 'rattan',
  tagline: 'Where every evening is golden',
  description: `Perched with stunning sunset views, this cozy retreat offers the perfect blend of privacy and proximity to the beach.

Rattan is named for the cane furniture that fills its rooms — simple, elegant, timeless. The sunsets here are the kind that make you forget to check your phone. The neer dosa breakfast has converted many a guest into a regular.`,
  capacity: 2,
  bedrooms: 1,
  bathrooms: 1,
  location: 'Yermal Thenka, Karnataka',
  rating: '4.9',
  image: '/images/stays/rattan.png',
  highlights: [
    'Stunning sunset views',
    'Cozy and private retreat',
    'Breakfast included',
    'Beautiful terrace',
    'Perfect for couples'
  ],
  amenities: [
    { icon: 'Wifi', name: 'Free WiFi' },
    { icon: 'Wind', name: 'Terrace' },
    { icon: 'Car', name: 'Free Parking' },
    { icon: 'UtensilsCrossed', name: 'Kitchen' },
    { icon: 'Coffee', name: 'Breakfast' },
    { icon: 'Home', name: 'Entire Place' }
  ],
  foodPolicy: 'Breakfast included',
  whatsapp: '+919995426620'
}

function Rattan() {
  return <ListingTemplate property={propertyData} />
}

export default Rattan
