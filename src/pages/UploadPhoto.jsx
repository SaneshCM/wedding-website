import React, { useState } from "react";
import { storage } from "../firebaseConfig"; // Firebase Storage import
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function UploadPhoto() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!image) return;
    
    setUploading(true);
    const storageRef = ref(storage, `uploads/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Handle upload progress (optional)
      },
      (error) => {
        console.error("Upload error:", error);
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUploadedUrl(downloadURL);
          setUploading(false);
        });
      }
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 px-4 sm:px-8 md:px-16">
      <h2 className="text-5xl font-bold text-center mb-10">Upload Your Photo</h2>

      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-6">
        {/* Upload Icon */}
        <label className="cursor-pointer flex flex-col items-center space-y-2">
          <FaCloudUploadAlt className="text-6xl text-gray-500" />
          <span className="text-lg font-medium">Click to Upload</span>
          <input type="file" onChange={handleFileChange} className="hidden" />
        </label>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={!image || uploading}
          className={`px-6 py-3 rounded-lg text-white font-semibold transition ${
            uploading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 hover:bg-gray-900"
          }`}
        >
          {uploading ? "Uploading..." : "Upload Photo"}
        </button>

        {/* Show Uploaded Image */}
        {uploadedUrl && (
          <div className="mt-6">
            <p className="text-lg font-medium">Uploaded Successfully!</p>
            <img src={uploadedUrl} alt="Uploaded" className="mt-4 w-48 h-48 object-cover rounded-lg shadow-lg" />
          </div>
        )}
      </div>
    </div>
  );
}
