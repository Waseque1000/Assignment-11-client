import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Search, Filter, Calendar, Map, Clock, Book } from "lucide-react";
import { Helmet } from "react-helmet";

const AllArtifacts = ({
  stats = { totalArtifacts: 0, categories: 0, timePeriods: 0, locations: 0 },
}) => {
  const artifacts = useLoaderData(); // Load artifact data
  // console.log(artifacts[0]._id);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate(); // Hook to navigate to a different page

  const filters = [
    { id: "all", label: "All", icon: Book },
    { id: "tools", label: "Tools", icon: Clock },
    { id: "weapons", label: "Weapons", icon: Map },
    { id: "documents", label: "Documents", icon: Calendar },
  ];

  // Filter and search logic
  const filteredArtifacts = artifacts.filter((artifact) => {
    const matchesSearch =
      (artifact.name &&
        artifact.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (artifact.description &&
        artifact.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter =
      activeFilter === "all" || artifact.category === activeFilter;

    return matchesSearch && matchesFilter;
  });

  // Function to handle navigation when "View Details" button is clicked
  const handleViewDetails = (artifactId) => {
    navigate(`/artifact/${artifactId}`); // Navigate to the artifact details page using the artifact's id
  };

  return (
    <section className="bg-gray-50  dark:bg-gray-800  -mt-12 py-16">
      <Helmet>
        <title>All Artifacts</title>
      </Helmet>
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <h2 className="mb-8 text-3xl  dark:text-white font-bold">
          All Artifacts
        </h2>

        {/* Search and Filters */}
        <div className="bg-white   dark:text-white  dark:bg-gray-800  shadow-sm mb-8 p-6 rounded-lg">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <input
              type="text"
              placeholder="Search artifacts by name..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-gray-500 hover:text-gray-700">
              <Filter className="w-5 h-5" />
              <button className="text-sm btn text-white hover:bg-green-900 bg-red-500">
                Filters
              </button>
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                  transition-colors duration-200
                  ${
                    activeFilter === id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-500">Total Artifacts</div>
              <div className="text-2xl font-semibold mt-1">
                {stats.totalArtifacts}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-500">Categories</div>
              <div className="text-2xl font-semibold mt-1">
                {stats.categories}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-500">Time Periods</div>
              <div className="text-2xl font-semibold mt-1">
                {stats.timePeriods}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-500">Locations</div>
              <div className="text-2xl font-semibold mt-1">
                {stats.locations}
              </div>
            </div>
          </div>
        </div>

        {/* Artifacts Grid */}
        <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-3">
          {filteredArtifacts.map((artifact) => (
            <div
              key={artifact.name}
              className="overflow-hidden rounded-lg  dark:bg-gray-800  dark:text-white bg-white shadow-md transition-transform hover:-translate-y-1"
            >
              <img
                src={artifact.image}
                alt={artifact.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl dark:text-white font-semibold">
                  {artifact.name}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-white">
                  {artifact.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2 text-sm text-gray-500">
                  <span className="flex items-center dark:text-white">
                    <Map className="mr-1 h-4 w-4 dark:text-white" />{" "}
                    {artifact.location}
                  </span>
                  <span className="flex items-center  dark:text-white">
                    <Calendar className="mr-1 h-4 w-4 dark:text-white" />{" "}
                    {artifact.date}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm  dark:text-white text-gray-500">
                    ❤️ {artifact.likes}
                  </span>
                  <button
                    onClick={() => handleViewDetails(artifact._id)}
                    className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllArtifacts;
