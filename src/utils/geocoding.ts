// src/utils/geocoding.ts

export async function geocodeAddress(address: string): Promise<{ lat: number; lon: number } | null> {
  const encoded = encodeURIComponent(address);
  const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&limit=1`);

  const data = await res.json();

  if (data && data.length > 0) {
    const { lat, lon } = data[0];
    return { lat: parseFloat(lat), lon: parseFloat(lon) };
  }

  return null;
}
