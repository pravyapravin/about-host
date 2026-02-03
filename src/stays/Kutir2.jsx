import ListingTemplate from './ListingTemplate'

const propertyData = {
  name: 'Kutir 2',
  slug: 'kutir-2',
  tagline: 'The coast in its full glory',
  description: `Our heritage home with wooden beams, antique furniture, and a courtyard. Experience old-world coastal Karnataka hospitality.

Kutir 2 carries the weight of history lightly. The wooden beams creak with stories, the antique furniture has seen generations come and go, and the courtyard still catches the morning light the same way it did fifty years ago.`,
  capacity: 3,
  bedrooms: 1,
  bathrooms: 1,
  location: 'Yermal Thenka, Karnataka',
  rating: '4.9',
  image: '/images/stays/kutir-2.png',
  highlights: [
    'Heritage home with character',
    'Wooden beams & antique furniture',
    'Traditional courtyard',
    'Close to beach',
    'Authentic coastal experience'
  ],
  amenities: [
    { icon: 'Wifi', name: 'Free WiFi' },
    { icon: 'Car', name: 'Free Parking' },
    { icon: 'Home', name: 'Heritage Home' },
    { icon: 'UtensilsCrossed', name: 'Kitchen' },
    { icon: 'Waves', name: 'Beach Access' }
  ],
  foodPolicy: 'Available on request',
  whatsapp: '+919995426620'
}

function Kutir2() {
  return <ListingTemplate property={propertyData} />
}

export default Kutir2
