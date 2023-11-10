export default function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;
    // Handle the form data as needed, e.g., save it to a database

    res.status(200).json({ message: 'Form submitted successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}