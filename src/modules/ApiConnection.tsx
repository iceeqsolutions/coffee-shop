import {
  ApiDataProps,
  ApiDataItemProps,
} from "../interfaces/ApiDataInterfaces";
import { useState, useEffect } from "react";
import axios from "axios";

/* SAMPLE DATA
"id": 1,
"name": "Signature Blend",
"description": "A rich, full-bodied coffee with notes of dark chocolate and black cherry. Grown on the slopes of a mist-covered mountain in Central America.",
"price": 12.99,
"region": "Central America",
"weight": 500,
"flavor_profile": [
  "Dark Chocolate",
  "Black Cherry"
],
"grind_option": [
  "Whole Bean",
  "Cafetiere",
  "Filter",
  "Espresso"
],
"roast_level": 3,
"image_url": "https://iili.io/H8Y78Qt.webp" 
*/

const ApiConnection: React.FC<ApiDataProps> = ({ apiEndpoint }) => {
  const [showData, setShowData] = useState<ApiDataItemProps[]>([]);
  useEffect(() => {
    if (!apiEndpoint) {
      console.error("API endpoint is undefined");
      return;
    }
    axios.get(apiEndpoint).then((response) => {
      setShowData(response.data);
    });
  }, [apiEndpoint]);

  return (
    <>
      {showData.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <p>{item.region}</p>
          <p>{item.roast_level}</p>
          <img src={item.image_url} alt={item.name} />
        </div>
      ))}
    </>
  );
};

export default ApiConnection;
