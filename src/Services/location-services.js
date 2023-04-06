export const getCurrentLocation = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (err) => {
          reject(err);
        }
      );
    });
    return {
      latitude: position?.coords?.latitude,
      longitude: position?.coords?.longitude,
    };
  } catch (error) {
    // If user does not give location permission, try to get location from IP address
    const response = await fetch("https://ipapi.co/json/");
    if (!response.ok) {
      throw new Error("Unable to get location");
    }
    const data = await response.json();
    return {
      latitude: data.latitude,
      longitude: data.longitude,
    };
  }
};