
// Example in src/lib/api.ts
const API_URL = 'http://localhost:8000/api';

export async function getProjects() {
  const response = await fetch(`${API_URL}/projects/`);
  return await response.json();
}

export async function sendContactRequest(data: {
  name: string;
  email: string;
  message: string;
}) {
  const response = await fetch(`${API_URL}/contact/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}