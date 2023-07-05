import axios from "axios";

export async function getMapPreview(lat: number, lng: number): Promise<string> {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
  &markers=color:red%7Clabel:S%7C${lat},${lng}
  &key=AIzaSyDpodzVpQtoyBSGV3qU5ccXveppLsdBRcQ&signature=YOUR_SIGNATURE`;

  try {
    const response = await axios.get(imagePreviewUrl);
    // You can handle the response here if needed
    // For now, we'll just return the image URL
    return response.config.url;
  } catch (error) {
    // Handle any errors that occurred during the API request
    console.error("Error fetching map preview:", error);
    return "";
  }
}
