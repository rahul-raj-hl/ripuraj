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
    const { page, pageSize, state } = params;
    const queryParams = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
      ...(state && { state })
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
