export async function createUser(userData) {
  try {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const jsonResponse = await response.json();

    if (response.status !== 200) {
      console.log(jsonResponse.error);
      return [null, jsonResponse.error];
    }

    return [jsonResponse, null];
  } catch (error) {
    return [null, error || "Something went wrong"];
  }
}
