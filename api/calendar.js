// Vercel Serverless Function to fetch and parse Airbnb iCal feed
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate'); // Cache for 5 minutes

  const { listing } = req.query;

  // Map listing slugs to their iCal URLs
  const calendarUrls = {
    'beach-bungalow': 'https://www.airbnb.com/calendar/ical/38033343.ics?t=2c0c9b896c694bdd900a9d9223fbfb61&locale=en-GB',
    'chitrakala': 'https://www.airbnb.com/calendar/ical/1558421795978654942.ics?t=57539a31de9341f7a401d650a201dd3b&locale=en-GB',
    'kutir-1': 'https://www.airbnb.com/calendar/ical/48931887.ics?t=41c6e8c13b6f4c478d292c38c75de198&locale=en-GB',
    'kutir-2': 'https://www.airbnb.com/calendar/ical/48931950.ics?t=2669258982ce4b1795748a3bd563d022&locale=en-GB',
    'rattan': 'https://www.airbnb.com/calendar/ical/1556978523333090806.ics?t=e7e71ac18dbf4bb58414830dc03abf88&locale=en-GB',
    'beach-nest': 'https://www.airbnb.com/calendar/ical/1131491950724661026.ics?t=96c315a722b14f08a29164bbec9d7d2d&locale=en-GB'
  };

  const icalUrl = calendarUrls[listing];

  if (!icalUrl) {
    return res.status(404).json({ error: 'Listing not found' });
  }

  try {
    const response = await fetch(icalUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch calendar: ${response.status}`);
    }

    const icalData = await response.text();
    const bookedDates = parseICalToBookedDates(icalData);

    return res.status(200).json({
      listing,
      bookedDates,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Calendar fetch error:', error);
    return res.status(500).json({ error: 'Failed to fetch calendar data' });
  }
}

// Parse iCal data and extract booked date ranges
function parseICalToBookedDates(icalData) {
  const bookedDates = [];
  const events = icalData.split('BEGIN:VEVENT');

  for (let i = 1; i < events.length; i++) {
    const event = events[i];

    // Extract DTSTART and DTEND
    const startMatch = event.match(/DTSTART;VALUE=DATE:(\d{8})/);
    const endMatch = event.match(/DTEND;VALUE=DATE:(\d{8})/);

    if (startMatch && endMatch) {
      const startDate = parseICalDate(startMatch[1]);
      const endDate = parseICalDate(endMatch[1]);

      // Add all dates in the range (excluding end date as it's checkout day)
      let currentDate = new Date(startDate);
      while (currentDate < endDate) {
        bookedDates.push(formatDate(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }
  }

  return [...new Set(bookedDates)].sort(); // Remove duplicates and sort
}

// Parse iCal date format (YYYYMMDD) to Date object
function parseICalDate(dateStr) {
  const year = parseInt(dateStr.substring(0, 4));
  const month = parseInt(dateStr.substring(4, 6)) - 1; // Months are 0-indexed
  const day = parseInt(dateStr.substring(6, 8));
  return new Date(year, month, day);
}

// Format date as YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
