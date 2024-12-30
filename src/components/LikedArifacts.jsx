import { useLoaderData } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";
import { useState } from "react";

const LikedArtifacts = () => {
  // Fetch data using useLoaderData
  const data = useLoaderData();
  const [artifacts, setArtifacts] = useState(data); // Manage the artifacts in state

  // Delete artifact function
  const handleDelete = async (id) => {
    console.log("Attempting to delete artifact with id:", id); // Add this line
    try {
      const response = await fetch(`http://localhost:5000/liked/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete artifact");
      }

      setArtifacts((prevArtifacts) =>
        prevArtifacts.filter((artifact) => artifact.id !== id)
      );
    } catch (error) {
      console.error("Error deleting artifact:", error);
      alert("Failed to delete artifact. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Heart className="w-8 h-8 text-red-500" />
          <h1 className="text-3xl font-bold">My Collection</h1>
          <span className="bg-red-500 text-white font-bold px-3 py-1 rounded-full">
            {artifacts.length} items
          </span>
        </div>
      </div>

      {artifacts.length === 0 ? (
        <div className="text-center p-12">
          <div className="flex flex-col items-center gap-4">
            <Heart className="w-16 h-16 text-gray-300" />
            <h3 className="text-xl font-semibold">No artifacts found</h3>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact) => (
            <div
              key={artifact.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="pb-4">
                <h2 className="text-xl font-semibold mt-3 group-hover:text-primary transition-colors">
                  {artifact.title}
                </h2>
              </div>

              {/* Display Artifact Image */}
              <div className="p-4">
                <img
                  src={artifact.image} // Assuming image URL is part of the data
                  alt={artifact.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="mt-2 text-sm text-gray-500">
                  {artifact.description}
                </p>
                <p className="mt-2 text-sm">{artifact.location}</p>
                <p className="mt-2 text-sm text-green-500">{artifact.date}</p>
              </div>

              {/* Delete Button Below */}
              <div className="pt-4 flex justify-end text-center">
                <button
                  onClick={() => handleDelete(artifact._id)}
                  className="text-red-500 hover:text-red-700 flex items-center justify-center gap-1"
                >
                  <Trash2 className="w-5 h-5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedArtifacts;
