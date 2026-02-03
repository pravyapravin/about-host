// Vercel Serverless Function to fetch and parse Airbnb iCal feed
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate'); // Cache for 5 minutes

  const { listing } = req.query;

  // Map listing slugs to their iCal URLs
  const calendarUrls = {
    'beach-bungalow': 'https://www.airbnb.com/calendar/ical/38033343.ics?s=2c0c9b896c694bdd900a9d9223fbfb61&locale=en-GB'
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
