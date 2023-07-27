import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ServiceCardContent() {
  const { id } = useParams();
  const [serviceContent, setServiceContent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/service/byId/${id}`)
      .then((response) => {
        setServiceContent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching service content:", error);
      });
  }, [id]);

  return (
    <div>
      {serviceContent ? (
        <div>
          <h2>{serviceContent.Job?.title}</h2>
          <p>
            Price: {id} {serviceContent.Job?.price}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
