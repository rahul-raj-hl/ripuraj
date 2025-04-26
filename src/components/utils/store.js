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

export async function getDashboardData(params) {
  try {
    const { page, limit, state, city, from, to } = params;  // ✅ Updated

    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),  // ✅ Updated
      ...(state && { state }),
      ...(city && { city }),
      ...(from && { startDate: from }),
      ...(to && { endDate: to }),
    });

    const response = await fetch(`/api/dashboard?${queryParams.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await response.json();

    if (response.status !== 200) {
      return [null, jsonResponse.error];
    }

    return [jsonResponse, null];
    
  } catch (error) {
    return [null, error || "Something went wrong"];
  }
}
