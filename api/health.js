
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  res.status(200).json({ 
    status: 'ok',
    message: 'Backend is working!',
    timestamp: new Date().toISOString(),
    environment: process.env.AI_API_KEY ? 'API key is set' : 'API key is missing'
  });
}
