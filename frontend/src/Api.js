export const postRequest = async (endpoint, data) => {
    const response = await fetch(`http://localhost:8000${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data),
    });

    const result = await response.json();
    return result;
  };
  