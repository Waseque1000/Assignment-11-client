import { useLoaderData } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const LikedArtifacts = () => {
  // Fetch data using useLoaderData
  const data = useLoaderData();
  const [artifacts, setArtifacts] = useState(data); // Manage the artifacts in state

  // Delete artifact function
  const handleDelete = async (id) => {
    console.log("Attempting to delete artifact with id:", id); // Add this line
    try {
      const response = await fetch(
        `https://assignment-11-psi.vercel.app/liked/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete artifact");
      }

      setArtifacts((prevArtifacts) =>
        prevArtifacts.filter((artifact) => artifact._id !== id)
      );
    } catch (error) {
      console.error("Error deleting artifact:", error);
      toast.error("Failed to delete artifact. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Liked Artifacts</title>
      </Helmet>
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
              key={artifact._id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={artifact.image}
                  alt={artifact.title}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {artifact.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {artifact.description}
                </p>
                <p className="mt-2 text-sm">{artifact.location}</p>
                <p className="mt-2 text-sm text-green-500">{artifact.date}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleDelete(artifact._id)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-700"
                  >
                    <Trash2 className="w-5 h-5 mr-1" />
                    Delete
                  </button>
                  <span className="text-sm text-gray-500">
                    {artifact.likes} likes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedArtifacts;
