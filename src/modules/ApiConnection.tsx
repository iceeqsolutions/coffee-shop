import {
  ApiDataProps,
  ApiDataItemProps,
} from "../interfaces/ApiDataInterfaces";
import { useState, useEffect } from "react";
import axios from "axios";
import ShoppingCartButton from "../components/ShoppingCartButton";

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

const ApiConnection: React.FC<ApiDataProps> = ({
  apiEndpoint,
  numberOfItems,
}) => {
  const [showData, setShowData] = useState<ApiDataItemProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!apiEndpoint) {
      console.error("API endpoint is undefined");
      return;
    }
    // setIsLoading(true);
    axios.get(apiEndpoint).then((response) => {
      if (numberOfItems < response.data.length) {
        setShowData(response.data.slice(0, numberOfItems));
      } else {
        setShowData(response.data);
      }
    });
    setIsLoading(false);
  }, [apiEndpoint, numberOfItems, isLoading]);

  return (
    <>
      <div className="mx-auto mb-32 flex flex-wrap gap-8 justify-center items-center">
        {isLoading && (
          <p className="text-yellow-700 text-3xl my-10 font-bold italic">
            Loading...
          </p>
        )}
        {showData.map((item) => (
          <div
            key={item.id}
            className="w-96 flex flex-col justify-center bg-neutral-50 rounded-3xl shadow-2xl"
          >
            <h3 className="h-24 p-8 uppercase text-2xl text-gray-400 font-semibold tracking-widest">
              {item.name}
            </h3>
            <img
              className="h-80 aspect-square object-cover object-center"
              loading="lazy"
              src={item.image_url}
              alt={item.name}
            />
            <p className="h-64 p-8 text-xl">{item.description}</p>
            <p className="px-8 text-lg">Price: {item.price}€</p>
            <p className="px-8 text-lg">Coffee bean region: {item.region}</p>
            <p className="px-8 pb-8 text-lg">
              Roast level: {item.roast_level}/5
            </p>
            <ShoppingCartButton key={item.id} item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ApiConnection;
