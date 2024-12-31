import React, { useState } from "react";
import useAuth from "../services/useAuth";
import { toast } from "react-toastify";

const AddArtifact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    type: "",
    context: "",
    createdAt: "",
    discoveredAt: "",
    discoveredBy: "",
    location: "",
  });

  const artifactTypes = [
    "Tools",
    "Weapons",
    "Documents",
    "Writings",
    "Pottery",
    "Jewelry",
    "Sculpture",
    "Architecture",
    "Clothing",
    "Ritual Objects",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const artifactData = {
      ...formData,
      userEmail: user.email,
    };

    try {
      const response = await fetch("http://localhost:5000/all-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artifactData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Artifact added successfully:", result);
      toast.success("Artifact added successfully!");
      setFormData({
        name: "",
        imageUrl: "",
        type: "",
        context: "",
        createdAt: "",
        discoveredAt: "",
        discoveredBy: "",
        location: "",
      });
    } catch (error) {
      console.error("Error adding artifact:", error);
      toast.error("Failed to add artifact. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Add New Artifact
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Artifact Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Artifact Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Artifact Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Artifact Image URL *
            </label>
            <input
              type="url"
              name="imageUrl"
              required
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="https://"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Artifact Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Artifact Type *
            </label>
            <select
              name="type"
              required
              value={formData.type}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a type</option>
              {artifactTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Historical Context */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Historical Context *
            </label>
            <textarea
              name="context"
              required
              rows={4}
              value={formData.context}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe the historical significance and context of the artifact..."
            />
          </div>

          {/* Created At */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Created At *
            </label>
            <input
              type="text"
              name="createdAt"
              required
              value={formData.createdAt}
              onChange={handleInputChange}
              placeholder="e.g., 100 BC"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Discovered At */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Discovered At *
            </label>
            <input
              type="text"
              name="discoveredAt"
              required
              value={formData.discoveredAt}
              onChange={handleInputChange}
              placeholder="e.g., 1799"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Discovered By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Discovered By *
            </label>
            <input
              type="text"
              name="discoveredBy"
              required
              value={formData.discoveredBy}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Present Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Present Location *
            </label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleInputChange}
              placeholder="e.g., The British Museum, London"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Logged-in User Info */}
          <div className="space-y-4 bg-gray-50 p-4 rounded-md">
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Added By
              </label>
              <input
                type="text"
                // value={user.name || ""}
                // readOnly
                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
              />
            </div> */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User Email
              </label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm transition duration-150 ease-in-out disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Adding Artifact...
              </>
            ) : (
              "Add Artifact"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtifact;
