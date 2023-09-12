import fetch from 'node-fetch';

export async function get(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `HTTP Error Response: ${response.status} ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function post(url, body) {
  try {
    let response = await fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error(
        `HTTP Error Response: ${response.status} ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
