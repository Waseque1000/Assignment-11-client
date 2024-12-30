// import React, { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { Trash2, Edit, MapPin, Calendar } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function MyArtifacts({ onUpdate, onDelete }) {
//   const loaderData = useLoaderData();
//   const [artifacts, setArtifacts] = useState(loaderData || []);

//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [selectedArtifactId, setSelectedArtifactId] = useState(null);

//   // Handle delete button click
//   const handleDelete = (id) => {
//     setSelectedArtifactId(id);
//     setIsDeleteModalOpen(true);
//   };

//   // Confirm and delete artifact
//   const confirmDelete = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/all-data/${selectedArtifactId}`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to delete artifact");
//       }

//       setArtifacts(
//         artifacts.filter((artifact) => artifact._id !== selectedArtifactId)
//       );
//       setIsDeleteModalOpen(false);
//       toast.success("Artifact deleted successfully!", {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } catch (error) {
//       console.error("Error deleting artifact:", error);
//       toast.error("Failed to delete the artifact. Please try again.", {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     }
//   };

//   // Handle update button click
//   const handleUpdate = (artifactId) => {
//     onUpdate?.(artifactId);
//   };

//   if (artifacts.length === 0) {
//     return (
//       <div className="min-h-[60vh] flex items-center justify-center">
//         <div className="max-w-md bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md">
//           <p className="text-gray-700 dark:text-gray-300">
//             You haven't added any artifacts yet. Start contributing by adding
//             your first artifact!
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <ToastContainer />
//       <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
//         My Artifacts Collection
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {artifacts.map((artifact) => (
//           <div
//             key={artifact._id}
//             className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
//           >
//             <img
//               src={artifact.image}
//               alt={artifact.name}
//               className="w-full h-48 object-cover"
//             />

//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
//                 {artifact.name}
//               </h2>

//               <div className="space-y-2 mb-4">
//                 <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
//                   <Calendar className="w-4 h-4 mr-2" />
//                   Created: {artifact.date}
//                 </div>
//                 <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
//                   <MapPin className="w-4 h-4 mr-2" />
//                   Location: {artifact.location}
//                 </div>
//               </div>

//               <div className="flex justify-between items-center mt-4">
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => handleUpdate(artifact._id)}
//                     className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-md"
//                   >
//                     <Edit className="w-4 h-4 mr-2" />
//                     Update
//                   </button>
//                   <button
//                     onClick={() => handleDelete(artifact._id)}
//                     className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
//                   >
//                     <Trash2 className="w-4 h-4 mr-2" />
//                     Delete
//                   </button>
//                 </div>
//                 <span className="text-sm text-gray-600 dark:text-gray-400">
//                   ❤️ {artifact.likes} likes
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Delete Confirmation Modal */}
//       {isDeleteModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full">
//             <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
//               Confirm Deletion
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mb-6">
//               Are you sure you want to delete this artifact? This action cannot
//               be undone.
//             </p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={() => setIsDeleteModalOpen(false)}
//                 className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Trash2, Edit, MapPin, Calendar } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyArtifacts({ onUpdate }) {
  const loaderData = useLoaderData();
  const [artifacts, setArtifacts] = useState(loaderData || []);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedArtifactId, setSelectedArtifactId] = useState(null);

  // Handle delete button click
  const handleDelete = (id) => {
    setSelectedArtifactId(id);
    setIsDeleteModalOpen(true);
  };

  // Confirm and delete artifact
  const confirmDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/all-data/${selectedArtifactId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete artifact");
      }

      setArtifacts(
        artifacts.filter((artifact) => artifact._id !== selectedArtifactId)
      );
      setIsDeleteModalOpen(false);

      // Success toast
      toast.success("Artifact deleted successfully!");
    } catch (error) {
      console.error("Error deleting artifact:", error);

      // Error toast
      toast.error("Failed to delete the artifact. Please try again.",  );
    }
  };

  // Handle update button click
  const handleUpdate = (artifactId) => {
    onUpdate?.(artifactId);
  };

  if (artifacts.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <ToastContainer />
        <div className="max-w-md bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md">
          <p className="text-gray-700 dark:text-gray-300">
            You haven't added any artifacts yet. Start contributing by adding
            your first artifact!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        My Artifacts Collection
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <div
            key={artifact._id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <img
              src={artifact.image}
              alt={artifact.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {artifact.name}
              </h2>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  Created: {artifact.date}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  Location: {artifact.location}
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdate(artifact._id)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-md"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(artifact._id)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </button>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  ❤️ {artifact.likes} likes
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Confirm Deletion
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Are you sure you want to delete this artifact? This action cannot
              be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
