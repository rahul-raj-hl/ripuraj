export const apiRequest = async (url, payload) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error("Failed to fetch data from the server.");
    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Network error. Please try again.");
  }
};
