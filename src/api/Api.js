export async function api(endpoint) {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}
