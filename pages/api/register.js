export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstname, lastname, email, password } = req.body;

  if (!firstname || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Simple mock: just return a user object
  const user = {
    id: Date.now(),
    firstname,
    lastname,
    email,
  };

  res.status(200).json({ user, accessToken: 'mock-token' });
}