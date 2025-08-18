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
      //console.log(jsonResponse.error);
      return [null, jsonResponse.error];
    }

    return [jsonResponse, null];
  } catch (error) {
    return [null, error || "Something went wrong"];
  }
}

export async function getDashboardData(params = {}) {
  try {
    let { page = 1, limit = 25, state, city, district, from, to } = params;

    // normalize text inputs
    state = state?.trim();
    city = city?.trim();
    district = district?.trim();

    const queryParams = new URLSearchParams();
    queryParams.set("page", String(page));
    queryParams.set("limit", String(limit));
    if (state) queryParams.set("state", state);
    if (city) queryParams.set("city", city);
    if (district) queryParams.set("district", district);
    if (from) queryParams.set("startDate", from);
    if (to) queryParams.set("endDate", to);

    const response = await fetch(`/api/dashboard?${queryParams.toString()}`);
    const jsonResponse = await response.json();

    if (!response.ok) return [null, jsonResponse?.error || "Request failed"];
    return [jsonResponse, null];
  } catch (error) {
    return [null, error || "Something went wrong"];
  }
}

