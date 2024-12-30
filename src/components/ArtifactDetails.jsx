// import React from "react";
// import { useLoaderData, useParams } from "react-router-dom";

// const ArtifactDetails = () => {
//   const { id } = useParams();
//   console.log(id);
//   const artifact = useLoaderData();
//   console.log(artifact);

//   // Ensure the artifact data is available
//   if (!artifact) {
//     return <div>Artifact not found</div>;
//   }

//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="mx-auto max-w-7xl px-4">
//         <h2 className="text-3xl font-bold mb-6">{artifact.name}</h2>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="overflow-hidden rounded-lg bg-white shadow-md">
//             <img
//               src={artifact.image}
//               alt={artifact.name}
//               className="w-full h-64 object-cover"
//             />
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <p className="text-lg mb-4">{artifact.description}</p>
//             <div className="mb-4">
//               <strong>Location:</strong> {artifact.location}
//             </div>
//             <div className="mb-4">
//               <strong>Time Period:</strong> {artifact.date}
//             </div>
//             <div className="flex items-center">
//               <span className="text-sm text-gray-500">❤️ {artifact.likes}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ArtifactDetails;

import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ArtifactDetails = () => {
  const { id } = useParams();
  const artifact = useLoaderData();

  // Check if artifact data is still loading or not found
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

            {/* Footer */}
            <div className="mt-6">
              <button
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => alert("Feature coming soon!")}
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
