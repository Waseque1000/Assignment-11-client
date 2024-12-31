import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ArtifactDetails = () => {
  const { id } = useParams();
  const artifactData = useLoaderData();

  const [artifact, setArtifact] = useState(artifactData); // Local state for artifact data

  // Handle adding artifact to favorites
  const handleAddToFavorites = async () => {
    try {
      // Send a POST request to save the artifact in the favorites database
      const response = await fetch("http://localhost:5000/liked", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: artifact.name,
          description: artifact.description,
          image: artifact.image,
          location: artifact.location,
          date: artifact.date,
          likes: artifact.likes,
        }),
      });

      if (response.ok) {
        toast.success("Artifact added to favorites!");
      } else {
        console.error("Failed to add to favorites");
      }
    } catch (error) {
      console.error("An error occurred while adding to favorites:", error);
    }
  };

  // If the artifact is not found
  if (!artifact) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500">
            Artifact not found
          </h2>
          <p className="text-gray-600 mt-2">
            The requested artifact (ID: {id}) does not exist or has been
            removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          {artifact.name}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Artifact Image */}
          <div className="lg:col-span-1">
            <img
              src={artifact.image}
              alt={artifact.name}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Artifact Details */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-6">{artifact.description}</p>

            <div className="space-y-4">
              <div>
                <strong className="text-gray-800">Location:</strong>{" "}
                <span className="text-gray-600">{artifact.location}</span>
              </div>
              <div>
                <strong className="text-gray-800">Time Period:</strong>{" "}
                <span className="text-gray-600">{artifact.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-800">❤️ Likes:</span>
                <span className="text-gray-600">{artifact.likes}</span>
              </div>
            </div>

            {/* Add to Favorites Button */}
            <div className="mt-6">
              <button
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={handleAddToFavorites}
              >
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtifactDetails;
