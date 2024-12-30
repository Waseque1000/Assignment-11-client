import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { MdPlace, MdEvent } from "react-icons/md";

const ArtifactCard = ({ artifact }) => (
  <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1">
    <img
      src={artifact.image}
      alt={artifact.name}
      className="h-48 w-full object-cover"
    />
    <div className="p-4">
      <h3 className="mb-2 text-xl font-semibold">{artifact.name}</h3>
      <p className="mb-4 text-gray-600">{artifact.description}</p>
      <div className="mb-4 flex flex-wrap gap-2 text-sm text-gray-500">
        <span className="flex items-center">
          <MdPlace className="mr-1 h-4 w-4" /> {artifact.location}
        </span>
        <span className="flex items-center">
          <MdEvent className="mr-1 h-4 w-4" /> {artifact.date}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">❤️ {artifact.likes}</span>
        <button className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  </div>
);

const FeaturedArtifacts = () => {
  const artifacts = useLoaderData();
  const [visibleCount, setVisibleCount] = useState(6); // State to control visible artifacts

  const showAll = () => {
    setVisibleCount(artifacts.length); // Show all artifacts
  };

  const visibleArtifacts = artifacts.slice(0, visibleCount); // Get visible artifacts

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold">Featured Artifacts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleArtifacts.map((artifact) => (
            <ArtifactCard key={artifact.name} artifact={artifact} />
          ))}
        </div>
        {visibleCount < artifacts.length && ( // Show button only if there are more artifacts
          <div className="mt-8 flex justify-center">
            <Link to="/all-artifacts">
              <button className="rounded-full bg-blue-600 px-6 py-3 text-sm text-white hover:bg-blue-700">
                Show All
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedArtifacts;
