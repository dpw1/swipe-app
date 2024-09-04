import React, { useEffect, useState } from "react";
import "./NewTest.scss";

import { v4 as uuidv4 } from "uuid";
import { createClient } from "@supabase/supabase-js";
import { getUserImages } from "./services/auth";

export default function NewTest(props) {
  const supabase = createClient(
    "https://kjsscbcikciebrzjgbcv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqc3NjYmNpa2NpZWJyempnYmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2Mjk0MDAsImV4cCI6MjAzOTIwNTQwMH0.L-8T_MvyqvQcR1dfeTO1Td62SsSadM2qTkZjvkDO0Io",
  );

  const { user } = props;

  const userId = user.id;
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [images, setImages] = useState(null); // images form database

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here (e.g., sending the image to an API endpoint)
    if (image) {
      console.log("Image to upload:", image);
      // Reset the image and preview after submission
      setImage(null);
      setPreview(null);
    } else {
      alert("Please upload an image before submitting.");
    }
  };

  useEffect(() => {
    (async () => {
      const _images = await getUserImages(userId);

      setImages(_images);
    })();
  }, []);

  return (
    <div className="NewTest">
      <div className="container">
        <h2>Upload Your Image</h2>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {preview && (
            <div>
              <h3>Image Preview:</h3>
              <img
                src={preview}
                alt="Selected"
                style={{ maxWidth: "300px", marginTop: "10px" }}
              />
            </div>
          )}
          <button
            onClick={() => {
              (async () => {
                const filename = userId + "/" + uuidv4();

                debugger;
                const { data, error } = await supabase.storage
                  .from("pictures")
                  .upload(filename, image);

                if (data) {
                  alert("succs");
                } else {
                  console.log(error);
                }

                setImage(null);
                setPreview(null);
              })();
            }}
            type="submit"
            style={{ marginTop: "20px" }}>
            Upload
          </button>
        </form>
      </div>

      <div className="NewTest-previous">
        <h2>Uploaded images</h2>
        <div className="NewTest-gallery">
          {images &&
            images.map((e) => {
              return (
                <div className="NewTest-item">
                  <img key={e} src={e} alt="" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
