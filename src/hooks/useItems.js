import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};

export default useItems;
