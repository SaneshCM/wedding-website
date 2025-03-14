import React, { useEffect, useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, listAll, getDownloadURL } from "firebase/storage";

function PhotoGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = ref(storage, "uploads/");
      const result = await listAll(imagesRef);

      const urls = await Promise.all(
        result.items.map(async (imageRef) => {
          return await getDownloadURL(imageRef);
        })
      );

      setImages(urls);
    };

    fetchImages();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 text-gray-900 px-4 sm:px-8 md:px-16">
      <h2 className="text-5xl font-bold text-center mb-10">Photo Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.length > 0 ? (
          images.map((url, index) => (
            <img key={index} src={url} alt="Uploaded" className="w-full h-64 object-cover rounded-lg shadow-md" />
          ))
        ) : (
          <p className="text-lg">No photos uploaded yet.</p>
        )}
      </div>
    </div>
  );
}

export default PhotoGallery;
