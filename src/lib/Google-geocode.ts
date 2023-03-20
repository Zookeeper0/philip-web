import Geocode from "react-geocode";

Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "");
Geocode.setLanguage("en");
Geocode.enableDebug();

const GeoCode = async (currentAddr: string) => {
  return Geocode.fromAddress(currentAddr)
    .then((response) => {
      const { lat, lng } = response.results[0].geometry.location;

      return { lat, lng };
    })
    .catch((err) => console.log(err));
};

export default GeoCode;
