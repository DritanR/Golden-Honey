const BASE_URL = 'http://localhost:3001'; // Update with your backend server URL

export async function fetchData() {
  const response = await fetch(`${BASE_URL}/api/data`);
  const data = await response.json();
  return data;
}