import axios from "axios";

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
    const response = await axios.get("https://ipapi.co/json/");
    if (!response?.data) {
      throw new Error("Unable to get location");
    }
    return {
      latitude: response?.data.latitude,
      longitude: response?.data.longitude,
    };
  }
};