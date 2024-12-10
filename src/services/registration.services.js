export const register = async (registrParams) => {
  try {
    const response = await fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registrParams),
    });
    const data = await response.json();

    if (response.ok) {
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error, 'registration Error');
    throw Error(error);
  }
};
